/**
 * Crop a full-tab screenshot (a JPEG/PNG data URL, as returned by
 * `chrome.tabs.captureVisibleTab`) down to a region of the viewport, scaled
 * to at most `maxWidth` pixels.
 *
 * This is a plain canvas crop - no DOM reconstruction involved. The
 * screenshot is captured natively by the browser, so it faithfully shows the
 * annotated content.
 *
 * @return A JPEG data URL, or `null` if the crop failed.
 */
export async function cropScreenshotToDataURL(
  fullScreenshot: string,
  rect: { left: number; top: number; right: number; bottom: number },
  maxWidth = 1280,
  quality = 0.85,
): Promise<string | null> {
  const width = rect.right - rect.left;
  const height = rect.bottom - rect.top;
  if (width < 4 || height < 4) {
    return null;
  }

  try {
    const image = new Image();
    image.src = fullScreenshot;
    await image.decode().catch(() => {});
    if (!image.naturalWidth || !image.naturalHeight) {
      return null;
    }

    // `captureVisibleTab` returns a screenshot in device pixels; convert the
    // viewport-coordinate rectangle into image coordinates.
    const scaleX = image.naturalWidth / window.innerWidth;
    const scaleY = image.naturalHeight / window.innerHeight;
    const sx = rect.left * scaleX;
    const sy = rect.top * scaleY;
    const sWidth = width * scaleX;
    const sHeight = height * scaleY;

    const scale = Math.min(1, maxWidth / sWidth);
    const outWidth = Math.max(1, Math.round(sWidth * scale));
    const outHeight = Math.max(1, Math.round(sHeight * scale));

    const canvas = new OffscreenCanvas(outWidth, outHeight);
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(image, sx, sy, sWidth, sHeight, 0, 0, outWidth, outHeight);

    const blob = await canvas.convertToBlob({
      type: 'image/jpeg',
      quality,
    });
    return await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn('Failed to crop screenshot:', err);
    return null;
  }
}
