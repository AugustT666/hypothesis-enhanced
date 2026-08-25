import { mount } from '@hypothesis/frontend-testing';
import { act } from 'preact/test-utils';

import LanServerControls, {
  isLoopbackLanServerURL,
  normalizeLanServerURL,
  reloadSidebar,
} from '../LanServerControls';

describe('LanServerControls', () => {
  let fakeOnSave;
  let fakeOnStart;
  let fakeOnStop;

  const runningHost = {
    kind: 'running',
    port: 8123,
    urls: ['http://192.168.1.10:8123'],
  };

  const createComponent = (props = {}) =>
    mount(
      <LanServerControls
        host={{ kind: 'stopped' }}
        savedServerURL=""
        onSave={fakeOnSave}
        onStart={fakeOnStart}
        onStop={fakeOnStop}
        {...props}
      />,
    );

  beforeEach(() => {
    fakeOnSave = sinon.stub();
    fakeOnStart = sinon.stub();
    fakeOnStop = sinon.stub();
  });

  describe('normalizeLanServerURL', () => {
    [
      { input: '192.168.1.10:8123', expected: 'http://192.168.1.10:8123' },
      {
        input: 'http://192.168.1.10:8123/api/',
        expected: 'http://192.168.1.10:8123',
      },
      {
        input: '  http://192.168.1.10:8123/  ',
        expected: 'http://192.168.1.10:8123',
      },
      { input: '', expected: '' },
    ].forEach(({ input, expected }) => {
      it(`normalizes "${input}"`, () => {
        assert.equal(normalizeLanServerURL(input), expected);
      });
    });
  });

  describe('reloadSidebar', () => {
    it('reloads the whole extension tab instead of only the sidebar iframe', () => {
      const reloadTab = sinon.stub();
      const queryTabs = sinon.stub().callsArgWith(1, [{ id: 42 }]);
      const reloadWindow = sinon.stub();
      const fakeWindow = {
        chrome: { tabs: { query: queryTabs, reload: reloadTab } },
        location: { reload: reloadWindow },
      };

      reloadSidebar(fakeWindow);

      assert.calledWith(queryTabs, {
        active: true,
        currentWindow: true,
      });
      assert.calledWith(reloadTab, 42);
      assert.notCalled(reloadWindow);
    });

    it('falls back to reloading the current window outside the extension', () => {
      const reloadWindow = sinon.stub();
      const fakeWindow = {
        chrome: undefined,
        location: { reload: reloadWindow },
      };

      reloadSidebar(fakeWindow);

      assert.calledOnce(reloadWindow);
    });
  });

  describe('isLoopbackLanServerURL', () => {
    it('recognizes localhost URLs', () => {
      assert.isTrue(isLoopbackLanServerURL('http://127.0.0.1:8123'));
      assert.isTrue(isLoopbackLanServerURL('http://localhost:8123'));
      assert.isFalse(isLoopbackLanServerURL('http://192.168.1.10:8123'));
    });
  });

  it('shows the currently saved server', () => {
    const wrapper = createComponent({
      savedServerURL: 'http://192.168.1.10:8123',
    });

    assert.equal(
      wrapper.find('[data-testid="lan-server-current"]').text(),
      'http://192.168.1.10:8123',
    );
  });

  it('shows share URLs and a stop button when the room is running', () => {
    const wrapper = createComponent({ host: runningHost });

    assert.equal(
      wrapper.find('[data-testid="lan-server-url"]').first().text(),
      'http://192.168.1.10:8123',
    );
    assert.isTrue(wrapper.find('[data-testid="lan-server-stop"]').exists());
    assert.isFalse(wrapper.find('[data-testid="lan-server-start"]').exists());
  });

  it('disables the start button while the helper is being contacted', () => {
    const wrapper = createComponent({ host: { kind: 'checking' } });

    assert.isTrue(
      wrapper.find('[data-testid="lan-server-start"]').prop('disabled'),
    );
  });

  it('supports a custom start-button label', () => {
    const wrapper = createComponent({ startLabel: '创建局域网房间' });

    assert.equal(
      wrapper.find('[data-testid="lan-server-start"]').text(),
      '创建局域网房间',
    );
  });

  it('shows native-helper errors', () => {
    const wrapper = createComponent({
      host: { kind: 'error', message: '助手未安装' },
    });

    assert.equal(
      wrapper.find('[data-testid="lan-server-error"]').text(),
      '助手未安装',
    );
  });

  it('normalizes and saves a room URL entered by the user', () => {
    const wrapper = createComponent();

    act(() => {
      wrapper.find('[data-testid="lan-server-input"]').prop('onInput')({
        target: { value: '192.168.1.20:8123/api/' },
      });
    });
    wrapper.update();
    wrapper.find('[data-testid="lan-server-save"]').simulate('click');

    assert.calledWith(fakeOnSave, 'http://192.168.1.20:8123');
  });

  it('resets to built-in local data when a room is already saved', () => {
    const wrapper = createComponent({
      savedServerURL: 'http://192.168.1.10:8123',
    });

    wrapper.find('[data-testid="lan-server-reset"]').simulate('click');

    assert.calledWith(fakeOnSave, '');
  });

  it('invokes start and stop callbacks', () => {
    const stopped = createComponent();
    stopped.find('[data-testid="lan-server-start"]').simulate('click');
    assert.calledOnce(fakeOnStart);

    const running = createComponent({ host: runningHost });
    running.find('[data-testid="lan-server-stop"]').simulate('click');
    assert.calledOnce(fakeOnStop);
  });
});
