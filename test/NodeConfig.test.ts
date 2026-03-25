import { mergePnpmSettings } from '../src/NodeConfig';

describe('mergePnpmSettings', () => {
  it('returns defaults when overrides are undefined', () => {
    expect(
      mergePnpmSettings(
        { minimumReleaseAge: 4320, strictDepBuilds: true },
        undefined,
      ),
    ).toEqual({
      minimumReleaseAge: 4320,
      strictDepBuilds: true,
    });
  });

  it('overrides scalar values', () => {
    expect(
      mergePnpmSettings(
        { minimumReleaseAge: 4320, trustPolicy: 'no-downgrade' },
        { minimumReleaseAge: 60 },
      ),
    ).toEqual({
      minimumReleaseAge: 60,
      trustPolicy: 'no-downgrade',
    });
  });

  it('appends array values', () => {
    expect(
      mergePnpmSettings(
        { onlyBuiltDependencies: ['unrs-resolver'] },
        { onlyBuiltDependencies: ['esbuild'] },
      ),
    ).toEqual({
      onlyBuiltDependencies: ['unrs-resolver', 'esbuild'],
    });
  });

  it('merges nested objects recursively', () => {
    expect(
      mergePnpmSettings(
        {
          overrides: {
            'ajv@^8': '^8.18.0',
          },
          peerDependencyRules: {
            ignoreMissing: ['react'],
          },
        },
        {
          overrides: {
            '@types/node': '^24',
          },
          peerDependencyRules: {
            allowedVersions: {
              react: '19',
            },
          },
        },
      ),
    ).toEqual({
      overrides: {
        'ajv@^8': '^8.18.0',
        '@types/node': '^24',
      },
      peerDependencyRules: {
        ignoreMissing: ['react'],
        allowedVersions: {
          react: '19',
        },
      },
    });
  });

  it('keeps override-only keys that do not exist in defaults', () => {
    expect(
      mergePnpmSettings(
        { minimumReleaseAge: 4320 },
        { neverBuiltDependencies: ['sharp'] },
      ),
    ).toEqual({
      minimumReleaseAge: 4320,
      neverBuiltDependencies: ['sharp'],
    });
  });
});
