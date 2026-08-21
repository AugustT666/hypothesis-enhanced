import { StyledText } from '@hypothesis/annotation-ui';
import {
  CardActions,
  formatDateTime,
  Spinner,
} from '@hypothesis/frontend-shared';
import classnames from 'classnames';
import { useMemo } from 'preact/hooks';

import type { Annotation as IAnnotation } from '../../../types/api';
import type { SidebarSettings } from '../../../types/config';
import {
  annotationRole,
  isOrphan,
  isSaved,
  description,
  quote,
  shape,
  hasRenderableImageElement,
  shapeExcerpt,
} from '../../helpers/annotation-metadata';
import { annotationDisplayName } from '../../helpers/annotation-user';
import { withServices } from '../../service-context';
import type { AnnotationsService } from '../../services/annotations';
import { useSidebarStore } from '../../store';
import InlineControlExcerpt from '../InlineControlExcerpt';
import ModerationControl from '../moderation/ModerationControl';
import AnnotationActionBar from './AnnotationActionBar';
import AnnotationBody from './AnnotationBody';
import AnnotationEditor from './AnnotationEditor';
import AnnotationHeader from './AnnotationHeader';
import AnnotationQuote from './AnnotationQuote';
import AnnotationReplyToggle from './AnnotationReplyToggle';
import AnnotationThumbnail from './AnnotationThumbnail';

function RegionElements({
  elements,
}: {
  elements: NonNullable<ReturnType<typeof shape>>['elements'];
}) {
  if (!elements?.length) {
    return null;
  }

  return (
    <details
      className="rounded border border-color-border bg-grey-1 px-3 py-2 text-sm"
      data-testid="rectangle-elements"
    >
      <summary className="cursor-pointer font-medium text-color-text">
        矩形覆盖的网页元素（{elements.length}）
      </summary>
      <ol className="mt-2 space-y-2 break-words text-color-text-light">
        {elements.map((element, index) => {
          const identity = [
            element.id ? `#${element.id}` : '',
            element.class ? `.${element.class.split(' ').join('.')}` : '',
          ]
            .filter(Boolean)
            .join('');
          return (
            <li
              key={`${element.xpath ?? element.src ?? element.tagName}-${index}`}
            >
              <code className="text-color-text">
                &lt;{element.tagName ?? 'element'}&gt;{identity}
              </code>
              {element.text && <div>{element.text}</div>}
              {element.xpath && (
                <div className="text-xs">XPath: {element.xpath}</div>
              )}
              {element.src && (
                <div className="text-xs">资源: {element.src}</div>
              )}
            </li>
          );
        })}
      </ol>
    </details>
  );
}

function SavingMessage() {
  return (
    <div
      className={classnames(
        'flex grow justify-end items-center gap-x-1',
        // Make sure height matches that of action-bar icons so that there
        // isn't a height change when transitioning in and out of saving state
        'h-8 touch:h-touch-minimum',
      )}
      data-testid="saving-message"
    >
      <span
        // Slowly fade in the Spinner such that it only shows up if the saving
        // is slow
        className="text-[16px] animate-fade-in-slow"
      >
        <Spinner size="sm" />
      </span>
      <div className="text-color-text-light font-medium">Saving...</div>
    </div>
  );
}

export type AnnotationProps = {
  annotation: IAnnotation;
  isReply: boolean;
  /** Number of replies to this annotation's thread */
  replyCount: number;
  /** Is the thread to which this annotation belongs currently collapsed? */
  threadIsCollapsed: boolean;
  /**
   * Callback to expand/collapse reply threads. The presence of a function
   * indicates a toggle should be rendered.
   */
  onToggleReplies?: () => void;

  // injected
  annotationsService: AnnotationsService;
  settings: SidebarSettings;
};

/**
 * A single annotation.
 *
 * @param {AnnotationProps} props
 */
