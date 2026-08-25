import { ListenerCollection } from '@hypothesis/frontend-shared';

import type { Shape, ShapeAnchor } from '../../types/annotator';
import type {
  ElementExcerpt,
  ElementSelector,
  Selector,
  ShapeSelector,
} from '../../types/api';
import { DrawError } from '../draw-tool';
import { nodeFromXPath, xpathFromNode } from './xpath';

/**
 * Anchoring support for arbitrary visible elements in ordinary web pages.
 *
 * Shape annotations are stored as a {@link ShapeSelector} with
 * `anchor: "element"`, whose coordinates are fractions (0-1) of the element's
 * rendered bounding box, together with an {@link ElementSelector} which
 * identifies the element the shape was drawn on.
 *
 * Any visible element can be a target: images (`<img>`), SVGs, canvases, but
 * also blocks of content such as paragraphs, headings, cards and sections.
 *
 * Because web pages can render content in many different ways (and can cover
 * it with overlays), the annotation flow does not guess which element a drawn
 * shape refers to. Instead the user first *selects* the element with
 * {@link ElementPicker} and then draws the shape on it.
 */

/** Class set on the picker's outline overlay element. */
const PICKER_CLASS = 'h-local-element-picker';

/** Tags which are never annotated directly. */
const EXCLUDED_TAGS = new Set([
  'HTML',
  'BODY',
  'HEAD',
  'SCRIPT',
  'STYLE',
  'LINK',
  'META',
  'NOSCRIPT',
  'TEMPLATE',
  'TITLE',
  'BASE',
]);

/**
 * Return true if `element` is an element that can be annotated.
 *
 * This excludes document scaffolding, invisible elements and the client's
 * own UI.
 */
export function isAnnotatableElement(element: Element | null): boolean {
  if (!(element instanceof Element)) {
    return false;
  }
  if (EXCLUDED_TAGS.has(element.tagName)) {
    return false;
  }
  if (
    element.closest(
      `hypothesis-sidebar, hypothesis-notebook, hypothesis-profile, .${PICKER_CLASS}, .${PICKER_CLASS}-label`,
    )
  ) {
    return false;
  }
  return true;
}

/** Return true if `element` is an image-like element. */
function isImageLike(element: Element): boolean {
  return (
    element instanceof HTMLImageElement ||
    element instanceof SVGSVGElement ||
    element instanceof HTMLCanvasElement ||
    element instanceof HTMLVideoElement
  );
}

/** Return true if `element` is displayed inline. */
function isInlineElement(element: Element): boolean {
  return getComputedStyle(element).display.startsWith('inline');
}

/** Return true if the element is rendered (not hidden by CSS). */
function isRendered(element: Element): boolean {
  if (typeof element.checkVisibility === 'function') {
    return element.checkVisibility();
  }
  const rect = element.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

/**
 * Return the innermost image-like element inside `container` which contains
 * the point `(x, y)`, or `null`.
 *
 * This is used to find images which can't be hit-tested (eg. because they
 * have `pointer-events: none`) but visually contain the pointer.
 */
function innermostImageContaining(
  container: Element,
  x: number,
  y: number,
): Element | null {
  const hits: Element[] = [];
  for (const el of container.querySelectorAll('img, svg, canvas, video')) {
    if (!isRendered(el)) {
      continue;
    }
    const rect = el.getBoundingClientRect();
    if (
      rect.width > 4 &&
      rect.height > 4 &&
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      hits.push(el);
    }
  }
  if (hits.length === 0) {
    return null;
  }
  hits.sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    return rectA.width * rectA.height - rectB.width * rectB.height;
  });
  return hits[0];
}

/**
 * Climb from a text-level inline element (eg. a `<span>` containing a word)
 * to its nearest block-level ancestor, so that hovering over text selects the
 * paragraph, heading or other content block it belongs to.
 */
function blockify(element: Element): Element {
  let node = element;
  while (
    node.parentElement &&
    node.children.length === 0 &&
    isInlineElement(node) &&
    !isImageLike(node)
  ) {
    node = node.parentElement;
  }
  return node;
}

/**
 * Elements considered by the geometric fallback in {@link elementFromPoint}.
 */
