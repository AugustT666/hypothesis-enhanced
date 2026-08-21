import { EventEmitter } from '../../shared/event-emitter';
import type {
  Anchor,
  AnnotationTool,
  FeatureFlags,
  Integration,
  IntegrationEvents,
  Shape,
  ShapeAnchor,
  SidebarLayout,
  SideBySideOptions,
  RenderToBitmapOptions,
} from '../../types/annotator';
import type { ElementSelector, Selector, ShapeSelector } from '../../types/api';
import { anchor, describe } from '../anchoring/html';
import {
  anchorShape,
  describeDocumentRect,
  describeShape,
  locateElement,
  ElementPicker,
} from '../anchoring/html-element';
import type { PickResult } from '../anchoring/html-element';
import { TextRange } from '../anchoring/text-range';
import { NavigationObserver } from '../util/navigation-observer';
import { scrollElementIntoView } from '../util/scroll';
import { HTMLMetadata } from './html-metadata';
import {
  guessMainContentArea,
  preserveScrollPosition,
} from './html-side-by-side';

// When activating side-by-side mode, make sure there is at least this amount
// of space (in pixels) left for the document's content. Any narrower and the
// content line lengths and scale are too short to be readable.
const MIN_HTML_WIDTH = 480;

/**
 * Document type integration for ordinary web pages.
 *
 * This integration is used for web pages and applications that are not handled
 * by a more specific integration (eg. for PDFs).
 */
