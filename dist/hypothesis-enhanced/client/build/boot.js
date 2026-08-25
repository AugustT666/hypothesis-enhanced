(function () {
  'use strict';

  var manifest = {
  	"styles/annotator.css": "styles/annotator.css?2911a6",
  	"styles/annotator.css.map": "styles/annotator.css.map?0fa42e",
  	"styles/pdfjs-overrides.css.map": "styles/pdfjs-overrides.css.map?5a12c5",
  	"styles/katex.min.css": "styles/katex.min.css?027dee",
  	"styles/highlights.css": "styles/highlights.css?f741a8",
  	"styles/highlights.css.map": "styles/highlights.css.map?e0dd35",
  	"styles/katex.min.css.map": "styles/katex.min.css.map?f4f041",
  	"styles/pdfjs-overrides.css": "styles/pdfjs-overrides.css?d58df4",
  	"styles/sidebar.css": "styles/sidebar.css?bab314",
  	"styles/ui-playground.css.map": "styles/ui-playground.css.map?6a44d8",
  	"styles/sidebar.css.map": "styles/sidebar.css.map?21375b",
  	"styles/ui-playground.css": "styles/ui-playground.css?b42c18",
  	"scripts/annotator.bundle.js": "scripts/annotator.bundle.js?9e633e",
  	"scripts/ui-playground.bundle.js": "scripts/ui-playground.bundle.js?0094f7",
  	"scripts/annotator.bundle.js.map": "scripts/annotator.bundle.js.map?a4c4ff",
  	"scripts/ui-playground.bundle.js.map": "scripts/ui-playground.bundle.js.map?e3d9d5",
  	"scripts/sidebar.bundle.js": "scripts/sidebar.bundle.js?3ddd75",
  	"scripts/sidebar.bundle.js.map": "scripts/sidebar.bundle.js.map?1cd84d"
  };

  /**
   * Mark an element as having been added by the boot script.
   *
   * This marker is later used to know which elements to remove when unloading
   * the client.
   */
  function tagElement(el) {
    el.setAttribute('data-hypothesis-asset', '');
  }
  function injectStylesheet(doc, href) {
    var link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    tagElement(link);
    doc.head.appendChild(link);
  }
  function injectScript(doc, src) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$esModule = _ref.esModule,
      esModule = _ref$esModule === void 0 ? true : _ref$esModule,
      _ref$forceReload = _ref.forceReload,
      forceReload = _ref$forceReload === void 0 ? false : _ref$forceReload;
    var script = doc.createElement('script');
    if (esModule) {
      script.type = 'module';
    }
    if (forceReload) {
      // Module scripts are only evaluated once per URL in a document. Adding
      // a dynamic fragment forces re-evaluation without breaking browser or CDN
      // caching of the script, as a query string would do.
      //
      // See examples in https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-module-system
      src += "#ts=".concat(Date.now());
    }
    script.src = src;

    // Set 'async' to false to maintain execution order of scripts.
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
    script.async = false;
    tagElement(script);
    doc.head.appendChild(script);
  }
  function injectLink(doc, rel, type, url) {
    var link = doc.createElement('link');
    link.rel = rel;
    link.href = url;
    link.type = "application/annotator+".concat(type);
    tagElement(link);
    doc.head.appendChild(link);
  }
  /**
   * Preload a URL using a `<link rel="preload" as="<type>" ...>` element
   *
   * This can be used to preload an API request or other resource which we know
   * that the client will load.
   */
  function preloadURL(doc, type, url) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      crossOrigin = _ref2.crossOrigin;
    var link = doc.createElement('link');
    link.rel = 'preload';
    link.as = type;
    link.href = url;

    // Enable JS to read the response if opted-in, or this is a URL we're going to
    // use via `fetch` in JS.
    if (crossOrigin || type === 'fetch') {
      link.crossOrigin = 'anonymous';

      // Prevent the frontend part of pywb (wombat) in viahtml from removing the
      // `crossorigin` attribute.
      //
      // See https://github.com/webrecorder/wombat/blob/7433dede629b1c919c4c9c1e2c2daf1ac6665973/src/wombat.js#L2422
      link.removeAttribute = () => {};
    }
    tagElement(link);
    doc.head.appendChild(link);
  }
  function assetURL(config, path) {
    return config.assetRoot + 'build/' + config.manifest[path];
  }

  /**
   * Bootstrap the Hypothesis client.
   *
   * This triggers loading of the necessary resources for the client in a host
   * or guest frame. We could in future simplify booting in guest-only frames
   * by omitting resources that are only needed in the host frame.
   */
  function bootHypothesisClient(doc, config) {
    var _config$sidebarAppUrl;
    // Detect presence of Hypothesis in the page
    var appLinkEl = doc.querySelector('link[type="application/annotator+html"]');
    if (appLinkEl) {
      return;
    }

    // Register the URL of the sidebar app which the Hypothesis client should load.
    // The <link> tag is also used by browser extensions etc. to detect the
    // presence of the Hypothesis client on the page.
    injectLink(doc, 'sidebar', 'html', config.sidebarAppUrl);

    // Register the URL of the notebook app which the Hypothesis client should load.
    injectLink(doc, 'notebook', 'html', config.notebookAppUrl);

    // Register the URL of the user profile app which the Hypothesis client should load.
    injectLink(doc, 'profile', 'html', config.profileAppUrl);

    // Preload the styles used by the shadow roots of annotator UI elements.
    // Skip this when running as a browser extension content script: the
    // <link rel="preload"> is inserted from the page's main world while the
    // annotator in the isolated world loads the stylesheet separately, which
    // Chrome/Edge report as "cross-world extension resource mismatch".
    // Extension assets come from local disk, so preloading has no benefit.
    var isBrowserExtension = (_config$sidebarAppUrl = config.sidebarAppUrl) === null || _config$sidebarAppUrl === void 0 ? void 0 : _config$sidebarAppUrl.startsWith('chrome-extension://');
    if (!isBrowserExtension) {
      preloadURL(doc, 'style', assetURL(config, 'styles/annotator.css'), {
        // Enable style rules to be accessed from JS. See notes in shadow-root.ts.
        crossOrigin: true
      });
    }

    // Register the URL of the annotation client which is currently being used to drive
    // annotation interactions.
    injectLink(doc, 'hypothesis-client', 'javascript', config.assetRoot + 'build/boot.js');
    var scripts = ['scripts/annotator.bundle.js'];
    for (var _i = 0, _scripts = scripts; _i < _scripts.length; _i++) {
      var path = _scripts[_i];
      var url = assetURL(config, path);
      injectScript(doc, url, {
        esModule: false
      });
    }
    var styles = [];
    if (window.PDFViewerApplication !== undefined) {
      styles.push('styles/pdfjs-overrides.css');
    }
    styles.push('styles/highlights.css');
    for (var _i2 = 0, _styles = styles; _i2 < _styles.length; _i2++) {
      var _path = _styles[_i2];
      var _url = assetURL(config, _path);
      injectStylesheet(doc, _url);
    }
  }

  /**
   * Bootstrap the sidebar application which displays annotations.
   */
  function bootSidebarApp(doc, config) {
    // Preload `/api/` and `/api/links` API responses, unless API calls are
    // served from local storage.
    if (!config.localApi) {
      preloadURL(doc, 'fetch', config.apiUrl);
      preloadURL(doc, 'fetch', config.apiUrl + 'links');
    }
    var scripts = ['scripts/sidebar.bundle.js'];
    for (var _i3 = 0, _scripts2 = scripts; _i3 < _scripts2.length; _i3++) {
      var path = _scripts2[_i3];
      var url = assetURL(config, path);
      injectScript(doc, url, {
        esModule: true
      });
    }
    var styles = ['styles/katex.min.css', 'styles/sidebar.css'];
    for (var _i4 = 0, _styles2 = styles; _i4 < _styles2.length; _i4++) {
      var _path2 = _styles2[_i4];
      var _url2 = assetURL(config, _path2);
      injectStylesheet(doc, _url2);
    }
  }

  /**
   * Run a series of representative feature tests to see if the browser is new
   * enough to support Hypothesis.
   *
   * We use feature tests to try to avoid false negatives, accepting some risk of
   * false positives due to the host page having loaded polyfills for APIs in order
   * to support older browsers.
   */
  function isBrowserSupported() {
    // Checks that return a truthy value if they succeed and throw or return
    // a falsey value if they fail.
    var checks = [
    // ES APIs.
    () => Object.fromEntries([]),
    // DOM API checks for frequently-used APIs.
    () => new URL(document.location.href),
    // URL constructor.
    () => new Request('https://hypothes.is'),
    // Part of the `fetch` API.
    () => Element.prototype.attachShadow,
    // CSS feature checks
    () => CSS.supports('display: grid'),
    // DOM API checks for less frequently-used APIs.
    // These are less likely to have been polyfilled by the host page.
    () => {
      document.evaluate('/html/body', document,
      // These arguments are optional in the spec but required in Edge Legacy.
      null /* namespaceResolver */, XPathResult.ANY_TYPE, null /* result */);
      return true;
    }];
    try {
      return checks.every(check => check());
    } catch (_unused) {
      return false;
    }
  }

  /**
   * Returns the extension ID which is running this script, or undefined if this
   * script is not being run by the browser extension.
   */
  function getExtensionId() {
    var _chrome;
    var window_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    return (_chrome = window_.chrome) === null || _chrome === void 0 || (_chrome = _chrome.runtime) === null || _chrome === void 0 ? void 0 : _chrome.id;
  }

  /**
   * Verifies if there's a config script in the document that was generated by a
   * specific browser extension.
   */
  function hasExtensionConfig(extensionId) {
    var document_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return !!document_.querySelector("script.js-hypothesis-config[data-extension-id=".concat(extensionId, "]"));
  }

  /**
   * Return a parsed `js-hypothesis-config` object from the document, or `{}`.
   *
   * Find all `<script class="js-hypothesis-config">` tags in the given document,
   * parse them as JSON, and return the parsed object.
   *
   * If there are no `js-hypothesis-config` tags in the document then return
   * `{}`.
   *
   * If there are multiple `js-hypothesis-config` tags in the document then merge
   * them into a single returned object (when multiple scripts contain the same
   * setting names, scripts further down in the document override those further
   * up).
   *
   * @param document - The root element to search.
   */
  function parseJsonConfig(document) {
    var config = {};
    var settingsElements = document.querySelectorAll('script.js-hypothesis-config');
    for (var i = 0; i < settingsElements.length; i++) {
      var settings = void 0;
      try {
        settings = JSON.parse(settingsElements[i].textContent || '');
      } catch (err) {
        console.warn('Could not parse settings from js-hypothesis-config tags', err);
        settings = {};
      }
      Object.assign(config, settings);
    }
    return config;
  }

  /**
   * Extract the protocol and hostname (ie. host without port) from the URL.
   *
   * We don't use the URL constructor here because IE and early versions of Edge
   * do not support it and this code runs early in the life of the app before any
   * polyfills can be loaded.
   */
  function extractOrigin(url) {
    var match = url.match(/(https?):\/\/([^:/]+)/);
    if (!match) {
      return null;
    }
    return {
      protocol: match[1],
      hostname: match[2]
    };
  }
  function currentScriptOrigin() {
    var document_ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var scriptEl = document_.currentScript;
    if (!scriptEl) {
      // Function was called outside of initial script execution.
      return null;
    }
    return extractOrigin(scriptEl.src);
  }

  /**
   * Replace references to `current_host` and `current_scheme` URL template
   * parameters with the corresponding elements of the current script URL.
   *
   * During local development, there are cases when the client/h needs to be accessed
   * from a device or VM that is not the system where the development server is
   * running. In that case, all references to `localhost` need to be replaced
   * with the IP/hostname of the dev server.
   */
  function processUrlTemplate(url) {
    var document_ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (url.indexOf('{') === -1) {
      // Not a template. This should always be the case in production.
      return url;
    }
    var origin = currentScriptOrigin(document_);
    if (origin) {
      url = url.replace('{current_host}', origin.hostname);
      url = url.replace('{current_scheme}', origin.protocol);
    } else {
      throw new Error('Could not process URL template because script origin is unknown');
    }
    return url;
  }

  // This is the main entry point for the Hypothesis client in the host page
  // and the sidebar application.
  //
  // The same boot script is used for both entry points so that the browser
  // already has it cached when it encounters the reference in the sidebar
  // application.
  //
  // @ts-ignore - This file is generated before the boot bundle is built.
  if (isBrowserSupported()) {
    var config = parseJsonConfig(document);
    var assetRoot = processUrlTemplate(config.assetRoot || "{current_scheme}://{current_host}:3001/hypothesis/1.0.0-dummy-version/");

    // Check whether this is a mini-app (indicated by the presence of a
    // `<hypothesis-app>` element) and load the appropriate part of the client.
    if (document.querySelector('hypothesis-app')) {
      var sidebarConfig = config;
      bootSidebarApp(document, {
        assetRoot,
        manifest,
        apiUrl: sidebarConfig.apiUrl,
        localApi: sidebarConfig.localApi
      });
    } else {
      // When the boot script is executed from the browser extension on a host
      // frame, a config generated by that specific extension is required
      var extensionId = getExtensionId();
      if (extensionId && !hasExtensionConfig(extensionId)) {
        throw new Error('Could not start Hypothesis extension as configuration is missing');
      }

      // nb. If new asset URLs are added here, the browser extension and
      // `hypothesis-injector.ts` need to be updated.
      var annotatorConfig = config;
      var notebookAppUrl = processUrlTemplate(annotatorConfig.notebookAppUrl || "{current_scheme}://{current_host}:5000/notebook");
      var profileAppUrl = processUrlTemplate(annotatorConfig.profileAppUrl || "{current_scheme}://{current_host}:5000/user-profile");
      var sidebarAppUrl = processUrlTemplate(annotatorConfig.sidebarAppUrl || "{current_scheme}://{current_host}:5000/app.html");
      bootHypothesisClient(document, {
        assetRoot,
        manifest,
        notebookAppUrl,
        profileAppUrl,
        sidebarAppUrl
      });
    }
  } else {
    // Show a "quiet" warning to avoid being disruptive on non-Hypothesis sites
    // that embed the client.
    //
    // In Via or when using the bookmarklet we could show something louder.
    console.warn('The Hypothesis annotation tool is not supported in this browser. See https://web.hypothes.is/help/which-browsers-are-supported-by-hypothesis/.');
  }

})();
