import { awscdk, cdk } from 'projen';
import { BranchOptions } from 'projen/lib/release';
import * as semver from 'semver';
import { z } from 'zod';
import { nameSchema } from './name';
import { repositoryUrlSchema } from './repositoryUrl';

/** Positive integer (≥ 1) */
const positiveInteger = z.number().int().positive();

function coerceValidSemver(value: string): semver.SemVer | null {
  const coerced = semver.coerce(value);
  return coerced != null && semver.valid(coerced) != null ? coerced : null;
}

/**
 * Node/engine version: must be valid semver or coercible to one (e.g. major-only `20`).
 * Parsed output is the original string — no normalization (e.g. `20` stays `20`, not `20.0.0`).
 */
const nodeVersionStringSchema = z.string().refine(
  (s) => coerceValidSemver(s) != null,
  { message: 'Must be a valid semver or coercible to one' },
);

function validateNodeVersionOrder(opts: {
  minNodeVersion: string;
  maxNodeVersion: string;
  workflowNodeVersion: string;
}): boolean {
  const min = coerceValidSemver(opts.minNodeVersion);
  const max = coerceValidSemver(opts.maxNodeVersion);
  const workflow = coerceValidSemver(opts.workflowNodeVersion);
  if (min == null || max == null || workflow == null) return true; // let field-level validation handle invalid semver
  return (
    semver.lte(min, max) &&
    semver.lte(min, workflow) &&
    semver.lte(workflow, max)
  );
}

/** Options for a release branch (matches projen BranchOptions) */
export const branchOptionsSchema = z.object({
  workflowName: z.string().optional(),
  environment: z.string().optional(),
  majorVersion: positiveInteger,
  minMajorVersion: positiveInteger.optional(),
  minorVersion: positiveInteger.optional(),
  prerelease: z.string().optional(),
  tagPrefix: z.string().optional(),
  npmDistTag: z.string().optional(),
});


/**
 * Needs to be manually typed due to JSII limitations.
 */
export interface AlmaCdkConstructLibraryOptions {
  readonly stability: cdk.Stability;
  readonly majorVersion: number;
  readonly author: string;
  readonly authorAddress: string;
  readonly name: string;
  readonly description: string;
  readonly keywords?: string[];
  readonly repositoryUrl: string;
  readonly releaseBranches?: Record<string, BranchOptions>;
  readonly releaseEnvironment?: string;
  readonly deps?: string[];
  readonly devDeps?: string[];
  readonly bundledDeps?: string[];
  readonly minNodeVersion?: string;
  readonly workflowNodeVersion?: string;
  readonly maxNodeVersion?: string;
  /** Appended to generated `sonar-project.properties` after the default lines (e.g. Sonar multicriteria ignores). */
  readonly sonarProjectPropertiesExtraLines?: string[];
}

const NODEJS_MIN_VERSION = '20';
const NODEJS_MAX_VERSION = '24';


/** Projen AwsCdkConstructLibrary options with validation and defaults (min/max/workflow Node versions, scoped name, etc.). */
// JSII cannot infer this schema shape cleanly, so we keep the runtime schema
// and its public options interface aligned explicitly.
export const almaCdkConstructLibraryOptionsSchema = z
  .object({
    stability: z.enum(cdk.Stability),
    majorVersion: positiveInteger,
    author: z.string(),
    authorAddress: z.email(),
    name: nameSchema,
    description: z.string(),
    keywords: z.array(z.string()).default([]),
    repositoryUrl: repositoryUrlSchema,
    releaseBranches: z.record(z.string(), branchOptionsSchema).optional(),
    releaseEnvironment: z.string(),
    deps: z.array(z.string()).optional(),
    devDeps: z.array(z.string()).optional(),
    bundledDeps: z.array(z.string()).optional(),
    minNodeVersion: nodeVersionStringSchema.default(NODEJS_MIN_VERSION),
    workflowNodeVersion: nodeVersionStringSchema.default(NODEJS_MAX_VERSION),
    maxNodeVersion: nodeVersionStringSchema.default(NODEJS_MAX_VERSION),
    sonarProjectPropertiesExtraLines: z.array(z.string()).optional(),
  })
  .refine(validateNodeVersionOrder, {
    message: 'Node versions must satisfy min <= workflow <= max',
  }) satisfies z.ZodType<Partial<awscdk.AwsCdkConstructLibraryOptions>> & z.ZodType<AlmaCdkConstructLibraryOptions>;