export class HTMLIntegration
  extends EventEmitter<IntegrationEvents>
  implements Integration
{
  container: HTMLElement;
  featureFlags: FeatureFlags;

  private _flagsChanged: () => void;
  private _htmlMeta: HTMLMetadata;
  private _prevURI: string;

  /** Controls how we resize the document to fit alongside sidebar. */
  private _sideBySideOptions: SideBySideOptions;
  private _sideBySideEnabled: boolean;

  /** Element selection UI, active while creating a shape annotation. */
  private _picker: ElementPicker | null;

  /**
   * Whether the document is currently being resized to fit alongside an
   * open sidebar.
   */
  private _sideBySideActive: boolean;

  private _lastLayout: SidebarLayout | null;

  private _navObserver: NavigationObserver;
  private _metaObserver: MutationObserver;

  constructor({
    features,
    container = document.body,
    sideBySideOptions,
  }: {
    features: FeatureFlags;
    container?: HTMLElement;
    sideBySideOptions?: SideBySideOptions;
  }) {
    super();

    this.featureFlags = features;
    this.container = container;

    this._htmlMeta = new HTMLMetadata();
    this._prevURI = this._htmlMeta.uri();

    // Side-by-side was originally behind a feature flag. This property
    // remains in case it is useful to turn off for debugging etc.
    this._sideBySideEnabled = true;

    this._sideBySideOptions = sideBySideOptions ?? { mode: 'auto' };
    this._sideBySideActive = false;
    this._lastLayout = null;
    this._picker = null;

    // Watch for changes to `location.href`.
    this._navObserver = new NavigationObserver(() => this._checkForURIChange());

    // Watch for potential changes to location information in `<head>`, eg.
    // `<link rel=canonical>`.
    this._metaObserver = new MutationObserver(() => this._checkForURIChange());
    this._metaObserver.observe(document.head, {
      childList: true,
      subtree: true,
      attributes: true,

      attributeFilter: [
        // Keys and values of <link> elements
        'rel',
        'href',

        // Keys and values of <meta> elements
        'name',
        'content',
      ],
    });

    this._flagsChanged = () => {
      // Emit a change notification in case the set of supported tools changed
      // (eg. `html_image_annotation` flag was toggled).
      this.emit('supportedToolsChanged', this.supportedTools());
    };
    this.featureFlags.on('flagsChanged', this._flagsChanged);
  }

  anchor(root: Element, selectors: Selector[]): Promise<Range | ShapeAnchor> {
    if (selectors.some(s => s.type === 'ShapeSelector')) {
      return Promise.resolve(anchorShape(selectors));
    }
    return anchor(root, selectors);
  }

  describe(
    root: Element,
    region: Range | Shape,
    element?: Element,
  ): Selector[] {
    if (region instanceof Range) {
      return describe(root, region);
    } else if (element) {
      return describeShape(region, element);
    } else {
      // A shape without a selected element is a "document rectangle": only
      // the page and the rectangle's coordinates are recorded.
      return describeDocumentRect(region);
    }
  }

  /**
   * Let the user select the element they want to annotate. See
   * {@link Integration.pickImageTarget}.
   */
  async pickImageTarget(): Promise<PickResult | null> {
    this._picker = new ElementPicker();
    return this._picker.pick();
  }

  /** Remove the element selection UI. */
  clearImageTarget() {
    this._picker?.destroy();
    this._picker = null;
  }

  _checkForURIChange() {
    const currentURI = this._htmlMeta.uri();
    if (currentURI !== this._prevURI) {
      this._prevURI = currentURI;
      this.emit('uriChanged', currentURI);
    }
  }

  /**
   * Return a Range trimmed to remove any leading or trailing whitespace, or
   * `null` if no valid trimmed Range can be created from `range`
   */
  getAnnotatableRange(range: Range) {
    try {
      return TextRange.trimmedRange(range);
    } catch (err) {
      if (err instanceof RangeError) {
        return null;
      }
      throw err;
    }
  }

  canStyleClusteredHighlights() {
    return true;
  }

  destroy() {
    this._deactivateSideBySide();
    this._navObserver.disconnect();
    this._metaObserver.disconnect();
    this.featureFlags.off('flagsChanged', this._flagsChanged);
    this.clearImageTarget();
    super.destroy();
  }

  contentContainer() {
    return this.container;
  }

  fitSideBySide(layout: SidebarLayout) {
    this._lastLayout = layout;

    const maximumWidthToFit = window.innerWidth - layout.width;
    const active =
      this._sideBySideEnabled &&
      this._sideBySideOptions.mode === 'auto' &&
      layout.expanded &&
      maximumWidthToFit >= MIN_HTML_WIDTH;

    if (active) {
      // nb. We call `_activateSideBySide` regardless of whether side-by-side
      // is already active because the sidebar width might be different.
      this._activateSideBySide(layout.width);
    } else if (this._sideBySideActive) {
      this._deactivateSideBySide();
    }
    this._sideBySideActive = active;
    this.container.classList.toggle(
      'hypothesis-sidebyside-active',
      this._sideBySideActive,
    );
    return active;
  }

  sideBySideActive() {
    return this._sideBySideActive;
  }

  supportedTools(): AnnotationTool[] {
    // Shape annotation in web pages (free-form rectangles and point
    // annotations on a selected element) is enabled by default in this fork.
    // It can be disabled by setting the `html_image_annotation` feature flag
    // to false.
    const flags = this.featureFlags.allFlags();
    if (flags.html_image_annotation === false) {
      return ['selection'];
    }
    return ['selection', 'rect', 'point'];
  }

  /**
   * Render the region of an element referenced by a shape annotation to a
   * bitmap. This is used to show thumbnails of shape annotations in the
   * sidebar.
   *
   * This only supports image-like elements (`<img>`, `<svg>`, `<canvas>`,
   * `<video>`); other elements are not rasterized and the sidebar falls back
   * to showing the element's text instead.
   */
  async renderToBitmap(
    anchor: Anchor,
    opts: RenderToBitmapOptions,
  ): Promise<ImageBitmap> {
    const shape = anchor.target.selector?.find(
      s => s.type === 'ShapeSelector',
    ) as ShapeSelector | undefined;
    if (!shape) {
      throw new Error('No shape selector found');
    }

    const screenshot = anchor.annotation.extra?.screenshot as
      | string
      | undefined;
    const hasElementSelector = (anchor.target.selector ?? []).some(
      s => s.type === 'ElementSelector',
    );
    if (!hasElementSelector || screenshot) {
      // Render from the screenshot captured when the annotation was created
      // (rectangles always have one; pins on image-like elements too).
      if (!screenshot) {
        throw new Error('No screenshot available for this annotation');
      }
      const image = new Image();
      image.src = screenshot;
      await image.decode().catch(() => {});
      if (!image.naturalWidth || !image.naturalHeight) {
        throw new Error('Failed to load screenshot');
      }

      const maxWidth = opts.maxWidth ?? image.naturalWidth;
      const devicePixelRatio = opts.devicePixelRatio ?? 1;
      const scale = Math.min(1, maxWidth / image.naturalWidth);
      const width = Math.max(
        1,
        Math.round(image.naturalWidth * scale * devicePixelRatio),
      );
      const height = Math.max(
        1,
        Math.round(image.naturalHeight * scale * devicePixelRatio),
      );
      const canvas = new OffscreenCanvas(width, height);
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(image, 0, 0, width, height);
      return canvas.transferToImageBitmap();
    }

    const element = locateElement(anchor.target.selector ?? []);
    const elementSelector = (anchor.target.selector ?? []).find(
      s => s.type === 'ElementSelector',
    ) as ElementSelector | undefined;
    if (elementSelector?.renderable === false) {
      // Cross-origin image without CORS: drawing it taints the canvas and
      // the result can't be transferred. The sidebar shows the text excerpt
      // instead.
      throw new Error('Image cannot be rendered (cross-origin)');
    }
    const isImageLike =
      element instanceof HTMLImageElement ||
      element instanceof SVGSVGElement ||
      element instanceof HTMLCanvasElement ||
      element instanceof HTMLVideoElement;
    if (!isImageLike) {
      throw new Error('Thumbnails are not supported for this element type');
    }

    // Wait for the element to load if it hasn't already.
    if (element instanceof HTMLImageElement && !element.complete) {
      await new Promise<void>(resolve => {
        element.addEventListener('load', () => resolve(), { once: true });
        element.addEventListener('error', () => resolve(), { once: true });
      });
    }

    const naturalWidth =
      element instanceof HTMLImageElement
        ? element.naturalWidth
        : element instanceof HTMLCanvasElement
          ? element.width
          : element.getBoundingClientRect().width;
    const naturalHeight =
      element instanceof HTMLImageElement
        ? element.naturalHeight
        : element instanceof HTMLCanvasElement
          ? element.height
          : element.getBoundingClientRect().height;
    if (!naturalWidth || !naturalHeight) {
      throw new Error('Element has no pixel data');
    }

    // Compute the region of the image's pixels to draw, in natural units.
    let sx: number;
    let sy: number;
    let sWidth: number;
    let sHeight: number;
    if (shape.shape.type === 'rect') {
      sx = shape.shape.left * naturalWidth;
      sy = shape.shape.top * naturalHeight;
      sWidth = Math.max(
        1,
        (shape.shape.right - shape.shape.left) * naturalWidth,
      );
      sHeight = Math.max(
        1,
        (shape.shape.bottom - shape.shape.top) * naturalHeight,
      );
    } else {
      // For point annotations, render a small region around the point.
      const size = Math.max(naturalWidth, naturalHeight) * 0.1;
      sx = shape.shape.x * naturalWidth - size / 2;
      sy = shape.shape.y * naturalHeight - size / 2;
      sWidth = size;
      sHeight = size;
    }

    const maxWidth = opts.maxWidth ?? sWidth;
    const devicePixelRatio = opts.devicePixelRatio ?? 1;
    const scale = Math.min(1, maxWidth / sWidth);
    const width = Math.max(1, Math.round(sWidth * scale * devicePixelRatio));
    const height = Math.max(1, Math.round(sHeight * scale * devicePixelRatio));

    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(
      element as CanvasImageSource,
      sx,
      sy,
      sWidth,
      sHeight,
      0,
      0,
      width,
      height,
    );
    return canvas.transferToImageBitmap();
  }

  /**
   * Resize the document content after side-by-side mode is activated.
   */
  _activateSideBySide(sidebarWidth: number) {
    // When side-by-side mode is activated, what we want to achieve is that the
    // main content of the page is fully visible alongside the sidebar, with
    // as much space given to the main content as possible. A challenge is that
    // we don't know how the page will respond to reducing the width of the body.
    //
    // - The content might have margins which automatically get reduced as the
    //   available width is reduced. For example a blog post with a fixed-width
    //   article in the middle and `margin: auto` for both margins.
    //
    //   In this scenario we'd want to reduce the document width by the full
    //   width of the sidebar.
    //
    // - There might be sidebars to the left and/or right of the main content
    //   which cause the main content to be squashed when the width is reduced.
    //   For example a news website with a column of ads on the right.
    //
    //   In this scenario we'd want to not reduce the document width or reduce
    //   it by a smaller amount and let the Hypothesis sidebar cover up the
    //   document's sidebar, leaving as much space as possible to the content.
    //
    // Therefore what we do is to initially reduce the width of the document by
    // the full width of the sidebar, then we use heuristics to analyze the
    // resulting page layout and determine whether there is significant "free space"
    // (ie. anything that is not the main content of the document, such as ads or
    // links to related stories) to the right of the main content. If there is,
    // we make the document wider again to allow more space for the main content.
    //
    // These heuristics assume a typical "article" page with one central block
    // of content. If we can't find the "main content" then we just assume that
    // everything on the page is potentially content that the user might want
    // to annotate and so try to keep it all visible.

    // nb. 12px padding is a multiple of the 4px grid unit in our design system.
    const padding = 12;
    const rightMargin = sidebarWidth + padding;

    const computeLeftMargin = (element: HTMLElement) =>
      parseInt(window.getComputedStyle(element).marginLeft, 10);

    preserveScrollPosition(() => {
      // nb. Adjusting the body size this way relies on the page not setting a
      // width on the body. For sites that do this won't work.

      // Remove any margins we've previously set
      document.body.style.marginLeft = '';
      document.body.style.marginRight = '';

      // Keep track of what left margin would be naturally without right margin set
      const beforeBodyLeft = computeLeftMargin(document.body);

      document.body.style.marginRight = `${rightMargin}px`;

      const contentArea = guessMainContentArea(document.body);
      if (contentArea) {
        // Check if we can give the main content more space by letting the
        // sidebar overlap stuff in the document to the right of the main content.
        const freeSpace = Math.max(
          0,
          window.innerWidth - rightMargin - contentArea.right,
        );
        if (freeSpace > 0) {
          const adjustedMargin = Math.max(0, rightMargin - freeSpace);
          document.body.style.marginRight = `${adjustedMargin}px`;
        }

        // Changes to right margin can affect left margin in cases where body
        // has `margin:auto`. It's OK to move the body to the left to make
        // space, but avoid moving it to the right.
        // See https://github.com/hypothesis/client/issues/4280
        const afterBodyLeft = computeLeftMargin(document.body);
        if (afterBodyLeft > beforeBodyLeft) {
          document.body.style.marginLeft = `${beforeBodyLeft}px`;
        }

        // If the main content appears to be right up against the edge of the
        // window, add padding for readability.
        if (contentArea.left < padding) {
          document.body.style.marginLeft = `${padding}px`;
        }
      } else {
        document.body.style.marginLeft = '';
        document.body.style.marginRight = '';
      }
    });
  }

  /**
   * Undo the effects of `activateSideBySide`.
   */
  _deactivateSideBySide() {
    preserveScrollPosition(() => {
      document.body.style.marginLeft = '';
      document.body.style.marginRight = '';
    });
  }

  async getMetadata() {
    return this._htmlMeta.getDocumentMetadata();
  }

  async uri() {
    return this._htmlMeta.uri();
  }

  async scrollToAnchor(anchor: Anchor) {
    const highlight = anchor.highlights?.[0];
    if (!highlight) {
      return;
    }
    await scrollElementIntoView(highlight);
  }
}
