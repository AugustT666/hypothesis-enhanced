import {
  checkAccessibility,
  mockImportedComponents,
  mount,
} from '@hypothesis/frontend-testing';

import ShareAnnotations from '../ShareAnnotations';
import { $imports } from '../ShareAnnotations';

describe('ShareAnnotations', () => {
  let fakeStore;
  let fakeBouncerLink;
  let fakePageSharingLink;
  let fakeToastMessenger;
  let fakeCopyToClipboard;
  let fakeReload;
  let fakeGetLanServerURL;
  let fakeIsLoopbackLanServerURL;
  let fakeSetLanServerURL;
  let fakeCheckHost;
  let fakeStartHost;
  let fakeStopHost;

  const fakePrivateGroup = {
    type: 'private',
    name: 'Test Private Group',
    id: 'testprivate',
  };

  function MockLanServerControls() {
    return <div data-testid="mock-lan-server-controls" />;
  }
  MockLanServerControls.displayName = 'LanServerControls';

  const createComponent = props =>
    mount(<ShareAnnotations toastMessenger={fakeToastMessenger} {...props} />);

  beforeEach(() => {
    fakeBouncerLink = 'http://hyp.is/go?url=http%3A%2F%2Fwww.example.com';
    fakeCopyToClipboard = {
      copyPlainText: sinon.stub(),
    };

    fakePageSharingLink = sinon.stub().returns(fakeBouncerLink);
    fakeToastMessenger = {
      success: sinon.stub(),
      error: sinon.stub(),
    };
    fakeReload = sinon.stub();
    fakeGetLanServerURL = sinon.stub().returns('');
    fakeIsLoopbackLanServerURL = sinon.stub().returns(true);
    fakeSetLanServerURL = sinon.stub();
    fakeCheckHost = sinon.stub().resolves({
      ok: true,
      status: 'stopped',
    });
    fakeStartHost = sinon.stub().resolves({
      ok: true,
      status: 'started',
      port: 8123,
      urls: ['http://192.168.1.10:8123'],
    });
    fakeStopHost = sinon.stub().resolves({ ok: true, status: 'stopped' });

    fakeStore = {
      focusedGroup: sinon.stub().returns(fakePrivateGroup),
      mainFrame: () => ({
        uri: 'https://www.example.com',
      }),
    };

    $imports.$mock(mockImportedComponents());

    $imports.$mock({
      '../../store': { useSidebarStore: () => fakeStore },
      '../../helpers/annotation-sharing': {
        pageSharingLink: fakePageSharingLink,
      },
      '../../util/copy-to-clipboard': fakeCopyToClipboard,
      '../LanServerControls': {
        default: MockLanServerControls,
        getLanServerURL: fakeGetLanServerURL,
        isLoopbackLanServerURL: fakeIsLoopbackLanServerURL,
        reloadSidebar: fakeReload,
        setLanServerURL: fakeSetLanServerURL,
        useLanServerHost: () => ({
          host: { kind: 'stopped' },
          checkHost: fakeCheckHost,
          startHost: fakeStartHost,
          stopHost: fakeStopHost,
        }),
      },
    });
  });

  afterEach(() => {
    $imports.$restore();
  });

  describe('share panel content', () => {
    it('renders a spinner if focused group not available yet', () => {
      fakeStore.focusedGroup.returns(undefined);

      const wrapper = createComponent();
      assert.isTrue(wrapper.find('LoadingSpinner').exists());
    });

    it('renders panel content if needed info available', () => {
      const wrapper = createComponent();
      assert.isFalse(wrapper.find('LoadingSpinner').exists());
    });
  });

  [
    {
      groupType: 'private',
      introPattern: /Use this link.*with other group members/,
      visibilityPattern:
        /Annotations in the private group.*are only visible to group members/,
    },
    {
      groupType: 'restricted',
      introPattern: /Use this link to share these annotations with anyone/,
      visibilityPattern:
        /Anyone using this link may view the annotations in the group/,
    },
    {
      groupType: 'open',
      introPattern: /Use this link to share these annotations with anyone/,
      visibilityPattern:
        /Anyone using this link may view the annotations in the group/,
    },
  ].forEach(testCase => {
    it('it displays appropriate help text depending on group type', () => {
      fakeStore.focusedGroup.returns({
        type: testCase.groupType,
        name: 'Test Group',
        id: 'testid,',
      });

      const wrapper = createComponent();

      assert.match(
        wrapper.find('[data-testid="sharing-intro"]').text(),
        testCase.introPattern,
      );

      assert.match(
        wrapper.find('[data-testid="sharing-details"]').text(),
        testCase.visibilityPattern,
      );
    });

    context('document URI cannot be shared', () => {
      it('renders explanatory text about inability to share', () => {
        fakePageSharingLink.returns(null);

        const wrapper = createComponent();

        const panelEl = wrapper.find('[data-testid="no-sharing"]');
        assert.include(panelEl.text(), 'These annotations cannot be shared');
      });
    });
  });

  describe('web share link', () => {
    it('displays web share link in readonly form input', () => {
      const wrapper = createComponent();

      const inputEl = wrapper.find('input');
      assert.equal(inputEl.prop('value'), fakeBouncerLink);
      assert.equal(inputEl.prop('readOnly'), true);
    });

    context('document URI cannot be shared', () => {
      it('does not render an input field with share link', () => {
        fakePageSharingLink.returns(null);
        const wrapper = createComponent();

        const inputEl = wrapper.find('input');
        assert.isFalse(inputEl.exists());
      });
    });

    describe('copy link to clipboard', () => {
      it('copies link to clipboard when copy button clicked', () => {
        const wrapper = createComponent();

        wrapper.find('IconButton').props().onClick();

        assert.calledWith(fakeCopyToClipboard.copyPlainText, fakeBouncerLink);
      });

      it('confirms link copy when successful', async () => {
        const wrapper = createComponent();

        await wrapper.find('IconButton').props().onClick();

        assert.calledWith(
          fakeToastMessenger.success,
          'Copied share link to clipboard',
        );
      });

      it('flashes an error if link copying unsuccessful', () => {
        fakeCopyToClipboard.copyPlainText.throws();
        const wrapper = createComponent();

        wrapper.find('IconButton').props().onClick();

        assert.calledWith(fakeToastMessenger.error, 'Unable to copy link');
      });
    });
  });

  describe('LAN sharing add-on', () => {
    it('renders the official public link followed by the LAN section', () => {
      const wrapper = createComponent();

      assert.isTrue(wrapper.find('[data-testid="sharing-intro"]').exists());
      assert.isTrue(wrapper.find('[data-testid="lan-share-section"]').exists());
    });

    it('labels the LAN action "创建局域网房间"', () => {
      const wrapper = createComponent();

      assert.equal(
        wrapper.find('LanServerControls').prop('startLabel'),
        '创建局域网房间',
      );
    });

    it('does not auto-start a room when the share panel opens', () => {
      createComponent();

      assert.notCalled(fakeStartHost);
    });

    it('starts a room only after the user clicks the LAN button', async () => {
      const wrapper = createComponent();

      await wrapper.find('LanServerControls').props().onStart();

      assert.calledOnce(fakeStartHost);
      assert.calledWith(fakeSetLanServerURL, 'http://127.0.0.1:8123');
      assert.calledOnce(fakeReload);
    });

    it('stops a local room and reconnects to built-in data', async () => {
      fakeGetLanServerURL.returns('http://127.0.0.1:8123');
      const wrapper = createComponent();

      await wrapper.find('LanServerControls').props().onStop();

      assert.calledOnce(fakeStopHost);
      assert.calledWith(fakeSetLanServerURL, '');
      assert.calledOnce(fakeReload);
    });
  });

  // TODO: Add a11y test for tabbed interface
  it(
    'should pass a11y checks',
    checkAccessibility({
      content: () => createComponent(),
    }),
  );
});