const CANDIDATE_SELECTOR = [
  'img',
  'picture',
  'svg',
  'canvas',
  'video',
  'p',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'li',
  'dt',
  'dd',
  'blockquote',
  'pre',
  'td',
  'th',
  'figcaption',
  'figure',
  'article',
  'section',
  'aside',
  'header',
  'footer',
  'main',
  'nav',
  'div',
  'a',
  'button',
  'label',
].join(', ');

/**
 * Return the annotatable element at the given viewport coordinates, or
 * `null`.
 *
 * This first uses hit-testing (`elementsFromPoint`), which respects the
 * visual stacking order of the page. If that fails - for example because the
 * element is not hit-testable or is covered by an overlay - it falls back to
 * a geometric search over common content elements, picking the innermost
 * element whose bounding box contains the point.
 */
export function elementFromPoint(x: number, y: number): Element | null {
  for (const el of document.elementsFromPoint(x, y)) {
    if (!isAnnotatableElement(el)) {
      continue;
    }
    const hit = blockify(el);
    // If the hit contains an image-like element which could not itself be
    // hit-tested (eg. `pointer-events: none`), prefer that.
    if (!isImageLike(hit)) {
      const innerImage = innermostImageContaining(hit, x, y);
      if (innerImage) {
        return innerImage;
      }
    }
    return hit;
  }

  // Geometric fallback for elements that can't be hit-tested.
  const seen = new Set<Element>();
  const hits: Element[] = [];
  for (const el of document.querySelectorAll(CANDIDATE_SELECTOR)) {
    if (!isAnnotatableElement(el)) {
      continue;
    }
    const target = blockify(el);
    if (seen.has(target) || !isRendered(target)) {
      continue;
    }
    seen.add(target);
    const rect = target.getBoundingClientRect();
    if (
      rect.width > 4 &&
      rect.height > 4 &&
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      hits.push(target);
    }
  }

  if (hits.length === 0) {
    return null;
  }

  // Prefer the innermost element: smallest area, and among equal areas the
  // deepest in the document tree.
  hits.sort((a, b) => {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    const areaDiff = rectA.width * rectA.height - rectB.width * rectB.height;
    if (areaDiff !== 0) {
      return areaDiff;
    }
    return depth(b) - depth(a);
  });
  return hits[0];
}

/** Return the depth of `element` in the document tree. */
function depth(element: Element): number {
  let count = 0;
  let node: Element | null = element;
  while ((node = node.parentElement)) {
    count += 1;
  }
  return count;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(Math.min(value, max), min);

/**
 * Convert a shape in viewport coordinates to fractions (0-1) of an element's
 * rendered bounding box, clamped so the shape stays within it.
 */
function shapeRelativeToElement(shape: Shape, element: Element): Shape {
  const box = element.getBoundingClientRect();
  const fraction = (x: number) =>
    clamp((x - box.left) / Math.max(box.width, 1), 0, 1);
  const fractionY = (y: number) =>
    clamp((y - box.top) / Math.max(box.height, 1), 0, 1);

  if (shape.type === 'rect') {
    let { left, top, right, bottom } = shape;
    left = fraction(left);
    top = fractionY(top);
    right = fraction(right);
    bottom = fractionY(bottom);
    if (right < left) {
      [left, right] = [right, left];
    }
    if (bottom < top) {
      [top, bottom] = [bottom, top];
    }
    return { type: 'rect', left, top, right, bottom };
  } else {
    return {
      type: 'point',
      x: fraction(shape.x),
      y: fractionY(shape.y),
    };
  }
}

const cleanText = (text: string) => text.replace(/\s+/g, ' ').trim();

/**
 * Return a short excerpt of the element's own textual content, used as the
 * description shown for the annotation in the sidebar and given to agents.
 *
 * For elements without text content (eg. images), falls back to the `alt`,
 * `aria-label` and `title` attributes.
 */
function elementText(element: Element): string | undefined {
  let text = cleanText(element.textContent ?? '');
  if (!text) {
    text =
      element.getAttribute('alt') ??
      element.getAttribute('aria-label') ??
      element.getAttribute('title') ??
      '';
    text = cleanText(text);
  }
  if (!text) {
    return undefined;
  }
  return text.slice(0, 256);
}

/**
 * Return true if drawing `img` to a canvas taints it. This happens for
 * cross-origin images which don't support CORS; such images cannot be
 * rendered into thumbnails or transferred between frames.
 */
function imageTaintsCanvas(img: HTMLImageElement): boolean {
  const src = img.currentSrc || img.src;
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
    return false;
  }
  try {
    if (new URL(src, document.baseURI).origin !== location.origin) {
      // Cross-origin images taint the canvas unless they are fetched with
      // CORS enabled (and the server sends the appropriate headers).
      if (
        img.crossOrigin !== 'anonymous' &&
        img.crossOrigin !== 'use-credentials'
      ) {
        return true;
      }
    }
  } catch {
    return false;
  }

  // Deterministic check passed; verify with a real canvas draw, which also
  // catches CORS-enabled images whose server response is still unsuitable.
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0, 1, 1);
    // Throws a SecurityError for tainted canvases.
    canvas.toDataURL();
    return false;
  } catch {
    return true;
  }
}

