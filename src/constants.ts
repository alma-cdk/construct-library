/**
 * Shared constants used both by this repository's own `.projenrc.ts` and by
 * downstream projects generated via `AlmaCdkConstructLibrary`.
 *
 * These are plain module-level constants: they are consumable from TypeScript
 * (which is what a `.projenrc.ts` is) but are intentionally not part of the
 * jsii assembly.
 */

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

/** Command used to invoke projen. */
export const PROJEN_COMMAND = 'pnpm exec projen';

/** jsii toolchain version. */
export const JSII_VERSION = '~5.9.0';

/** Jest version. */
export const JEST_VERSION = '^30';

/** TypeScript version (projen would otherwise default to a much older release). */
export const TYPESCRIPT_VERSION = '^5.9';

/** Minimum supported Node.js version. */
export const NODEJS_MIN_VERSION = '20';

/** Maximum supported Node.js version. */
export const NODEJS_MAX_VERSION = '24';

/** Node.js version used by the generated GitHub Actions workflows. */
export const NODEJS_WORKFLOW_VERSION = NODEJS_MAX_VERSION;

/** Default AWS CDK version passed to projen when `cdkVersion` is omitted from options. */
export const CDK_DEFAULT_VERSION = '2.220.0';

/** Default `constructs` version passed to projen when `constructsVersion` is omitted from options. */
export const CONSTRUCTS_DEFAULT_VERSION = '10.3.0';
