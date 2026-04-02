import {
  nameSchema,
  parsePackageName,
  parseScopedPackageName,
} from '../../src/schemas/name';

describe('nameSchema', () => {
  it('accepts valid scoped package names', () => {
    expect(nameSchema.parse('@scope/package')).toBe('@scope/package');
    expect(nameSchema.parse('@alma-cdk/project')).toBe('@alma-cdk/project');
    expect(nameSchema.parse('@foo/bar-baz')).toBe('@foo/bar-baz');
  });

  it('accepts valid unscoped package names', () => {
    expect(nameSchema.parse('package')).toBe('package');
    expect(nameSchema.parse('my-package')).toBe('my-package');
  });

  it('rejects empty string', () => {
    expect(() => nameSchema.parse('')).toThrow();
  });

  it('rejects slash-separated names without @', () => {
    expect(() => nameSchema.parse('scope/package')).toThrow();
  });

  it('rejects names without exactly one slash', () => {
    expect(() => nameSchema.parse('@scope')).toThrow();
    expect(() => nameSchema.parse('@scope/pkg/sub')).toThrow();
  });

  it('rejects scoped names with no slash', () => {
    expect(() => nameSchema.parse('@scopepackage')).toThrow();
  });
});

describe('parsePackageName', () => {
  it('parses unscoped package names', () => {
    expect(parsePackageName('package')).toEqual({
      packageName: 'package',
    });
  });

  it('parses scoped package names', () => {
    expect(parsePackageName('@scope/package')).toEqual({
      scope: 'scope',
      packageName: 'package',
    });
    expect(parsePackageName('@alma-cdk/project')).toEqual({
      scope: 'alma-cdk',
      packageName: 'project',
    });
  });
});

describe('parseScopedPackageName', () => {
  it('parses scope and package name', () => {
    expect(parseScopedPackageName('@scope/package')).toEqual({
      scope: 'scope',
      packageName: 'package',
    });
    expect(parseScopedPackageName('@alma-cdk/project')).toEqual({
      scope: 'alma-cdk',
      packageName: 'project',
    });
  });

  it('rejects unscoped package names', () => {
    expect(() => parseScopedPackageName('project')).toThrow(
      'Expected a scoped package name',
    );
  });
});
