import { z } from 'zod';

/** Package name: either `@scope/package-name` or `package-name`. */
export const nameSchema = z
  .string()
  .min(1)
  .refine((name) => {
    if (name.startsWith('@')) {
      return name.split('/').length === 2;
    }

    return !name.includes('/');
  }, {
    message:
      'Name must be either an unscoped package name or a scoped package name like "@scope/package"',
  });

export interface ParsedPackageName {
  readonly packageName: string;
  readonly scope?: string;
}

/**
 * Parse a package name into optional scope and package name.
 * Input must already match nameSchema.
 */
export function parsePackageName(name: string): ParsedPackageName {
  if (!name.startsWith('@')) {
    return { packageName: name };
  }

  const withoutAt = name.slice(1);
  const [scope, packageName] = withoutAt.split('/');
  return { scope: scope!, packageName: packageName! };
}

/**
 * Parse a scoped package name into scope and package name.
 * Throws when given an unscoped package name.
 */
export function parseScopedPackageName(name: string): {
  readonly scope: string;
  readonly packageName: string;
} {
  const parsedName = parsePackageName(name);

  if (parsedName.scope == null) {
    throw new Error('Expected a scoped package name');
  }

  return {
    scope: parsedName.scope,
    packageName: parsedName.packageName,
  };
}
