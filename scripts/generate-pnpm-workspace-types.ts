/**
 * Fetches the pnpm-workspace JSON schema from SchemaStore and generates a .d.ts file.
 * Run via: pnpm exec ts-node scripts/generate-pnpm-workspace-types.ts
 */
import { writeFileSync } from 'fs';
import { compile } from 'json-schema-to-typescript';
import { join } from 'path';

const SCHEMA_URL = 'https://json.schemastore.org/pnpm-workspace.json';
const OUTPUT_FILE = 'src/pnpm-workspace-schema.d.ts';

function addReadonlyToFields(typeDefinitions: string): string {
  return typeDefinitions
    .split('\n')
    .map((line) =>
      line
        .replace(/^(\s+)(?!readonly\b)(\[[^\]]+\]:)/, '$1readonly $2')
        .replace(
          /^(\s+)(?!readonly\b)((?:["'][^"']+["']|[A-Za-z_$][\w$]*)\??:)/,
          '$1readonly $2',
        ),
    )
    .join('\n');
}

function makeJsiiCompatible(typeDefinitions: string): string {
  return typeDefinitions
    .replace(
      `  readonly catalogs?: {
    readonly [k: string]: Catalog;
  } | null;`,
      '  readonly catalogs?: Record<string, Catalog>;',
    )
    .replace('  readonly overrides?: {};', '  readonly overrides?: Record<string, string>;')
    .replace(
      `  readonly packageExtensions?: {
    /**
     * This interface was referenced by \`undefined\`'s JSON-Schema definition
     * via the \`patternProperty\` "^.+$".
     */
    readonly [k: string]: {
      readonly dependencies?: Dependency1;
      readonly optionalDependencies?: OptionalDependency;
      readonly peerDependencies?: PeerDependency;
      readonly peerDependenciesMeta?: PeerDependencyMeta;
    };
  };`,
      '  readonly packageExtensions?: Record<string, PackageExtension>;',
    )
    .replace(
      `  readonly peerDependencyRules?: {
    /**
     * pnpm will not print warnings about missing peer dependencies from this list.
     */
    readonly ignoreMissing?: string[];
    /**
     * Unmet peer dependency warnings will not be printed for peer dependencies of the specified range.
     */
    readonly allowedVersions?: {};
    /**
     * Any peer dependency matching the pattern will be resolved from any version, regardless of the range specified in "peerDependencies".
     */
    readonly allowAny?: string[];
  };`,
      '  readonly peerDependencyRules?: PeerDependencyRules;',
    )
    .replace(
      `  readonly allowedDeprecatedVersions?: {
    readonly [k: string]: string;
  };`,
      '  readonly allowedDeprecatedVersions?: Record<string, string>;',
    )
    .replace(
      `  readonly patchedDependencies?: {
    readonly [k: string]: string;
  };`,
      '  readonly patchedDependencies?: Record<string, string>;',
    )
    .replace(
      `  readonly updateConfig?: {
    /**
     * A list of packages that should be ignored when running "pnpm outdated" or "pnpm update --latest".
     */
    readonly ignoreDependencies?: string[];
  };`,
      '  readonly updateConfig?: UpdateConfig;',
    )
    .replace(
      '  readonly configDependencies?: {};',
      '  readonly configDependencies?: Record<string, string>;',
    )
    .replace(
      `  readonly auditConfig?: {
    /**
     * A list of CVE IDs that will be ignored by "pnpm audit".
     */
    readonly ignoreCves?: string[];
    /**
     * A list of GHSA Codes that will be ignored by "pnpm audit".
     */
    readonly ignoreGhsas?: string[];
  };`,
      '  readonly auditConfig?: AuditConfig;',
    )
    .replace(
      `  readonly supportedArchitectures?: {
    readonly os?: string[];
    readonly cpu?: string[];
    readonly libc?: string[];
  };`,
      '  readonly supportedArchitectures?: SupportedArchitectures;',
    )
    .replace(
      `  readonly executionEnv?: {
    /**
     * Specifies which exact Node.js version should be used for the project's runtime.
     */
    readonly nodeVersion?: string;
  };`,
      '  readonly executionEnv?: ExecutionEnv;',
    )
    .replace(
      '  readonly mergeGitBranchLockfilesBranchPattern?: unknown[] | null;',
      '  readonly mergeGitBranchLockfilesBranchPattern?: string[];',
    )
    .replace(
      '  readonly allowBuilds?: {};',
      '  readonly allowBuilds?: Record<string, boolean>;',
    )
    .replace(
      `export type Dependency = {
  readonly [k: string]: string;
} | null;`,
      'export type Dependency = Record<string, string>;',
    )
    .replace(
      `/**
 * Define dependency version ranges as reusable constants,
 * for later reference in package.json files.
 * This (singular) field creates a catalog named default.
 *
 */
export interface Catalog {
  readonly [k: string]: string;
}
/**
 * Dependencies are specified with a simple hash of package name to version range.
 * The version range is a string which has one or more space-separated descriptors.
 * Dependencies can also be identified with a tarball or git URL.
 *
 */
export interface Dependency1 {
  readonly [k: string]: string;
}
/**
 * Specifies dependencies that are optional for your project. These dependencies are attempted to be installed during the npm install process, but if they fail to install, the installation process will not fail.
 */
export interface OptionalDependency {
  readonly [k: string]: string;
}
/**
 * Specifies dependencies that are required by the package but are expected to be provided by the consumer of the package.
 */
export interface PeerDependency {
  readonly [k: string]: string;
}
/**
 * When a user installs your package, warnings are emitted if packages specified in "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to provide more information on how your peer dependencies are utilized. Most commonly, it allows peer dependencies to be marked as optional. Metadata for this field is specified with a simple hash of the package name to a metadata object.
 */
export interface PeerDependencyMeta {
  readonly [k: string]: {
    /**
     * Specifies that this peer dependency is optional and should not be installed automatically.
     */
    readonly optional?: boolean;
    readonly [k: string]: unknown;
  };
}
`,
      `/**
 * Define dependency version ranges as reusable constants,
 * for later reference in package.json files.
 * This (singular) field creates a catalog named default.
 *
 */
export type Catalog = Record<string, string>;
/**
 * Dependencies are specified with a simple hash of package name to version range.
 * The version range is a string which has one or more space-separated descriptors.
 * Dependencies can also be identified with a tarball or git URL.
 *
 */
export type Dependency1 = Record<string, string>;
/**
 * Specifies dependencies that are optional for your project. These dependencies are attempted to be installed during the npm install process, but if they fail to install, the installation process will not fail.
 */
export type OptionalDependency = Record<string, string>;
/**
 * Specifies dependencies that are required by the package but are expected to be provided by the consumer of the package.
 */
export type PeerDependency = Record<string, string>;
export interface PackageExtension {
  readonly dependencies?: Dependency1;
  readonly optionalDependencies?: OptionalDependency;
  readonly peerDependencies?: PeerDependency;
  readonly peerDependenciesMeta?: PeerDependencyMeta;
}
export interface PeerDependencyRules {
  readonly ignoreMissing?: string[];
  readonly allowedVersions?: Record<string, string>;
  readonly allowAny?: string[];
}
export interface UpdateConfig {
  readonly ignoreDependencies?: string[];
}
export interface AuditConfig {
  readonly ignoreCves?: string[];
  readonly ignoreGhsas?: string[];
}
export interface SupportedArchitectures {
  readonly os?: string[];
  readonly cpu?: string[];
  readonly libc?: string[];
}
export interface ExecutionEnv {
  readonly nodeVersion?: string;
}
export interface PeerDependencyMetaValue {
  readonly optional?: boolean;
}
/**
 * When a user installs your package, warnings are emitted if packages specified in "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to provide more information on how your peer dependencies are utilized. Most commonly, it allows peer dependencies to be marked as optional. Metadata for this field is specified with a simple hash of the package name to a metadata object.
 */
export type PeerDependencyMeta = Record<string, PeerDependencyMetaValue>;
`,
    );
}

async function main(): Promise<void> {
  const res = await fetch(SCHEMA_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch schema: ${res.status} ${res.statusText}`);
  }
  const schema = (await res.json()) as object;
  const ts = await compile(schema, 'PnpmWorkspaceSpecification', {
    bannerComment: `/**
 * TypeScript definitions for pnpm-workspace.yaml (JSON Schema from ${SCHEMA_URL})
 * DO NOT EDIT BY HAND. Run \`pnpm run generate:pnpm-workspace-types\` to regenerate.
 */`,
    additionalProperties: false,
  });
  const readonlyTs = addReadonlyToFields(ts);
  const jsiiCompatibleTs = makeJsiiCompatible(readonlyTs);
  const outPath = join(process.cwd(), OUTPUT_FILE);
  writeFileSync(outPath, jsiiCompatibleTs, 'utf8');
  console.log(`Wrote ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
