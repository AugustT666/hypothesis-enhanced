import { mount } from '@hypothesis/frontend-testing';

import AgentDelivery, { $imports } from '../AgentDelivery';

describe('AgentDelivery', () => {
  let fakeCopyPlainText;
  let fakeOnStart;
  let fetchStub;
  let originalFetch;

  const createComponent = (props = {}) =>
    mount(
      <AgentDelivery
        host={{ kind: 'stopped' }}
        onStart={fakeOnStart}
        {...props}
      />,
    );

  beforeEach(() => {
    fakeCopyPlainText = sinon.stub().resolves();
    fakeOnStart = sinon.stub().resolves({
      ok: true,
      status: 'started',
      port: 8123,
      urls: ['http://192.168.1.5:8123', 'http://100.64.0.2:8123'],
      hostname: 'macbook.local',
      platform: 'darwin arm64',
    });

    fetchStub = sinon.stub();
    fetchStub.withArgs('http://127.0.0.1:8123/api/annotations').resolves({
      ok: true,
      json: sinon.stub().resolves({ rows: [] }),
    });
    fetchStub
      .withArgs(
        'http://127.0.0.1:8123/api/annotations',
        sinon.match({ method: 'POST' }),
      )
      .resolves({ ok: true });

    originalFetch = window.fetch;
    window.fetch = fetchStub;

    localStorage.clear();
    localStorage.setItem(
      'h-local.annotations.v1',
      JSON.stringify([
        {
          uri: 'https://example.com/paper',
          text: '修改这里',
          created: '2026-08-22T00:00:00.000Z',
        },
      ]),
    );

    $imports.$mock({
      '../util/copy-to-clipboard': {
        copyPlainText: fakeCopyPlainText,
      },
    });
  });

  afterEach(() => {
    window.fetch = originalFetch;
    $imports.$restore();
    sinon.restore();
  });

  it('starts the local service, uploads annotations and copies an agent prompt', async () => {
    const wrapper = createComponent();

    await wrapper
      .find('[data-testid="agent-delivery-button"]')
      .props()
      .onClick();
    wrapper.update();

    assert.calledOnce(fakeOnStart);
    assert.calledOnce(fakeCopyPlainText);
    const prompt = fakeCopyPlainText.firstCall.args[0];
    assert.include(prompt, '请定位以下服务器获取批注，并逐条处理。');
    assert.include(prompt, '主机名：macbook.local');
    assert.include(prompt, '系统：darwin arm64');
    assert.include(prompt, 'http://192.168.1.5:8123');
    assert.include(prompt, 'curl http://192.168.1.5:8123/api/search');
    assert.include(
      wrapper.find('[data-testid="agent-delivery-done"]').text(),
      '1 条',
    );
  });

  it('shows an error when the local service cannot be started', async () => {
    fakeOnStart.resolves({ ok: false, message: '启动失败' });

    const wrapper = createComponent();
    await wrapper
      .find('[data-testid="agent-delivery-button"]')
      .props()
      .onClick();
    wrapper.update();

    assert.isTrue(
      wrapper.find('[data-testid="agent-delivery-error"]').exists(),
    );
    assert.notCalled(fakeCopyPlainText);
  });
});