/**
 * Return the best absolute source URL for an element, for locating it again.
 *
 * Covers `<img>`, `<video>`, `<object>` and CSS background images: these are
 * the common cases for annotating a figure in a paper or article.
 */
function elementSource(element: Element): string | undefined {
  let source;
  if (element instanceof HTMLImageElement) {
    source = element.currentSrc || element.src;
  } else if (element instanceof HTMLVideoElement) {
    source = element.currentSrc || element.src || element.poster;
  } else if (element instanceof HTMLObjectElement) {
    source = element.data;
  }

  if (source) {
    try {
      return new URL(source, document.baseURI).href;
    } catch {
      return source;
    }
  }

  const background = getComputedStyle(element).backgroundImage;
  const match =
    background === null || background === void 0
      ? null
      : background.match(/url\((['"]?)(.*?)\1\)/);
  const cssURL =
    match === null || match === void 0
      ? void 0
      : match[2] === null || match[2] === void 0
        ? void 0
        : match[2].trim();
  if (cssURL && cssURL !== 'none') {
    try {
      return new URL(cssURL, document.baseURI).href;
    } catch {
      return cssURL;
    }
  }
  return undefined;
}

/**
 * Create an {@link ElementSelector} which identifies `element`.
 *
 * The selector keeps only what is needed to locate the element again:
 * tag name, id, class, image URL, XPath, plus a short excerpt of the
 * element's outer HTML as the primary context for consumers (eg. AI agents).
 */
function describeElement(element: Element): ElementSelector {
  const selector: ElementSelector = {
    type: 'ElementSelector',
    tagName: element.tagName.toLowerCase(),
    xpath: xpathFromNode(element, document.body),
  };
  const source = elementSource(element);
  if (source) {
    selector.src = source;
  }
  if (element instanceof HTMLImageElement) {
    selector.renderable = imageTaintsCanvas(element) === false;
  }
  const id = element.getAttribute('id');
  if (id) {
    selector.id = cleanText(id).slice(0, 200);
  }
  const className = element.getAttribute('class');
  if (className) {
    selector.class = cleanText(className).slice(0, 200);
  }
  selector.html = (element.outerHTML ?? '').slice(0, 1000);
  return selector;
}

/**
 * Generate selectors for a shape drawn on a previously selected element.
 *
 * @throws {Error} If the shape does not meaningfully overlap the element.
 */
export function describeShape(shape: Shape, element: Element): Selector[] {
  if (!isAnnotatableElement(element)) {
    throw new Error('Not an annotatable element');
  }
  const region = shapeRelativeToElement(shape, element);

  // Reject degenerate regions.
  if (region.type === 'rect') {
    const box = element.getBoundingClientRect();
    const width = (region.right - region.left) * box.width;
    const height = (region.bottom - region.top) * box.height;
    if (width < 5 || height < 5) {
      throw new Error('Shape does not overlap an element');
    }
  }

  return [
    describeElement(element),
    {
      type: 'ShapeSelector',
      anchor: 'element',
      shape: region,
      view: { left: 0, top: 0, right: 1, bottom: 1 },
      text: elementText(element),
    },
  ];
}

/**
 * Maximum length of the region text stored with a document rectangle.
 *
 * This is a locator excerpt for agents (enough to find the same text on the
 * live page), not a full context dump.
 */
const REGION_TEXT_MAX_LENGTH = 1000;

/** Maximum number of overlapping elements recorded for one rectangle. */
const REGION_ELEMENT_MAX_COUNT = 40;

/** Maximum length of the per-element text excerpt stored in `elements`. */
const REGION_ELEMENT_TEXT_MAX_LENGTH = 120;

/** Maximum length of the id/class excerpts stored for an element. */
const REGION_ELEMENT_ATTR_MAX_LENGTH = 120;

type RectBounds = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

/** Return true if two rectangles overlap (touching counts as overlap). */
function rectsOverlap(a: RectBounds, b: RectBounds): boolean {
  return (
    a.left <= b.right &&
    a.right >= b.left &&
    a.top <= b.bottom &&
    a.bottom >= b.top
  );
}

/**
 * Return a compact description of `element`, for the `elements` field of a
 * document rectangle. Unlike {@link describeElement}, this does not store
 * outer HTML: with many elements in one rectangle that would be too large.
 */
function describeRegionElement(element: Element): ElementExcerpt {
  const excerpt: ElementExcerpt = {
    tagName: element.tagName.toLowerCase(),
  };
  const id = cleanText(element.getAttribute('id') ?? '');
  if (id) {
    excerpt.id = id.slice(0, REGION_ELEMENT_ATTR_MAX_LENGTH);
  }
  const className = cleanText(element.getAttribute('class') ?? '');
  if (className) {
    excerpt.class = className.slice(0, REGION_ELEMENT_ATTR_MAX_LENGTH);
  }
  excerpt.xpath = xpathFromNode(element, document.body);
  const source = elementSource(element);
  if (source) {
    excerpt.src = source;
  }
  const text = elementText(element);
  if (text) {
    excerpt.text = text.slice(0, REGION_ELEMENT_TEXT_MAX_LENGTH);
  }
  return excerpt;
}

/**
 * Collect everything needed to locate a document rectangle again:
 *
 * - The visible text nodes which intersect the rectangle, in DOM order.
 * - Every element which intersects the rectangle, smallest first, as a
 *   compact locator excerpt.
 *
 * The text is what a non-visual consumer reads; the element list is how the
 * annotation can be re-anchored even if the page's coordinates later change.
 */
function describeRectRegion(shape: RectBounds) {
  // Text is collected from text nodes so that it matches what the rectangle
  // actually covers, rather than the text of a single large container which
  // happens to overlap it.
  const textPieces: string[] = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const value = cleanText(node.nodeValue ?? '');
    if (value === '') {
      continue;
    }

    const range = document.createRange();
    range.selectNodeContents(node);
    const rects = Array.from(range.getClientRects());
    const parent = node.parentElement;
    const parentOverlaps =
      parent !== null && rectsOverlap(parent.getBoundingClientRect(), shape);
    const intersects =
      rects.some(
        rect => rect.width > 0 && rect.height > 0 && rectsOverlap(rect, shape),
      ) || parentOverlaps;

    if (intersects) {
      textPieces.push(value);
    }
  }

  // Store every element which intersects the rectangle, smallest first, up
  // to a fixed cap. Smallest-first keeps the precise leaves (a label, an
  // image, a comment text) while still retaining their useful ancestors
  // (eg. a card with a stable id) when the cap is reached.
  const intersecting = Array.from(document.querySelectorAll('body *')).filter(
    el => {
      if (isAnnotatableElement(el) === false || isRendered(el) === false) {
        return false;
      }
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && rectsOverlap(rect, shape);
    },
  );
  const elements = intersecting
    .slice()
    .sort((a, b) => {
      const areaA = a.getBoundingClientRect();
      const areaB = b.getBoundingClientRect();
      return areaA.width * areaA.height - areaB.width * areaB.height;
    })
    .slice(0, REGION_ELEMENT_MAX_COUNT)
    .map(describeRegionElement);

  const regionText =
    textPieces.length > 0
      ? textPieces.join(' ').slice(0, REGION_TEXT_MAX_LENGTH)
      : undefined;

  return { regionText, elements };
}

/**
 * Generate a selector for a rectangle which is not anchored to an element
 * ("document rectangle"): the page URI and the rectangle's coordinates are
 * recorded, along with the viewport size, a short text excerpt for locating
 * the region and every element it overlaps.
 *
 * The shape's coordinates are fractions (0-1) of the document body's
 * bounding box so that the highlight can be rendered in the right place.
 *
 * @throws {Error} If the shape is not a rectangle.
 */
export function describeDocumentRect(shape: Shape): Selector[] {
  if (shape.type !== 'rect') {
    throw new Error('Document shapes must be rectangles');
  }

  const body = document.body;
  const box = body.getBoundingClientRect();
  const fraction = (x: number) =>
    clamp((x - box.left) / Math.max(box.width, 1), 0, 1);
  const fractionY = (y: number) =>
    clamp((y - box.top) / Math.max(box.height, 1), 0, 1);

  const { regionText, elements } = describeRectRegion(shape);

  return [
    {
      type: 'ShapeSelector',
      shape: {
        type: 'rect',
        left: fraction(shape.left),
        top: fractionY(shape.top),
        right: fraction(shape.right),
        bottom: fractionY(shape.bottom),
      },
      view: { left: 0, top: 0, right: 1, bottom: 1 },
      text: regionText === undefined ? undefined : regionText.slice(0, 512),
      regionText,
      elements,
      clientRect: {
        left: shape.left,
        top: shape.top,
        right: shape.right,
        bottom: shape.bottom,
      },
      viewport: { width: window.innerWidth, height: window.innerHeight },
    },
  ];
}

/**
 * Locate the element identified by an {@link ElementSelector}.
 *
 * The element is located using the stored XPath, falling back (for `<img>`
 * elements) to matching the image's absolute URL against the images in the
 * document. This makes anchoring robust to changes in the document structure.
 *
 * @throws {Error} If the element cannot be found.
 */
export function locateElement(selectors: Selector[]): Element {
  const elementSelector = selectors.find(s => s.type === 'ElementSelector') as
    | ElementSelector
    | undefined;
  if (!elementSelector) {
    throw new Error('No element selector found');
  }

  if (elementSelector.xpath) {
    try {
      const node = nodeFromXPath(elementSelector.xpath, document.body);
      if (node instanceof Element) {
        return node;
      }
    } catch {
      // Fall back to URL matching below.
    }
  }

  if (elementSelector.src) {
    const images = Array.from(document.querySelectorAll('img'));
    const match = images.find(
      img =>
        (img.currentSrc || img.src) === elementSelector.src ||
        img.src === elementSelector.src,
    );
    if (match) {
      return match;
    }
  }

  throw new Error('Element not found in document');
}

/**
 * Ensure that the parent of `element` is a positioned element, so that
 * absolutely positioned highlight elements appended to it are positioned
 * relative to it.
 */
function ensurePositionedParent(element: Element): HTMLElement {
  const parent = element.parentElement;
  if (!parent) {
    throw new Error('Element has no parent element');
  }
  if (getComputedStyle(parent).position === 'static') {
    parent.style.position = 'relative';
  }
  return parent;
}

/**
 * Convert a shape whose coordinates are fractions of an element's bounding
 * box to fractions of the element's parent's padding box.
 *
 * Highlight elements are appended to the element's parent (some elements,
 * such as `<img>`, cannot have children) and absolutely positioned relative
 * to it, so the shape's coordinates must be relative to the parent for
 * highlighting.
 */
function shapeRelativeToParent(
  shape: Shape,
  element: Element,
  parent: HTMLElement,
): Shape {
  const elementBox = element.getBoundingClientRect();
  const parentBox = parent.getBoundingClientRect();
  const style = getComputedStyle(parent);
  const borderLeft = parseFloat(style.borderLeftWidth) || 0;
  const borderTop = parseFloat(style.borderTopWidth) || 0;
  const borderRight = parseFloat(style.borderRightWidth) || 0;
  const borderBottom = parseFloat(style.borderBottomWidth) || 0;

  const originX = parentBox.left + borderLeft;
  const originY = parentBox.top + borderTop;
  const width = Math.max(parentBox.width - borderLeft - borderRight, 1);
  const height = Math.max(parentBox.height - borderTop - borderBottom, 1);

  const x = (fx: number) =>
    clamp((elementBox.left + fx * elementBox.width - originX) / width, 0, 1);
  const y = (fy: number) =>
    clamp((elementBox.top + fy * elementBox.height - originY) / height, 0, 1);

  if (shape.type === 'rect') {
    return {
      type: 'rect',
      left: x(shape.left),
      top: y(shape.top),
      right: x(shape.right),
      bottom: y(shape.bottom),
    };
  } else {
    return { type: 'point', x: x(shape.x), y: y(shape.y) };
  }
}

/**
 * Anchor a set of selectors to a shape on an element in the document.
 *
 * If the selectors do not identify an element (a "document rectangle"), the
 * shape is anchored to `document.body` instead.
 *
 * @throws {Error} If the element cannot be found or the selectors are not
 *   suitable for element anchoring.
 */
export function anchorShape(selectors: Selector[]): ShapeAnchor {
  const shapeSelector = selectors.find(s => s.type === 'ShapeSelector') as
    | ShapeSelector
    | undefined;
  if (!shapeSelector) {
    throw new Error('No shape selector found');
  }

  const elementSelector = selectors.find(s => s.type === 'ElementSelector');
  if (!elementSelector) {
    // Document rectangle: anchor to the body element. Coordinates are
    // fractions of the body's bounding box.
    if (shapeSelector.anchor === 'page') {
      throw new Error('Cannot anchor page shapes without an element');
    }
    if (getComputedStyle(document.body).position === 'static') {
      document.body.style.position = 'relative';
    }
    return {
      anchor: document.body,
      shape: shapeSelector.shape,
      coordinates: 'anchor',
    };
  }

  if (shapeSelector.anchor !== 'element') {
    throw new Error('No element shape selector found');
  }

  const element = locateElement(selectors);
  const parent = ensurePositionedParent(element);

  return {
    anchor: parent,
    shape: shapeRelativeToParent(shapeSelector.shape, element, parent),
    coordinates: 'anchor',
  };
}

/**
 * An overlay which lets the user select the element they want to annotate.
 *
 * While active, the element under the pointer is outlined. Clicking it
 * resolves {@link pick} with that element and the position of the click.
 * Pressing Escape cancels the operation.
 *
 * After an element has been picked, the outline remains visible (in a
 * "locked" style) until {@link destroy} is called, so the user can see which
 * element they are drawing on.
 */
export class ElementPicker {
  private _listeners: ListenerCollection;
  private _outline: HTMLElement;
  private _label: HTMLElement;
  private _picked: Element | null;
  private _resolve: ((result: PickResult) => void) | null;
  private _reject: ((err: Error) => void) | null;

  constructor() {
    this._listeners = new ListenerCollection();
    this._picked = null;
    this._resolve = null;
    this._reject = null;

    // Selection outline: a clean blue "selected" frame (not an error-style
    // yellow/warning highlight).
    this._outline = document.createElement('div');
    this._outline.className = PICKER_CLASS;
    Object.assign(this._outline.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '2147483000',
      border: '2px solid #2563eb',
      borderRadius: '4px',
      background: 'rgba(37, 99, 235, 0.08)',
      boxShadow: '0 0 0 2px rgba(37, 99, 235, 0.25)',
      boxSizing: 'border-box',
      pointerEvents: 'none',
    } as CSSStyleDeclaration);

    // A small floating tag showing what kind of element is selected (eg.
    // "figure", "img", "button"), plus a short text excerpt when available.
    this._label = document.createElement('div');
    this._label.className = `${PICKER_CLASS}-label`;
    Object.assign(this._label.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '2147483001',
      background: '#2563eb',
      color: '#ffffff',
      font: '12px/1.4 system-ui, -apple-system, sans-serif',
      padding: '3px 10px',
      borderRadius: '999px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      maxWidth: 'min(360px, 80vw)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    } as CSSStyleDeclaration);
  }

  /**
   * Begin selecting an element.
   *
   * @return A promise for the element the user clicked on and the position
   *   of the click, or `null` if the selection was canceled.
   */
  pick(): Promise<PickResult | null> {
    const promise = new Promise<PickResult | null>((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });

    const updateOutline = (element: Element | null) => {
      if (!element) {
        this._outline.style.display = 'none';
        this._label.style.display = 'none';
        return;
      }
      const rect = element.getBoundingClientRect();
      Object.assign(this._outline.style, {
        display: 'block',
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });

      // Floating label: the element's tag (eg. "figure", "img", "button"),
      // plus a short text excerpt when available.
      const tagName = element.tagName.toLowerCase();
      const text = elementText(element);
      this._label.textContent =
        text && text.length <= 24 ? `${tagName} · ${text}` : tagName;

      // Position the label above the element's top-left corner, clamped
      // into the viewport. If there is no room above, place it inside.
      const labelWidth = this._label.offsetWidth;
      const left = Math.min(
        Math.max(rect.left, 4),
        Math.max(4, window.innerWidth - labelWidth - 4),
      );
      const aboveTop = rect.top - 28;
      this._label.style.display = 'block';
      this._label.style.left = `${left}px`;
      this._label.style.top = `${aboveTop >= 4 ? aboveTop : rect.top + 4}px`;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (this._picked) {
        return; // Already picked; outline stays locked on the picked element.
      }
      updateOutline(elementFromPoint(event.clientX, event.clientY));
    };

    const onPointerDown = (event: PointerEvent) => {
      if (this._picked) {
        return;
      }
      // While selecting an element, clicks should not interact with the page
      // (eg. following a link inside the element).
      event.preventDefault();
      event.stopPropagation();

      const element = elementFromPoint(event.clientX, event.clientY);
      if (element) {
        // Lock the outline on the picked element.
        this._picked = element;
        updateOutline(element);
        this._outline.style.borderColor = '#1d4ed8';

        this._resolve?.({ element, x: event.clientX, y: event.clientY });
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this._reject?.(new DrawError('canceled', 'Element selection canceled'));
      }
    };

    // Navigation and other default actions happen on `click`/`auxclick`
    // events, which are not suppressed by preventing the default of
    // `pointerdown` alone. Block them while selecting, so that clicking a
    // link, button or video thumbnail while picking doesn't navigate the
    // page.
    const blockPageInteraction = (event: Event) => {
      if (this._picked) {
        return; // Selection finished; the draw surface handles interactions.
      }
      event.preventDefault();
      event.stopPropagation();
    };

    const onScrollOrResize = () => {
      if (this._picked) {
        updateOutline(this._picked);
      }
    };

    document.body.appendChild(this._outline);
    document.body.appendChild(this._label);
    this._listeners.add(document, 'pointermove', onPointerMove, {
      capture: true,
    });
    this._listeners.add(document, 'pointerdown', onPointerDown, {
      capture: true,
    });
    this._listeners.add(document, 'click', blockPageInteraction, {
      capture: true,
    });
    this._listeners.add(document, 'auxclick', blockPageInteraction, {
      capture: true,
    });
    this._listeners.add(document, 'keydown', onKeyDown);
    this._listeners.add(window, 'scroll', onScrollOrResize, {
      capture: true,
      passive: true,
    });
    this._listeners.add(window, 'resize', onScrollOrResize);

    return promise.catch(err => {
      if (err instanceof DrawError) {
        return null;
      }
      throw err;
    });
  }

  /**
   * Remove the picker UI (outline and event listeners).
   */
  destroy() {
    this._listeners.removeAll();
    this._outline.remove();
    this._label.remove();
    this._picked = null;
    this._resolve = null;
    this._reject = null;
  }
}

/** Result of a successful {@link ElementPicker.pick}. */
export type PickResult = {
  /** The element the user selected. */
  element: Element;

  /** Viewport coordinates of the click which selected the element. */
  x: number;
  y: number;
};
