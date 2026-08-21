import { SummaryReporter } from '@hypothesis/frontend-testing/vitest';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

import { excludeFromCoverage } from './rollup-tests.config.js';

export default defineConfig({
  test: {
    globals: true,
    reporters: [new SummaryReporter()],

    browser: {
      provider: playwright(),
      enabled: true,
      headless: true,
      screenshotFailures: false,
      instances: [{ browser: 'chromium' }],
      viewport: { width: 1024, height: 768 },
    },

    // CSS bundles, relied upon by accessibility tests (eg. for color-contrast
    // checks).
    setupFiles: ['./build/styles/annotator.css', './build/styles/sidebar.css'],
    include: [
      // Test bundle
      './build/scripts/tests.bundle.js',
    ],

    coverage: {
      // Disable coverage explicitly for focused local test runs. This avoids
      // clearing the full report directory when only a small regression suite
      // is being verified.
      enabled: process.env.VITEST_COVERAGE !== 'false',
      provider: 'istanbul',
      reportsDirectory: './coverage',
      reporter: ['json', 'html'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: excludeFromCoverage,
    },
  },
});
