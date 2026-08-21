import {
  ElementPicker,
  anchorShape,
  describeDocumentRect,
  describeShape,
  elementFromPoint,
  locateElement,
} from '../html-element';

/**
 * Convert a shape whose coordinates are fractions of `element`'s padding box
 * to absolute viewport coordinates, for comparing anchored shapes with the
 * original drawn shape.
 */
function shapeToViewport(shape, element) {
  const box = element.getBoundingClientRect();
  const style = getComputedStyle(element);
  const borderLeft = parseFloat(style.borderLeftWidth) || 0;
  const borderTop = parseFloat(style.borderTopWidth) || 0;
  const borderRight = parseFloat(style.borderRightWidth) || 0;
  const borderBottom = parseFloat(style.borderBottomWidth) || 0;
  const originX = box.left + borderLeft;
  const originY = box.top + borderTop;
  const width = box.width - borderLeft - borderRight;
  const height = box.height - borderTop - borderBottom;

  if (shape.type === 'rect') {
    return {
      type: 'rect',
      left: originX + shape.left * width,
      top: originY + shape.top * height,
      right: originX + shape.right * width,
      bottom: originY + shape.bottom * height,
    };
  } else {
    return {
      type: 'point',
      x: originX + shape.x * width,
      y: originY + shape.y * height,
    };
  }
}

