import { StyledText } from '@hypothesis/annotation-ui';
import { useEffect, useMemo, useState, useId } from 'preact/hooks';

import { withServices } from '../../service-context';
import type { ThumbnailService, Thumbnail } from '../../services/thumbnail';
import InlineControlExcerpt from '../InlineControlExcerpt';

export type AnnotationThumbnailProps = {
  tag: string;
  thumbnailService: ThumbnailService;

  /**
   * Text contained in the thumbnail.
   *
   * This is used when generating alt text for the thumbnail.
   */
  textInImage?: string;

  /**
   * Description of the thumbnail, used as alt text.
   */
  description?: string;

  /**
   * Screenshot captured when the annotation was created (a data URL stored
   * in `annotation.extra.screenshot`).
   *
   * When present, the card renders this image directly instead of asking the
   * guest to re-render the annotated region. This keeps the thumbnail
   * exactly as it looked at annotation time and survives page reloads,
   * anchoring failures and content changes.
   */
  storedImage?: string;

  /**
   * Whether to show the description as visible text.
   *
   * Defaults to true. When false the description is still used as alt text.
   */
  showDescription?: boolean;
};

function AnnotationThumbnail({
  description,
  textInImage,
  tag,
  thumbnailService,
  storedImage,
  showDescription = true,
}: AnnotationThumbnailProps) {
  // If a cached thumbnail is available then render it immediately, otherwise
  // we'll request one be generated.
  const [thumbnail, setThumbnail] = useState<Thumbnail | null>(() =>
    thumbnailService.get(tag),
  );
  const [error, setError] = useState<string>();
  const [retryCount, setRetryCount] = useState(0);

  const devicePixelRatio = useMemo(() => window.devicePixelRatio, []);
  const maxWidth = 196;

  // Reset the retry counter when the annotation changes.
  useEffect(() => {
    setRetryCount(0);
    setError(undefined);
  }, [tag]);

  useEffect(() => {
    // Prefer the screenshot stored with the annotation: it shows the region
    // exactly as it looked when annotated, and does not depend on the guest
    // frame being connected or the annotation being re-anchored.
    if (storedImage && !thumbnail && !error) {
      let canceled = false;
      const image = new Image();
      image.src = storedImage;
      image
        .decode()
        .then(() => {
          if (canceled) {
            return;
          }
          // Cap the rendered size the same way `ThumbnailService.fetch` does
          // (maxWidth in CSS pixels, scaled by devicePixelRatio).
          const scale = Math.min(
            1,
            (maxWidth * devicePixelRatio) / image.naturalWidth,
          );
          setThumbnail({
            url: storedImage,
            width: Math.max(1, Math.round(image.naturalWidth * scale)),
            height: Math.max(1, Math.round(image.naturalHeight * scale)),
          });
        })
        .catch(() => {
          if (!canceled) {
            setError('Failed to load screenshot');
          }
        });
      return () => {
        canceled = true;
      };
    }

    if (!storedImage && !thumbnail && !error) {
      thumbnailService
        .fetch(tag, { maxWidth: maxWidth * devicePixelRatio, devicePixelRatio })
        .then(setThumbnail)
        .catch(err => setError(err.message));
    }

    // Retry transient failures from the thumbnail service (eg. the guest
    // hasn't finished anchoring the annotation yet right after a page load).
    // Stored screenshots are not retried: a data URL either decodes or it
    // doesn't.
    if (!storedImage && !thumbnail && error && retryCount < 5) {
      const timer = setTimeout(() => {
        setRetryCount(count => count + 1);
        setError(undefined);
      }, 700);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [
    error,
    devicePixelRatio,
    tag,
    thumbnail,
    thumbnailService,
    retryCount,
    storedImage,
  ]);

  let altText;
  if (description) {
    altText = description;
  } else if (textInImage) {
    altText = textInImage;
  }

  const scaledWidth = thumbnail ? thumbnail.width / devicePixelRatio : 0;
  const scaledHeight = thumbnail ? thumbnail.height / devicePixelRatio : 0;

  const altId = useId();

  return (
    <>
      <div
        className="flex flex-row justify-center relative"
        data-testid="thumbnail-container"
      >
        {thumbnail && (
          <img
            src={thumbnail.url}
            alt={altText}
            className="border rounded-md"
            style={{
              width: `${scaledWidth}px`,
              height: `${scaledHeight}px`,
            }}
          />
        )}
        {!thumbnail && !error && (
          // TODO - Adjust size here so it matches the thumbnail after it has
          // finished loading.
          <span data-testid="placeholder">Loading thumbnail...</span>
        )}
        {!thumbnail && error && (
          <span data-testid="error">Unable to render thumbnail: {error}</span>
        )}
      </div>

      {thumbnail && altText && showDescription && (
        <InlineControlExcerpt
          // Two lines of text
          collapsedHeight={35}
        >
          <StyledText
            // Hide this text from screen readers because it duplicates the thumbnail's
            // `alt` attribute, and we don't want them to read the text twice.
            aria-hidden="true"
          >
            <blockquote id={altId}>{altText}</blockquote>
          </StyledText>
        </InlineControlExcerpt>
      )}
    </>
  );
}

export default withServices(AnnotationThumbnail, ['thumbnailService']);
