import {
  buildReleaseBranches,
  nextMajorBranchName,
  nextMajorBranchOptions,
} from '../src/releaseBranches';

describe('nextMajorBranchName', () => {
  it.each([
    [0, '1.x'],
    [1, '2.x'],
    [2, '3.x'],
    [3, '4.x'],
    [10, '11.x'],
  ])('derives the branch name for major version %i', (majorVersion, expected) => {
    expect(nextMajorBranchName(majorVersion)).toBe(expected);
  });
});

describe('nextMajorBranchOptions', () => {
  it('publishes the next major as a beta prerelease under the beta dist-tag', () => {
    expect(nextMajorBranchOptions(3)).toEqual({
      majorVersion: 4,
      prerelease: 'beta',
      npmDistTag: 'beta',
    });
  });

  it('keeps the prerelease identifier and dist-tag aligned', () => {
    const options = nextMajorBranchOptions(1);

    expect(options.prerelease).toBe(options.npmDistTag);
  });
});

describe('buildReleaseBranches', () => {
  it('defines the next major beta branch when no branches are given', () => {
    expect(buildReleaseBranches(3)).toEqual({
      '4.x': {
        majorVersion: 4,
        prerelease: 'beta',
        npmDistTag: 'beta',
      },
    });
  });

  it('treats an empty record the same as omitting it', () => {
    expect(buildReleaseBranches(2, {})).toEqual(buildReleaseBranches(2));
  });

  it('merges downstream branches alongside the default one', () => {
    const result = buildReleaseBranches(2, {
      'legacy-1.x': { majorVersion: 1, npmDistTag: 'legacy' },
      'next-major': { majorVersion: 9, prerelease: 'alpha' },
    });

    expect(result).toEqual({
      '3.x': {
        majorVersion: 3,
        prerelease: 'beta',
        npmDistTag: 'beta',
      },
      'legacy-1.x': { majorVersion: 1, npmDistTag: 'legacy' },
      'next-major': { majorVersion: 9, prerelease: 'alpha' },
    });
  });

  it('lets downstream replace the next major branch configuration', () => {
    const result = buildReleaseBranches(2, {
      '3.x': {
        majorVersion: 3,
        prerelease: 'rc',
        npmDistTag: 'next',
        workflowName: 'release-next-major',
      },
    });

    expect(result).toEqual({
      '3.x': {
        majorVersion: 3,
        prerelease: 'rc',
        npmDistTag: 'next',
        workflowName: 'release-next-major',
      },
    });
  });

  it('replaces the default entry wholesale rather than merging its fields', () => {
    const result = buildReleaseBranches(2, {
      '3.x': { majorVersion: 3 },
    });

    expect(result['3.x']).toEqual({ majorVersion: 3 });
    expect(result['3.x'].prerelease).toBeUndefined();
    expect(result['3.x'].npmDistTag).toBeUndefined();
  });

  it('overriding one branch does not drop the others', () => {
    const result = buildReleaseBranches(2, {
      '3.x': { majorVersion: 3, prerelease: 'rc', npmDistTag: 'next' },
      'maintenance': { majorVersion: 1 },
    });

    expect(Object.keys(result).sort()).toEqual(['3.x', 'maintenance']);
  });

  it('does not mutate the branches passed in', () => {
    const releaseBranches = { maintenance: { majorVersion: 1 } };
    const snapshot = JSON.parse(JSON.stringify(releaseBranches));

    buildReleaseBranches(2, releaseBranches);

    expect(releaseBranches).toEqual(snapshot);
  });

  it('returns a fresh object on every call', () => {
    const first = buildReleaseBranches(2);
    const second = buildReleaseBranches(2);

    expect(first).not.toBe(second);
    expect(first).toEqual(second);
  });

  it('keeps a downstream branch that happens to match the current major', () => {
    const result = buildReleaseBranches(2, {
      '2.x': { majorVersion: 2, npmDistTag: 'latest-2' },
    });

    expect(result).toEqual({
      '2.x': { majorVersion: 2, npmDistTag: 'latest-2' },
      '3.x': { majorVersion: 3, prerelease: 'beta', npmDistTag: 'beta' },
    });
  });
});
