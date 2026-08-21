import {
  CopyIcon,
  Input,
  InputGroup,
  IconButton,
  LockFilledIcon,
} from '@hypothesis/frontend-shared';
import { useCallback } from 'preact/hooks';

import { pageSharingLink } from '../../helpers/annotation-sharing';
import { withServices } from '../../service-context';
import type { ToastMessengerService } from '../../services/toast-messenger';
import { useSidebarStore } from '../../store';
import { copyPlainText } from '../../util/copy-to-clipboard';
import LanServerControls, {
  getLanServerURL,
  isLoopbackLanServerURL,
  reloadSidebar,
  setLanServerURL,
  useLanServerHost,
} from '../LanServerControls';
import LoadingSpinner from './LoadingSpinner';

export type ShareAnnotationsProps = {
  // injected
  toastMessenger: ToastMessengerService;
};

/**
 * Render UI for sharing annotations (by URL) within the currently-focused group
 */
function ShareAnnotations({ toastMessenger }: ShareAnnotationsProps) {
  const store = useSidebarStore();
  const mainFrame = store.mainFrame();
  const focusedGroup = store.focusedGroup();
  const sharingReady = focusedGroup && mainFrame;

  const shareURI =
    sharingReady && pageSharingLink(mainFrame.uri, focusedGroup.id);

  const copyShareLink = useCallback(async () => {
    try {
      if (shareURI) {
        await copyPlainText(shareURI);
        toastMessenger.success('Copied share link to clipboard');
      }
    } catch {
      toastMessenger.error('Unable to copy link');
    }
  }, [shareURI, toastMessenger]);

  // Optional LAN sharing add-on. Querying the helper status here is fine, but
  // the room must never be started automatically: the user has to click the
  // "创建局域网房间" button below the official public share link.
  const { host, startHost, stopHost } = useLanServerHost(true);

  const save = useCallback((serverURL: string) => {
    setLanServerURL(serverURL);
    reloadSidebar();
  }, []);

  const startRoom = useCallback(async () => {
    const reply = await startHost();
    if (
      reply?.ok &&
      (reply.status === 'started' || reply.status === 'running')
    ) {
      // The host joins its own room via 127.0.0.1.
      save(`http://127.0.0.1:${reply.port}`);
    }
  }, [save, startHost]);

  const stopRoom = useCallback(async () => {
    await stopHost();
    const savedServerURL = getLanServerURL();
    if (savedServerURL && isLoopbackLanServerURL(savedServerURL)) {
      save('');
    }
  }, [save, stopHost]);

  const onCopyLink = useCallback(
    (_url: string, ok: boolean) => {
      if (ok) {
        toastMessenger.success('已复制局域网链接');
      } else {
        toastMessenger.error('无法复制链接');
      }
    },
    [toastMessenger],
  );

  if (!sharingReady) {
    return <LoadingSpinner />;
  }

  return (
    <div className="text-color-text-light space-y-3">
      {shareURI ? (
        <>
          <div
            className="text-color-text font-medium"
            data-testid="sharing-intro"
          >
            {focusedGroup.type === 'private' ? (
              <p>
                Use this link to share these annotations with other group
                members:
              </p>
            ) : (
              <p>Use this link to share these annotations with anyone:</p>
            )}
          </div>
          <div>
            <InputGroup>
              <Input
                aria-label="Use this URL to share these annotations"
                type="text"
                value={shareURI}
                readOnly
              />
              <IconButton
                icon={CopyIcon}
                onClick={copyShareLink}
                title="Copy share link"
                variant="dark"
              />
            </InputGroup>
          </div>
          <p data-testid="sharing-details">
            {focusedGroup.type === 'private' ? (
              <span>
                Annotations in the private group <em>{focusedGroup.name}</em>{' '}
                are only visible to group members.
              </span>
            ) : (
              <span>
                Anyone using this link may view the annotations in the group{' '}
                <em>{focusedGroup.name}</em>.
              </span>
            )}{' '}
            <span>
              Private (
              <LockFilledIcon className="inline w-[14px] h-[14px] -mt-0.5" />{' '}
              <em>Only Me</em>) annotations are only visible to you.
            </span>
          </p>
        </>
      ) : (
        <p data-testid="no-sharing">
          These annotations cannot be shared because this document is not
          available on the web.
        </p>
      )}

      <div
        className="border-t pt-3 mt-2 space-y-3"
        data-testid="lan-share-section"
      >
        <div className="text-color-text font-medium">
          局域网共享（可选）：创建一个局域网房间，让同事直接加入同步批注。
        </div>
        <LanServerControls
          host={host}
          savedServerURL={getLanServerURL()}
          onSave={save}
          onStart={startRoom}
          onStop={stopRoom}
          onCopy={onCopyLink}
          startLabel="创建局域网房间"
        />
      </div>
    </div>
  );
}

export default withServices(ShareAnnotations, ['toastMessenger']);