function Annotation({
  annotation,
  isReply,
  onToggleReplies,
  replyCount,
  threadIsCollapsed,
  annotationsService,
  settings,
}: AnnotationProps) {
  const store = useSidebarStore();

  const annotationQuote = quote(annotation);
  const targetDescription = description(annotation);

  const draft = store.getDraft(annotation);
  const userid = store.profile().userid;

  const isHovered = store.isAnnotationHovered(annotation.$tag);
  const isSaving = store.isSavingAnnotation(annotation);

  const isEditing = !!draft && !isSaving;
  const isCollapsedReply = isReply && threadIsCollapsed;

  const showActions = !isSaving && !isEditing && isSaved(annotation);

  const defaultAuthority = store.defaultAuthority();
  const displayNamesEnabled = store.isFeatureEnabled('client_display_names');

  const onReply = () => {
    if (isSaved(annotation) && userid) {
      annotationsService.reply(annotation, userid);
    }
  };

  const authorName = useMemo(
    () =>
      annotationDisplayName(annotation, defaultAuthority, displayNamesEnabled),
    [annotation, defaultAuthority, displayNamesEnabled],
  );
  const formattedDate = useMemo(
    () => formatDateTime(annotation.created),
    [annotation.created],
  );
  const role = annotationRole(annotation, settings);
  const annotationDescription = isSaved(annotation)
    ? role
    : `New ${role.toLowerCase()}`;
  const state = store.isAnnotationHighlighted(annotation)
    ? ' - Highlighted'
    : '';

  const targetShape = useMemo(() => shape(annotation), [annotation]);

  return (
    <article
      className="space-y-4"
      aria-label={`${annotationDescription} by ${authorName} on ${formattedDate}${state}`}
    >
      <AnnotationHeader
        annotation={annotation}
        isEditing={isEditing}
        replyCount={replyCount}
        threadIsCollapsed={threadIsCollapsed}
      />
      {targetShape && hasRenderableImageElement(annotation) && (
        <AnnotationThumbnail
          tag={annotation.$tag}
          textInImage={targetShape.regionText ?? targetShape.text}
          description={targetDescription}
          storedImage={annotation.extra?.screenshot as string | undefined}
          // Don't show the description when it is also visible in an input field.
          showDescription={!isEditing}
        />
      )}
      {targetShape &&
        !hasRenderableImageElement(annotation) &&
        !!shapeExcerpt(annotation) && (
          // Shape annotations which can't be rendered as an image (eg.
          // cross-origin images, or non-image elements) show the element's
          // HTML / text excerpt instead of a thumbnail.
          <InlineControlExcerpt
            collapsedHeight={35}
            data-testid="shape-text-excerpt"
          >
            <StyledText aria-hidden="true">
              <blockquote>{shapeExcerpt(annotation)}</blockquote>
            </StyledText>
          </InlineControlExcerpt>
        )}
      {targetShape && <RegionElements elements={targetShape.elements} />}
      {annotationQuote && (
        <AnnotationQuote
          quote={annotationQuote}
          isHovered={isHovered}
          isOrphan={isOrphan(annotation)}
        />
      )}

      {!isCollapsedReply && !isEditing && (
        <AnnotationBody annotation={annotation} />
      )}

      {isEditing && <AnnotationEditor annotation={annotation} draft={draft} />}

      {!isCollapsedReply && (
        <footer className="flex items-start">
          <div className="flex flex-col items-start gap-y-1">
            {showActions && (
              <ModerationControl
                annotation={annotation}
                groupIsPreModerated={!!store.focusedGroup()?.pre_moderated}
                badgeClasses="mt-0.5"
              />
            )}
            {onToggleReplies && (
              <AnnotationReplyToggle
                onToggleReplies={onToggleReplies}
                replyCount={replyCount}
                threadIsCollapsed={threadIsCollapsed}
              />
            )}
          </div>
          {isSaving && <SavingMessage />}
          {showActions && (
            <CardActions classes="grow">
              <AnnotationActionBar annotation={annotation} onReply={onReply} />
            </CardActions>
          )}
        </footer>
      )}
    </article>
  );
}

export default withServices(Annotation, ['annotationsService', 'settings']);
