#!/usr/bin/env node

/**
 * Outputs a JSON object representing the extension settings based on a settings
 * file and the package environment.
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

import gitDescribe from 'git-describe';
const { gitDescribeSync } = gitDescribe;

// Suppress (expected) EPIPE errors on STDOUT
process.stdout.on('error', err => {
  if (err.code === 'EPIPE') {
    process.exit();
  }
});

/**
 * getVersion fetches the current version from git, applying the following
 * rules:
 *
 * - If buildType is 'production' and the git state is not clean, throw an error
 * - Set the version number to X.Y.Z.W, where X.Y.Z is the last tagged release
 *   and W is the number of commits since that release.
 * - If the buildType is 'production', set the version name to "Official Build",
 *   otherwise set it to a string of the form "gXXXXXXX[.dirty]" to reflect the
 *   exact commit and state of the repository.
 */
function getVersion(buildType) {
  let gitInfo;
  try {
    gitInfo = gitDescribeSync();
  } catch {
    // Not a git repo (e.g. source downloaded as a zip): fall back to the
    // package.json version so the manifest stays valid for browsers.
    const pkg = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'package.json')),
    );
    return { version: `${pkg.version}.0`, versionName: 'source-zip' };
  }

  if (!gitInfo.semver) {
    // Git repo without any tag: git-describe returns a null semver, which
    // would produce an invalid manifest version like "null.null".
    const pkg = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'package.json')),
    );
    return {
      version: `${pkg.version}.${gitInfo.distance}`,
      versionName: `${gitInfo.hash}${gitInfo.dirty ? '.dirty' : ''}`,
    };
  }

  if (buildType === 'production' && gitInfo.dirty) {
    throw new Error('cannot create production build with dirty git state!');
  }

  const version = `${gitInfo.semver}.${gitInfo.distance}`;
  let versionName = 'Official Build';

  if (buildType !== 'production') {
    versionName = `${gitInfo.hash}${gitInfo.dirty ? '.dirty' : ''}`;
  }

  return { version, versionName };
}

if (process.argv.length !== 3) {
  console.error('Usage: %s <settings.json>', path.basename(process.argv[1]));
  process.exit(1);
}

const settings = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), process.argv[2])),
);
const settingsOut = {
  ...settings,
  ...getVersion(settings.buildType),
};

if (settingsOut.sentryPublicDSN) {
  settingsOut.raven = {
    dsn: settingsOut.sentryPublicDSN,
    release: settingsOut.version,
  };
}

console.log(JSON.stringify(settingsOut));
