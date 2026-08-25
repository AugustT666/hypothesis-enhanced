import { useCallback } from 'preact/hooks';

import ModalDialog from '../../annotator/components/ModalDialog';
import LanServerControls, {
  getLanServerURL,
  isLoopbackLanServerURL,
  reloadSidebar,
  setLanServerURL,
  useLanServerHost,
} from './LanServerControls';

export type LanServerModalProps = {
  /** Whether the modal is open. */
  open: boolean;

  /** Called to close the modal. */
  onClose: () => void;
};

/**
 * Modal which lets the user either join an existing LAN annotation room by
 * pasting the host's server link (eg. `http://192.168.1.10:8123`), or start
 * a room on this machine with one click (the extension launches the bundled
 * native helper, which runs the local-h server as a background process).
 *
 * The address is saved to `h-local.server` and the whole tab is reloaded so
 * the host page and sidebar reconnect cleanly. No password is needed: users
 * are identified by their IPv4 address.
 */
function LanServerModal({ open, onClose }: LanServerModalProps) {
  const { host, startHost, stopHost } = useLanServerHost(open);

  const save = useCallback((serverURL: string) => {
    setLanServerURL(serverURL);
    // Reload the whole tab so the host page and sidebar reconnect cleanly.
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
    // If this machine was using its own room, fall back to built-in data.
    const savedServerURL = getLanServerURL();
    if (savedServerURL && isLoopbackLanServerURL(savedServerURL)) {
      save('');
    }
  }, [save, stopHost]);

  return (
    <ModalDialog
      closed={!open}
      onClose={onClose}
      aria-label="LAN server settings"
      data-testid="lan-server-modal"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="w-full sm:max-w-md bg-white rounded shadow-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold">局域网服务器</h2>
          <LanServerControls
            host={host}
            savedServerURL={getLanServerURL()}
            onSave={save}
            onStart={startRoom}
            onStop={stopRoom}
            onCancel={onClose}
          />
        </div>
      </div>
    </ModalDialog>
  );
}

export default LanServerModal;