describe('annotator/anchoring/html-element', () => {
  let wrapper;

  beforeEach(() => {
    document.body.style.margin = '0';
    wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    wrapper.style.marginLeft = '30px';
    wrapper.style.marginTop = '40px';
    document.body.append(wrapper);
  });

  afterEach(() => {
    document.body.replaceChildren();
    document.body.style.margin = '';
    document.body.style.position = '';
  });

  describe('#elementFromPoint', () => {
    it('returns the containing block element for a point over text', () => {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Hello ';
      const span = document.createElement('span');
      span.textContent = 'world';
      paragraph.append(span);
      wrapper.append(paragraph);

      // Paragraph starts at (30, 40). Click on the "world" span.
      const point = { x: 100, y: 50 };
      assert.equal(elementFromPoint(point.x, point.y), paragraph);
    });

    it('returns the image for a point over an <img>', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.width = 200;
      img.height = 100;
      wrapper.append(img);

      // Image is at (30, 40)-(230, 140).
      assert.equal(elementFromPoint(130, 90), img);
    });

    it('finds an image with `pointer-events: none` inside the hit element', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.width = 200;
      img.height = 100;
      img.style.pointerEvents = 'none';
      wrapper.append(img);

      assert.equal(elementFromPoint(130, 90), img);
    });

    it('ignores elements hidden with `visibility: hidden`', () => {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'hidden text';
      paragraph.style.visibility = 'hidden';
      wrapper.append(paragraph);

      // The point is over the hidden paragraph and the wrapper itself.
      // The wrapper is not inline, so it is returned.
      assert.equal(elementFromPoint(130, 50), wrapper);
    });

    it('uses a geometric search when nothing is hit-testable', () => {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'fallback text';
      paragraph.style.pointerEvents = 'none';
      wrapper.append(paragraph);
      wrapper.style.pointerEvents = 'none';

      assert.equal(elementFromPoint(130, 50), paragraph);
    });

    it('ignores the client UI', () => {
      const paragraph = document.createElement('p');
      paragraph.textContent = 'some text';
      wrapper.append(paragraph);

      const sidebar = document.createElement('hypothesis-sidebar');
      document.body.append(sidebar);

      assert.equal(elementFromPoint(130, 50), paragraph);
    });
  });

  describe('#describeShape', () => {
    it('describes a rectangle drawn on an element', () => {
      const target = document.createElement('div');
      target.textContent = 'Some target content';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);
      // Element is at (30, 40)-(230, 140).

      const rect = { type: 'rect', left: 60, top: 60, right: 180, bottom: 120 };
      const selectors = describeShape(rect, target);

      const elementSelector = selectors.find(s => s.type === 'ElementSelector');
      const shapeSelector = selectors.find(s => s.type === 'ShapeSelector');

      assert.ok(elementSelector);
      assert.equal(elementSelector.tagName, 'div');
      assert.ok(elementSelector.xpath);

      assert.ok(shapeSelector);
      assert.equal(shapeSelector.anchor, 'element');
      assert.equal(shapeSelector.shape.type, 'rect');
      assert.approximately(shapeSelector.shape.left, 0.15, 0.001);
      assert.approximately(shapeSelector.shape.top, 0.2, 0.001);
      assert.approximately(shapeSelector.shape.right, 0.75, 0.001);
      assert.approximately(shapeSelector.shape.bottom, 0.8, 0.001);
      assert.deepEqual(shapeSelector.view, {
        left: 0,
        top: 0,
        right: 1,
        bottom: 1,
      });
      assert.equal(shapeSelector.text, 'Some target content');
    });

    it('describes a point drawn on an element', () => {
      const target = document.createElement('p');
      target.textContent = 'A paragraph of text';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const point = { type: 'point', x: 130, y: 90 };
      const selectors = describeShape(point, target);
      const shapeSelector = selectors.find(s => s.type === 'ShapeSelector');

      assert.equal(shapeSelector.shape.type, 'point');
      assert.approximately(shapeSelector.shape.x, 0.5, 0.001);
      assert.approximately(shapeSelector.shape.y, 0.5, 0.001);
      assert.equal(shapeSelector.text, 'A paragraph of text');
    });

    it('includes the image URL in the selector for <img> elements', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.width = 200;
      img.height = 100;
      wrapper.append(img);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, img);
      const elementSelector = selectors.find(s => s.type === 'ElementSelector');

      assert.equal(elementSelector.tagName, 'img');
      assert.equal(elementSelector.src, img.src);
    });

    it('marks cross-origin images as non-renderable', () => {
      const img = document.createElement('img');
      img.src = 'https://cross-origin.test/x.png';
      img.width = 200;
      img.height = 100;
      wrapper.append(img);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, img);
      const elementSelector = selectors.find(s => s.type === 'ElementSelector');

      assert.equal(elementSelector.tagName, 'img');
      assert.isFalse(elementSelector.renderable);
    });

    it('marks same-origin and data-URL images as renderable', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.width = 200;
      img.height = 100;
      wrapper.append(img);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, img);
      const elementSelector = selectors.find(s => s.type === 'ElementSelector');

      assert.isTrue(elementSelector.renderable);
    });

    it('uses the `alt` text of an image as its description', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.alt = '示意图：架构总览';
      img.width = 200;
      img.height = 100;
      wrapper.append(img);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, img);
      const shapeSelector = selectors.find(s => s.type === 'ShapeSelector');

      assert.equal(shapeSelector.text, '示意图：架构总览');
    });

    it('captures compact locator hints: id, class and outer HTML excerpt', () => {
      const target = document.createElement('p');
      target.textContent = '被批注的段落。';
      target.id = 'target-paragraph';
      target.className = 'intro lead';
      target.style.width = '200px';
      wrapper.append(target);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, target);
      const elementSelector = selectors.find(s => s.type === 'ElementSelector');

      assert.equal(elementSelector.id, 'target-paragraph');
      assert.equal(elementSelector.class, 'intro lead');
      assert.match(elementSelector.html, /^<p/);
      assert.include(elementSelector.html, '被批注的段落');
    });

    it('does not include bulky surrounding context', () => {
      const section = document.createElement('section');
      const heading = document.createElement('h2');
      heading.textContent = '产品亮点';
      const target = document.createElement('p');
      target.textContent = '被批注的段落。';
      target.style.width = '200px';
      section.append(heading, target);
      wrapper.append(section);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, target);
      const shapeSelector = selectors.find(s => s.type === 'ShapeSelector');

      assert.equal(shapeSelector.text, '被批注的段落。');
      assert.isUndefined(shapeSelector.context);
    });

    it('throws if the element is not annotatable', () => {
      assert.throws(
        () => describeShape({ type: 'point', x: 0, y: 0 }, document.body),
        'Not an annotatable element',
      );
    });

    it('throws if the rectangle barely overlaps the element', () => {
      const target = document.createElement('div');
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const rect = { type: 'rect', left: 100, top: 80, right: 101, bottom: 81 };
      assert.throws(
        () => describeShape(rect, target),
        'Shape does not overlap an element',
      );
    });
  });

  describe('#anchorShape', () => {
    it('anchors selectors back to the element location', () => {
      const target = document.createElement('div');
      target.textContent = 'Some target content';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const rect = { type: 'rect', left: 60, top: 60, right: 180, bottom: 120 };
      const selectors = describeShape(rect, target);

      const anchored = anchorShape(selectors);

      assert.equal(anchored.anchor, wrapper);
      assert.equal(anchored.coordinates, 'anchor');
      assert.equal(anchored.shape.type, 'rect');

      const viewportRect = shapeToViewport(anchored.shape, anchored.anchor);
      assert.approximately(viewportRect.left, rect.left, 0.5);
      assert.approximately(viewportRect.top, rect.top, 0.5);
      assert.approximately(viewportRect.right, rect.right, 0.5);
      assert.approximately(viewportRect.bottom, rect.bottom, 0.5);
    });

    it('makes the element parent a positioned element if it is static', () => {
      const target = document.createElement('p');
      target.textContent = 'text';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, target);

      assert.equal(getComputedStyle(wrapper).position, 'static');
      anchorShape(selectors);
      assert.equal(getComputedStyle(wrapper).position, 'relative');
    });

    it('anchors a point shape back to the same location', () => {
      const target = document.createElement('div');
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const point = { type: 'point', x: 130, y: 90 };
      const selectors = describeShape(point, target);

      const anchored = anchorShape(selectors);
      const viewportPoint = shapeToViewport(anchored.shape, anchored.anchor);

      assert.approximately(viewportPoint.x, point.x, 0.5);
      assert.approximately(viewportPoint.y, point.y, 0.5);
    });

    it('throws if no element shape selector is present', () => {
      assert.throws(
        () => anchorShape([{ type: 'TextQuoteSelector' }]),
        'No shape selector found',
      );
    });

    it('anchors document rectangles to the body element', () => {
      const target = document.createElement('div');
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const rect = { type: 'rect', left: 60, top: 60, right: 180, bottom: 120 };
      const selectors = describeDocumentRect(rect);

      const anchored = anchorShape(selectors);
      assert.equal(anchored.anchor, document.body);
      assert.equal(anchored.coordinates, 'anchor');

      const viewportRect = shapeToViewport(anchored.shape, document.body);
      assert.approximately(viewportRect.left, rect.left, 0.5);
      assert.approximately(viewportRect.top, rect.top, 0.5);
      assert.approximately(viewportRect.right, rect.right, 0.5);
      assert.approximately(viewportRect.bottom, rect.bottom, 0.5);
    });

    it('throws if the element is not in the document', () => {
      const selectors = [
        { type: 'ElementSelector', xpath: '/body/div[99]' },
        {
          type: 'ShapeSelector',
          anchor: 'element',
          shape: { type: 'rect', left: 0, top: 0, right: 1, bottom: 1 },
        },
      ];
      assert.throws(
        () => anchorShape(selectors),
        'Element not found in document',
      );
    });
  });

  describe('#describeDocumentRect', () => {
    it('records the page-relative rectangle, viewport and text', () => {
      const target = document.createElement('p');
      target.textContent = '矩形中心的内容';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const rect = { type: 'rect', left: 60, top: 60, right: 180, bottom: 120 };
      const selectors = describeDocumentRect(rect);

      assert.equal(selectors.length, 1);
      const shapeSelector = selectors[0];
      assert.equal(shapeSelector.type, 'ShapeSelector');
      assert.isUndefined(shapeSelector.anchor);
      assert.deepEqual(shapeSelector.clientRect, {
        left: 60,
        top: 60,
        right: 180,
        bottom: 120,
      });
      assert.deepEqual(shapeSelector.viewport, {
        width: window.innerWidth,
        height: window.innerHeight,
      });
      assert.equal(shapeSelector.text, '矩形中心的内容');

      // The recorded shape is in body-relative fractions.
      const bodyBox = document.body.getBoundingClientRect();
      assert.approximately(
        shapeSelector.shape.left,
        (60 - bodyBox.left) / bodyBox.width,
        0.001,
      );

      // The complete region text and the overlapping element are recorded.
      assert.equal(shapeSelector.regionText, '矩形中心的内容');
      assert.ok(
        shapeSelector.elements.some(
          el => el.tagName === 'p' && el.text === '矩形中心的内容',
        ),
      );
      assert.ok(
        shapeSelector.elements.every(el => typeof el.xpath === 'string'),
      );
    });

    it('records every leaf element which intersects the rectangle', () => {
      const inside = document.createElement('span');
      inside.textContent = '框内文字';
      inside.style.display = 'block';
      inside.style.width = '80px';
      inside.style.height = '20px';
      const outside = document.createElement('span');
      outside.textContent = '框外文字';
      outside.style.display = 'block';
      outside.style.width = '80px';
      outside.style.height = '20px';
      wrapper.append(inside, outside);

      const rect = { type: 'rect', left: 20, top: 35, right: 120, bottom: 55 };
      const selectors = describeDocumentRect(rect);
      const shapeSelector = selectors[0];

      assert.equal(shapeSelector.regionText, '框内文字');
      assert.ok(
        shapeSelector.elements.some(
          el => el.tagName === 'span' && el.text === '框内文字',
        ),
      );
    });

    it('keeps compact element excerpts without duplicating ancestors', () => {
      const item = document.createElement('div');
      item.id = 'account-card';
      item.className = 'card balance';
      const label = document.createElement('span');
      label.textContent = '可用余额';
      label.style.display = 'block';
      label.style.width = '160px';
      label.style.height = '20px';
      const value = document.createElement('strong');
      value.textContent = '¥ 39.21';
      value.style.display = 'block';
      value.style.width = '160px';
      value.style.height = '20px';
      item.append(label, value);
      wrapper.append(item);

      const rect = { type: 'rect', left: 20, top: 35, right: 230, bottom: 85 };
      const selectors = describeDocumentRect(rect);
      const shapeSelector = selectors[0];
      assert.ok(shapeSelector.elements.some(el => el.tagName === 'span'));
      assert.ok(shapeSelector.elements.some(el => el.tagName === 'strong'));
      assert.ok(
        shapeSelector.elements.some(
          el =>
            el.id === 'account-card' &&
            el.class === 'card balance' &&
            el.tagName === 'div',
        ),
      );
      assert.equal(shapeSelector.regionText, '可用余额 ¥ 39.21');
    });

    it('records the image source for image elements inside a free rectangle', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.width = 200;
      img.height = 100;
      img.style.display = 'block';
      wrapper.append(img);

      const rect = { type: 'rect', left: 20, top: 35, right: 240, bottom: 150 };
      const selectors = describeDocumentRect(rect);
      const shapeSelector = selectors[0];

      assert.ok(
        shapeSelector.elements.some(
          el => el.tagName === 'img' && el.src === img.src,
        ),
      );
    });

    it('rejects non-rectangle shapes', () => {
      assert.throws(
        () => describeDocumentRect({ type: 'point', x: 0, y: 0 }),
        'Document shapes must be rectangles',
      );
    });
  });

  describe('#locateElement', () => {
    it('locates an element by XPath', () => {
      const target = document.createElement('p');
      target.textContent = 'text';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);
      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, target);
      assert.equal(locateElement(selectors), target);
    });

    it('locates an image by URL if the XPath is stale', () => {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"/>`;
      const img = document.createElement('img');
      img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      img.width = 200;
      img.height = 100;
      wrapper.append(img);
      const selectors = describeShape({ type: 'point', x: 130, y: 90 }, img);
      const elementSelector = selectors.find(s => s.type === 'ElementSelector');
      elementSelector.xpath = '/body/img[99]';
      assert.equal(locateElement(selectors), img);
    });

    it('throws if the element cannot be found', () => {
      assert.throws(
        () =>
          locateElement([{ type: 'ElementSelector', xpath: '/body/div[99]' }]),
        'Element not found in document',
      );
    });
  });

  describe('ElementPicker', () => {
    let picker;

    beforeEach(() => {
      picker = new ElementPicker();
    });

    afterEach(() => {
      picker.destroy();
    });

    it('outlines the element under the pointer and picks it on click', async () => {
      const target = document.createElement('p');
      target.textContent = 'pick me';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const promise = picker.pick();

      // Hover over the element: an outline should appear over it.
      document.dispatchEvent(
        new PointerEvent('pointermove', { clientX: 130, clientY: 90 }),
      );
      const outline = document.querySelector('.h-local-element-picker');
      assert.ok(outline);
      assert.equal(outline.style.display, 'block');
      assert.equal(outline.style.left, `${wrapper.offsetLeft}px`);

      // A floating label shows the element's tag and a short text excerpt.
      const label = document.querySelector('.h-local-element-picker-label');
      assert.ok(label);
      assert.equal(label.style.display, 'block');
      assert.equal(label.textContent, 'p · pick me');

      // Click the element: the pick resolves with the element and position.
      document.dispatchEvent(
        new PointerEvent('pointerdown', { clientX: 150, clientY: 60 }),
      );
      const result = await promise;
      assert.equal(result.element, target);
      assert.equal(result.x, 150);
      assert.equal(result.y, 60);
    });

    it('resolves with null when selection is canceled with Escape', async () => {
      const promise = picker.pick();
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
      const result = await promise;
      assert.equal(result, null);
    });

    it('blocks click events so that picking a link does not navigate', async () => {
      const link = document.createElement('a');
      link.href = 'https://example.com/target';
      link.textContent = 'click me';
      link.style.width = '200px';
      link.style.height = '100px';
      wrapper.append(link);

      picker.pick();

      // Simulate the click event which follows a pointerdown while picking.
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        clientX: 130,
        clientY: 90,
      });
      document.dispatchEvent(clickEvent);
      assert.isTrue(clickEvent.defaultPrevented);

      const auxClickEvent = new MouseEvent('auxclick', {
        bubbles: true,
        cancelable: true,
        clientX: 130,
        clientY: 90,
      });
      document.dispatchEvent(auxClickEvent);
      assert.isTrue(auxClickEvent.defaultPrevented);
    });

    it('removes the outline when destroyed', async () => {
      const target = document.createElement('p');
      target.textContent = 'pick me';
      target.style.width = '200px';
      target.style.height = '100px';
      wrapper.append(target);

      const promise = picker.pick();
      document.dispatchEvent(
        new PointerEvent('pointerdown', { clientX: 130, clientY: 90 }),
      );
      await promise;

      assert.ok(document.querySelector('.h-local-element-picker'));
      picker.destroy();
      assert.notOk(document.querySelector('.h-local-element-picker'));
    });
  });
});
