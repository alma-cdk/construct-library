import { cdk } from 'projen';
import {
  almaCdkConstructLibraryOptionsSchema,
  branchOptionsSchema,
} from '../../src/schemas/almaCdkConstructLibraryOptions';

const validBaseOptions = {
  stability: cdk.Stability.STABLE,
  majorVersion: 1,
  author: 'Alma Media',
  authorAddress: 'opensource@almamedia.dev',
  name: '@alma-cdk/project',
  description: 'Test project',
  repositoryUrl: 'https://github.com/alma-cdk/project.git',
  releaseEnvironment: 'production',
};

describe('branchOptionsSchema', () => {
  it('accepts valid branch options', () => {
    expect(
      branchOptionsSchema.parse({
        majorVersion: 1,
      }),
    ).toEqual({ majorVersion: 1 });

    expect(
      branchOptionsSchema.parse({
        workflowName: 'release',
        environment: 'production',
        majorVersion: 2,
        tagPrefix: 'v',
      }),
    ).toEqual({
      workflowName: 'release',
      environment: 'production',
      majorVersion: 2,
      tagPrefix: 'v',
    });
  });

  it('rejects non-positive majorVersion', () => {
    expect(() => branchOptionsSchema.parse({ majorVersion: 0 })).toThrow();
    expect(() => branchOptionsSchema.parse({ majorVersion: -1 })).toThrow();
  });

  it('rejects non-integer majorVersion', () => {
    expect(() => branchOptionsSchema.parse({ majorVersion: 1.5 })).toThrow();
  });

  it('rejects invalid optional version fields when provided', () => {
    expect(() =>
      branchOptionsSchema.parse({ majorVersion: 1, minMajorVersion: 0 }),
    ).toThrow();
    expect(() =>
      branchOptionsSchema.parse({ majorVersion: 1, minorVersion: 1.5 }),
    ).toThrow();
  });
});

describe('almaCdkConstructLibraryOptionsSchema', () => {
  it('accepts valid full options', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse(validBaseOptions);
    expect(result.name).toBe('@alma-cdk/project');
    expect(result.repositoryUrl).toBe(
      'https://github.com/alma-cdk/project.git',
    );
    expect(result.minNodeVersion).toBe('20');
    expect(result.workflowNodeVersion).toBe('24');
    expect(result.maxNodeVersion).toBe('24');
  });

  it('applies default Node versions when omitted', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse(validBaseOptions);
    expect(result.keywords).toEqual([]);
    expect(result.minNodeVersion).toBe('20');
    expect(result.workflowNodeVersion).toBe('24');
    expect(result.maxNodeVersion).toBe('24');
  });

  it('accepts custom Node versions when min <= workflow <= max', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse({
      ...validBaseOptions,
      minNodeVersion: '18',
      workflowNodeVersion: '20',
      maxNodeVersion: '22',
    });
    expect(result.minNodeVersion).toBe('18');
    expect(result.workflowNodeVersion).toBe('20');
    expect(result.maxNodeVersion).toBe('22');
  });

  it('preserves full semver strings without normalizing', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse({
      ...validBaseOptions,
      minNodeVersion: '20.0.0',
      workflowNodeVersion: '24.14.0',
      maxNodeVersion: '24.14.0',
    });
    expect(result.minNodeVersion).toBe('20.0.0');
    expect(result.workflowNodeVersion).toBe('24.14.0');
    expect(result.maxNodeVersion).toBe('24.14.0');
  });

  it('rejects when min > max', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        minNodeVersion: '22',
        maxNodeVersion: '20',
      }),
    ).toThrow('Node versions must satisfy min <= workflow <= max');
  });

  it('rejects when workflow < min', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        minNodeVersion: '20',
        workflowNodeVersion: '18',
        maxNodeVersion: '24',
      }),
    ).toThrow('Node versions must satisfy min <= workflow <= max');
  });

  it('rejects when workflow > max', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        minNodeVersion: '18',
        workflowNodeVersion: '24',
        maxNodeVersion: '20',
      }),
    ).toThrow('Node versions must satisfy min <= workflow <= max');
  });

  it('rejects invalid name', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        name: 'invalid-name',
      }),
    ).toThrow();
  });

  it('rejects non-positive majorVersion', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        majorVersion: 0,
      }),
    ).toThrow();
  });

  it('rejects invalid stability', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        stability: 'invalid',
      }),
    ).toThrow();
  });

  it('rejects invalid repositoryUrl', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        repositoryUrl: 'https://gitlab.com/org/repo.git',
      }),
    ).toThrow();
  });

  it('rejects invalid authorAddress (non-email)', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        authorAddress: 'not-an-email',
      }),
    ).toThrow();
  });

  it('rejects invalid semver for Node versions', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        minNodeVersion: 'not-semver',
      }),
    ).toThrow();
  });

  it('accepts valid releaseBranches', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse({
      ...validBaseOptions,
      releaseBranches: {
        main: { majorVersion: 1 },
        beta: { majorVersion: 2, prerelease: 'beta' },
      },
    });
    expect(result.releaseBranches).toEqual({
      main: { majorVersion: 1 },
      beta: { majorVersion: 2, prerelease: 'beta' },
    });
  });

  it('rejects invalid nested releaseBranches values', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        releaseBranches: {
          main: { majorVersion: 0 },
        },
      }),
    ).toThrow();
  });

  it('preserves optional dependency arrays when provided', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse({
      ...validBaseOptions,
      deps: ['constructs'],
      devDeps: ['typescript'],
      bundledDeps: ['zod'],
    });

    expect(result.deps).toEqual(['constructs']);
    expect(result.devDeps).toEqual(['typescript']);
    expect(result.bundledDeps).toEqual(['zod']);
  });

  it('preserves pnpmSettings when provided', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse({
      ...validBaseOptions,
      pnpmSettings: {
        onlyBuiltDependencies: ['unrs-resolver'],
        linkWorkspacePackages: 'deep',
        verifyDepsBeforeRun: false,
        overrides: {
          'ajv@^8': '^8.18.0',
        },
        packageExtensions: {
          react: {
            peerDependencies: {
              '@types/react': '^19',
            },
          },
        },
      },
    });

    expect(result.pnpmSettings).toEqual({
      onlyBuiltDependencies: ['unrs-resolver'],
      linkWorkspacePackages: 'deep',
      verifyDepsBeforeRun: false,
      overrides: {
        'ajv@^8': '^8.18.0',
      },
      packageExtensions: {
        react: {
          peerDependencies: {
            '@types/react': '^19',
          },
        },
      },
    });
  });

  it('rejects invalid pnpmSettings values', () => {
    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        pnpmSettings: {
          trustPolicy: 'invalid',
        },
      }),
    ).toThrow();

    expect(() =>
      almaCdkConstructLibraryOptionsSchema.parse({
        ...validBaseOptions,
        pnpmSettings: {
          imaginarySetting: true,
        },
      }),
    ).toThrow();
  });

  it('preserves sonarProjectPropertiesExtraLines when provided', () => {
    const result = almaCdkConstructLibraryOptionsSchema.parse({
      ...validBaseOptions,
      sonarProjectPropertiesExtraLines: [
        'sonar.issue.ignore.multicriteria=e1',
      ],
    });

    expect(result.sonarProjectPropertiesExtraLines).toEqual([
      'sonar.issue.ignore.multicriteria=e1',
    ]);
  });
});
