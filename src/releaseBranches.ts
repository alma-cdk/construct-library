import type { BranchOptions } from 'projen/lib/release';

/** Prerelease identifier and npm dist-tag used for the next major version. */
const NEXT_MAJOR_PRERELEASE = 'beta';

/**
 * Branch name reserved for the next major version, e.g. `3.x` when the current
 * major version is `2`.
 */
export function nextMajorBranchName(majorVersion: number): string {
  return `${majorVersion + 1}.x`;
}

/**
 * Default release configuration for the next major version branch: prereleases
 * published under the `beta` npm dist-tag, so that `latest` keeps pointing at
 * the current major.
 */
export function nextMajorBranchOptions(majorVersion: number): BranchOptions {
  return {
    majorVersion: majorVersion + 1,
    prerelease: NEXT_MAJOR_PRERELEASE,
    npmDistTag: NEXT_MAJOR_PRERELEASE,
  };
}

/**
 * Build the release branches for a project: the next major beta branch is
 * always defined, and any downstream `releaseBranches` are merged on top of it.
 *
 * Merging happens per branch name, so downstream projects can add branches
 * alongside the default one, and an entry keyed with the next major branch name
 * replaces the default configuration entirely.
 */
export function buildReleaseBranches(
  majorVersion: number,
  releaseBranches?: Record<string, BranchOptions>,
): Record<string, BranchOptions> {
  return {
    [nextMajorBranchName(majorVersion)]: nextMajorBranchOptions(majorVersion),
    ...releaseBranches,
  };
}
