#!/usr/bin/env node

/**
 * Outputs a JSON object representing the appropriate template context for the
 * `app.html` file.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

function appSettings(settings) {
  const result = {};
  result.apiUrl = settings.apiUrl;
  result.assetRoot = '/client/';
  result.authDomain = settings.authDomain;
  result.release = settings.version;
  result.appType = settings.appType || '';

  if (settings.sentryPublicDSN) {
    result.raven = {
      dsn: settings.sentryPublicDSN,
      release: settings.version,
    };
  }

  if (settings.oauthClientId) {
    result.oauthClientId = settings.oauthClientId;
  }

  if (settings.noAuth) {
    result.noAuth = settings.noAuth;
  }

  if (settings.localApi) {
    result.localApi = settings.localApi;
  }

  // Official Hypothes.is endpoints, baked into local-mode builds so users can
  // switch to the official service at runtime (see options page).
  if (settings.officialApiUrl) {
    result.officialApiUrl = settings.officialApiUrl;
  }
  if (settings.officialAuthDomain) {
    result.officialAuthDomain = settings.officialAuthDomain;
  }
  if (settings.officialOauthClientId) {
    result.officialOauthClientId = settings.officialOauthClientId;
  }

  return result;
}

if (process.argv.length !== 3) {
  console.error('Usage: %s <settings.json>', path.basename(process.argv[1]));
  process.exit(1);
}

const settings = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), process.argv[2])),
);

console.log(
  JSON.stringify({
    settings: JSON.stringify(appSettings(settings)),
  }),
);
