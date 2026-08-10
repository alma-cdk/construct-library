/**
 * Shared constants used both by this repository's own `.projenrc.ts` and by
 * downstream projects generated via `AlmaCdkConstructLibrary`.
 *
 * These are plain module-level constants: they are consumable from TypeScript
 * (which is what a `.projenrc.ts` is) but are intentionally not part of the
 * jsii assembly.
 */

import type { javascript } from 'projen';

/**
 * pnpm version used by the generated GitHub Actions workflows (`pnpm/action-setup`)
 * and pinned locally through the package.json `packageManager` field.
 */
export const PNPM_VERSION = '11.19.0';

/**
 * Value written to the package.json `packageManager` field, which makes pnpm
 * self-switch to `PNPM_VERSION` in the project directory.
 */
export const PACKAGE_MANAGER = `pnpm@${PNPM_VERSION}`;

/**
 * Value written to the package.json `devEngines` field.
 *
 * Projen auto-populates `devEngines.packageManager` from the configured package
 * manager but hardcodes `onFail: "ignore"`, so a mismatched pnpm version passes
 * silently. Passing this object as the `devEngines` option replaces that
 * auto-populated entry (projen merges the option over its own default), so a
 * pnpm version other than `PNPM_VERSION` is surfaced as a warning rather than
 * going unnoticed — without hard-failing the install.
 */
export const DEV_ENGINES = {
  packageManager: {
    name: 'pnpm',
    version: PNPM_VERSION,
    onFail: 'warn',
  },
} as const satisfies javascript.DevEngines;

/** Command used to invoke projen. */
export const PROJEN_COMMAND = 'pnpm exec projen';

/** jsii toolchain version. */
export const JSII_VERSION = '~6.0.7';

/** Jest version. */
export const JEST_VERSION = '^30';

/** TypeScript version (projen would otherwise default to a much older release). */
export const TYPESCRIPT_VERSION = '^6.0.2';

/** Minimum supported Node.js version. */
export const NODEJS_MIN_VERSION = '22';

/** Maximum supported Node.js version. */
export const NODEJS_MAX_VERSION = '26';

/**
 * Node.js version used by the generated GitHub Actions workflows.
 *
 * Tracked separately from `NODEJS_MAX_VERSION` so that raising the supported
 * ceiling does not move CI onto a release before we want to build on it.
 */
export const NODEJS_WORKFLOW_VERSION = '24';

/** Default AWS CDK version passed to projen when `cdkVersion` is omitted from options. */
export const CDK_DEFAULT_VERSION = '2.260.0';

/** Default `constructs` version passed to projen when `constructsVersion` is omitted from options. */
export const CONSTRUCTS_DEFAULT_VERSION = '10.7.2';
