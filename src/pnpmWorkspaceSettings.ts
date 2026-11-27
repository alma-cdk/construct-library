import type { javascript } from 'projen';
import { daysToMinutes } from './daysToMinutes';
import { PnpmWorkspaceSpecification } from './pnpm-workspace-schema';

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return value != null && typeof value === 'object' && !Array.isArray(value);
}

export function mergePnpmSettings<T>(defaults: T, overrides: unknown): T {
  if (Array.isArray(defaults) && Array.isArray(overrides)) {
    return [...defaults, ...overrides] as T;
  }

  if (isPlainObject(defaults) && isPlainObject(overrides)) {
    const mergedEntries = Object.keys(overrides).map((key) => [
      key,
      key in defaults
        ? mergePnpmSettings(defaults[key], overrides[key])
        : overrides[key],
    ]);

    return {
      ...defaults,
      ...Object.fromEntries(mergedEntries),
    } as T;
  }

  return (overrides ?? defaults) as T;
}

const DEFAULT_PNPM_SETTINGS: PnpmWorkspaceSpecification = {
  minimumReleaseAge: daysToMinutes(3),
  minimumReleaseAgeExclude: [
    '@alma-cdk/construct-library',
    'jsii@6.0.9',
    'jsii-rosetta@6.0.9',
  ],
  trustPolicy: 'no-downgrade',
  trustPolicyIgnoreAfter: daysToMinutes(14),
  trustPolicyExclude: [
    'jsii@5.9.33',
    'jsii@5.9.49',
    'jsii@6.0.7',
    'jsii@6.0.8',
    'jsii@6.0.9',
    'jsii-rosetta@6.0.9',
  ],
  nodeLinker: 'hoisted', // required for bundled deps
  resolutionMode: 'highest',
  strictDepBuilds: true,
  // Replaces `onlyBuiltDependencies`, which pnpm v11 ignores.
  allowBuilds: {
    'unrs-resolver': true, // needed by Jest
    // Jest's watcher ships prebuilt binaries; its install script only builds
    // from source when `npm_config_build_from_source` is set.
    '@parcel/watcher': false,
  },
  blockExoticSubdeps: true,
};

/**
 * Builds the `pnpm-workspace.yaml` settings to pass as
 * `pnpmOptions.workspaceYamlOptions` when constructing the project.
 *
 * Projen's own `NodePackage` declares `pnpm-workspace.yaml` (via
 * `javascript.PnpmWorkspaceYaml`) for every pnpm project, so the file cannot be
 * written by a component of ours: a second declaration of the same path fails
 * synthesis with "There is already a file under pnpm-workspace.yaml". Feeding
 * the settings in as project options is the only way to get content into the
 * file projen owns — `addOverride` is not an option either, because that file
 * is `omitEmpty` and raw overrides are dropped whenever the base object
 * resolves to nothing.
 *
 * The two schemas describe the same pnpm YAML, but are generated separately
 * (ours from pnpm's JSON schema, projen's from its own), so the enum-typed
 * fields need a cast.
 */
export function buildPnpmWorkspaceYamlOptions(
  pnpmSettings?: PnpmWorkspaceSpecification,
): javascript.PnpmWorkspaceYamlOptions {
  return mergePnpmSettings(
    DEFAULT_PNPM_SETTINGS,
    pnpmSettings,
  ) as javascript.PnpmWorkspaceYamlOptions;
}
