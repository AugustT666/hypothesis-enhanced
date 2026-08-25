import { buildSettings, $imports } from '../build-settings';

describe('sidebar/config/build-settings', () => {
  let fakeHostPageConfig;
  let fakeJsonRpc;
  let fakeWindow;
  let fakeApiUrl;
  let fakeTopWindow;

  beforeEach(() => {
    fakeHostPageConfig = sinon.stub();
    fakeJsonRpc = {
      call: sinon.stub(),
    };
    fakeApiUrl = sinon.stub().returns('https://dev.hypothes.is/api/');
    $imports.$mock({
      './host-config': { hostPageConfig: fakeHostPageConfig },
      '../util/postmessage-json-rpc': fakeJsonRpc,
      './get-api-url': { getApiUrl: fakeApiUrl },
    });

    // By default, embedder provides no custom config.
    fakeHostPageConfig.returns({});

    // By default, fetching config from parent frames fails.
    fakeJsonRpc.call.throws(new Error('call() response not set'));

    // Setup fake window hierarchy.
    fakeTopWindow = { parent: null, top: null, testId: 2 };
    fakeTopWindow.parent = fakeTopWindow; // Yep, the DOM really works like this.
    fakeTopWindow.top = fakeTopWindow;

    const fakeParent = { parent: fakeTopWindow, top: fakeTopWindow, testId: 1 };

    fakeWindow = { parent: fakeParent, top: fakeTopWindow, testId: 0 };
  });

  afterEach(() => {
    $imports.$restore();
  });

  describe('config/build-settings', () => {
    context('direct embed', () => {
      // no `requestConfigFromFrame` (RPC configuration) property on
      // ConfigFromHost derived from iframe src URL hash
      it('adds the apiUrl to the merged settings object', async () => {
        const sidebarSettings = await buildSettings({});
        assert.deepEqual(sidebarSettings, { apiUrl: fakeApiUrl() });
      });

      it('does not fetch host configuration from ancestor frames', async () => {
        await buildSettings({});
        assert.notCalled(fakeJsonRpc.call);
      });

      it('merges the hostPageConfig onto configFromSidebar and returns the result', async () => {
        // ConfigFromHost has precedence over ConfigFromSidebar
        const configFromSidebar = { foo: 'bar', appType: 'via' };
        fakeHostPageConfig.returns({ foo: 'baz' });
        const sidebarSettings = await buildSettings(configFromSidebar);
        assert.deepEqual(sidebarSettings, {
          foo: 'baz',
          appType: 'via',
          apiUrl: fakeApiUrl(),
        });
      });
    });

    context('from an RPC parent of known ancestry', () => {
      // `requestConfigFromFrame` is an object containing an `origin` and `ancestorLevel`
      //
      // In scenarios like LMS integrations, the client is annotating a document
      // inside an iframe and the client needs to retrieve configuration
      // securely from the top-level window without  that configuration being
      // exposed to the document itself.
      beforeEach(() => {
        fakeJsonRpc.call.resolves({});
        fakeHostPageConfig.returns({
          requestConfigFromFrame: {
            origin: 'https://embedder.com',
            ancestorLevel: 2,
          },
        });
      });

      it('makes an RPC request to `requestConfig` ', async () => {
        await buildSettings({}, fakeWindow);
        assert.isTrue(
          fakeJsonRpc.call.calledWithExactly(
            fakeTopWindow,
            'https://embedder.com',
            'requestConfig',
            [],
            3000,
          ),
        );
      });

      [0, 1, 2].forEach(level => {
        it(`finds ${level}'th ancestor window according to how high the level is`, async () => {
          fakeHostPageConfig.returns({
            requestConfigFromFrame: {
              origin: 'https://embedder.com',
              ancestorLevel: level,
            },
          });
          await buildSettings({}, fakeWindow);
          // testId is a fake property used to assert the level of the fake window
          assert.equal(fakeJsonRpc.call.getCall(0).args[0].testId, level);
        });
      });

      it('throws an error when target ancestor exceeds top window', async () => {
        fakeHostPageConfig.returns({
          requestConfigFromFrame: {
            origin: 'https://embedder.com',
            ancestorLevel: 10, // The top window is only 2 levels high
          },
        });
        await assert.rejects(
          buildSettings({}, fakeWindow),
          /The target parent frame has exceeded the ancestor tree|Try reducing the/g,
        );
      });

      it('adds settings received via RPC to merged settings', async () => {
        fakeJsonRpc.call.resolves({ foo: 'baz' }); // host config

        const result = await buildSettings({}, fakeWindow);

        assert.deepEqual(result.rpc, {
          origin: 'https://embedder.com',
          targetFrame: fakeTopWindow,
        });
      });

      it('merges settings received via RPC with sidebar settings', async () => {
        const configFromSidebar = { foo: 'bar', appType: 'via' };
        fakeJsonRpc.call.resolves({ foo: 'baz' }); // host config
        const result = await buildSettings(configFromSidebar, fakeWindow);
        assert.deepEqual(result, {
          foo: 'baz',
          appType: 'via',
          apiUrl: fakeApiUrl(),
          rpc: {
            origin: 'https://embedder.com',
            targetFrame: fakeTopWindow,
          },
        });
      });

      it('rejects if RPC request for config fails', async () => {
        fakeJsonRpc.call.rejects(new Error('Nope'));
        const configFromSidebar = { foo: 'bar', appType: 'via' };
        await assert.rejects(
          buildSettings(configFromSidebar, fakeWindow),
          'Nope',
        );
      });

      it('returns the `groups` array with the initial host config request', async () => {
        const configFromSidebar = {
          services: [{ groups: ['group1', 'group2'] }],
          appType: 'via',
        };
        fakeJsonRpc.call.onFirstCall().resolves({ foo: 'baz' }); // host config
        const result = await buildSettings(configFromSidebar, fakeWindow);
        assert.deepEqual(result.services[0].groups, ['group1', 'group2']);
      });

      it("creates merged settings where `groups` is a promise when its initial value is '$rpc:requestGroups'", async () => {
        const configFromSidebar = {
          appType: 'via',
        };
        fakeJsonRpc.call.onFirstCall().resolves({
          foo: 'baz',
          services: [{ groups: '$rpc:requestGroups' }],
        }); // host config
        fakeJsonRpc.call.onSecondCall().resolves(['group1', 'group2']); // requestGroups
        const result = await buildSettings(configFromSidebar, fakeWindow);
        assert.deepEqual(await result.services[0].groups, ['group1', 'group2']);
        assert.isTrue(
          fakeJsonRpc.call.getCall(1).calledWithExactly(
            fakeTopWindow,
            'https://embedder.com',
            'requestGroups',
            [0], // passes service index to requestGroups
            0, // no timeout
          ),
        );
      });

      it('throws an error when the RPC call to `requestGroups` fails', async () => {
        const configFromSidebar = {
          appType: 'via',
        };
        fakeJsonRpc.call.onFirstCall().resolves({
          foo: 'baz',
          services: [{ groups: '$rpc:requestGroups' }],
        }); // host config
        fakeJsonRpc.call.onSecondCall().rejects(); // requestGroups
        const result = await buildSettings(configFromSidebar, fakeWindow);
        await assert.rejects(
          result.services[0].groups,
          'Unable to fetch groups',
        );
      });

      it('creates merged settings and also adds back the `group` value from the host config', async () => {
        fakeHostPageConfig.returns({
          requestConfigFromFrame: {
            origin: 'https://embedder.com',
            ancestorLevel: 2,
          },
          group: '1234',
        });
        const configFromSidebar = { foo: 'bar', appType: 'via' };
        fakeJsonRpc.call.resolves({ foo: 'baz' });

        const result = await buildSettings(configFromSidebar, fakeWindow);

        assert.deepEqual(result, {
          foo: 'baz',
          appType: 'via',
          group: '1234',
          apiUrl: fakeApiUrl(),
          rpc: {
            origin: 'https://embedder.com',
            targetFrame: fakeTopWindow,
          },
        });
      });
    });

    context('incorrect requestConfigFromFrame object', () => {
      beforeEach(() => {
        fakeJsonRpc.call.resolves({});
      });

      it('missing ancestorLevel', async () => {
        fakeHostPageConfig.returns({
          requestConfigFromFrame: {
            origin: 'https://embedder.com',
            // missing ancestorLevel
          },
        });
        await assert.rejects(
          buildSettings({}, fakeWindow),
          'Improper `requestConfigFromFrame` object. Both `ancestorLevel` and `origin` need to be specified',
        );
      });

      it('missing origin', async () => {
        fakeHostPageConfig.returns({
          requestConfigFromFrame: {
            // missing origin
            ancestorLevel: 2,
          },
        });
        await assert.rejects(
          buildSettings({}, fakeWindow),
          'Improper `requestConfigFromFrame` object. Both `ancestorLevel` and `origin` need to be specified',
        );
      });
    });

    context('saved LAN server address (`h-local.server`)', () => {
      it('leaves settings unchanged when no address is saved', async () => {
        fakeWindow.localStorage = { getItem: sinon.stub().returns(null) };
        const result = await buildSettings(
          { localApi: true, noAuth: true },
          fakeWindow,
        );
        assert.isTrue(result.localApi);
      });

      it('switches any build to LAN mode when an address is saved', async () => {
        const removeItem = sinon.stub();
        fakeWindow.localStorage = {
          getItem: sinon.stub().returns('192.168.1.10:8123'),
          removeItem,
        };
        // The address is only kept if the reachability probe succeeds.
        fakeWindow.fetch = sinon.stub().resolves({ status: 200 });
        fakeWindow.setTimeout = sinon.stub().returns(0);
        fakeWindow.clearTimeout = sinon.stub();
        const result = await buildSettings(
          { localApi: true, noAuth: true },
          fakeWindow,
        );
        assert.isFalse(result.localApi);
        assert.equal(result.apiUrl, fakeApiUrl());
        assert.notCalled(removeItem);
      });

      it('drops an unreachable saved loopback address and stays local', async () => {
        const removeItem = sinon.stub();
        fakeWindow.localStorage = {
          getItem: sinon.stub().returns('http://127.0.0.1:8123'),
          removeItem,
        };
        fakeWindow.fetch = sinon
          .stub()
          .rejects(new Error('connection refused'));
        fakeWindow.setTimeout = sinon.stub().returns(1);
        fakeWindow.clearTimeout = sinon.stub();

        const result = await buildSettings(
          { localApi: true, noAuth: true },
          fakeWindow,
        );

        assert.isTrue(result.localApi);
        assert.calledWith(removeItem, 'h-local.server');
      });
    });

    context('official service mode (`h-local.service`)', () => {
      const officialSettings = {
        localApi: true,
        noAuth: true,
        apiUrl: 'chrome-extension://local/api/',
        oauthClientId: 'local-no-auth-client',
        officialApiUrl: 'https://hypothes.is/api/',
        officialAuthDomain: 'hypothes.is',
        officialOauthClientId: 'official-client-id',
      };

      it('stays in built-in mode when no service choice is saved', async () => {
        fakeWindow.localStorage = {
          getItem: sinon.stub().returns(null),
        };
        const result = await buildSettings(officialSettings, fakeWindow);
        assert.isTrue(result.localApi);
        assert.isTrue(result.noAuth);
        assert.equal(result.oauthClientId, 'local-no-auth-client');
        assert.equal(result.apiUrl, fakeApiUrl());
      });

      it('switches to the baked official endpoints when official is selected', async () => {
        fakeWindow.localStorage = {
          getItem: sinon
            .stub()
            .callsFake(key => (key === 'h-local.service' ? 'official' : null)),
        };
        // Make the (mocked) getApiUrl pass the settings' apiUrl through so
        // the override is observable in the returned settings.
        fakeApiUrl.callsFake(settings => settings.apiUrl);
        const result = await buildSettings(officialSettings, fakeWindow);
        assert.isFalse(result.localApi);
        assert.isFalse(result.noAuth);
        assert.equal(result.oauthClientId, 'official-client-id');
        assert.equal(result.authDomain, 'hypothes.is');
        assert.equal(result.apiUrl, 'https://hypothes.is/api/');
      });

      it('clears the choice and stays local when official endpoints are not baked', async () => {
        const removeItem = sinon.stub();
        fakeWindow.localStorage = {
          getItem: sinon
            .stub()
            .callsFake(key => (key === 'h-local.service' ? 'official' : null)),
          removeItem,
        };
        const result = await buildSettings(
          { localApi: true, noAuth: true },
          fakeWindow,
        );
        assert.isTrue(result.localApi);
        assert.isTrue(result.noAuth);
        assert.calledWith(removeItem, 'h-local.service');
      });

      it('lets a saved LAN room take precedence over the official choice', async () => {
        fakeWindow.localStorage = {
          getItem: sinon.stub().callsFake(key => {
            if (key === 'h-local.service') {
              return 'official';
            }
            if (key === 'h-local.server') {
              return '192.168.1.10:8123';
            }
            return null;
          }),
        };
        fakeWindow.fetch = sinon.stub().resolves({ status: 200 });
        fakeWindow.setTimeout = sinon.stub().returns(0);
        fakeWindow.clearTimeout = sinon.stub();
        fakeApiUrl.callsFake(settings => settings.apiUrl);
        const result = await buildSettings(officialSettings, fakeWindow);
        assert.isFalse(result.localApi);
        assert.equal(result.apiUrl, 'http://192.168.1.10:8123/api/');
      });
    });
  });
});
