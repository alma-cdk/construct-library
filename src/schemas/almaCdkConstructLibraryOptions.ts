import { awscdk, cdk } from 'projen';
import { BranchOptions } from 'projen/lib/release';
import * as semver from 'semver';
import { z } from 'zod';
import { nameSchema } from './name';
import { repositoryUrlSchema } from './repositoryUrl';

/** Positive integer (≥ 1) */
const positiveInteger = z.number().int().positive();

/**
 * Node/engine version: must coerce to valid semver. Output is `semver.coerce(...).version`
 * so values are always valid for Projen (e.g. bare `20` → `20.0.0`).
 */
const nodeVersionStringSchema = z
  .string()
  .refine(
    (s) => {
      const coerced = semver.coerce(s);
      return coerced != null && semver.valid(coerced) != null;
    },
    { message: 'Must be a valid semver or coercible to one' },
  )
  .transform((s) => semver.coerce(s)!.version);

function validateNodeVersionOrder(opts: {
  minNodeVersion: string;
  maxNodeVersion: string;
  workflowNodeVersion: string;
}): boolean {
  const min = semver.coerce(opts.minNodeVersion);
  const max = semver.coerce(opts.maxNodeVersion);
  const workflow = semver.coerce(opts.workflowNodeVersion);
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


/** Projen AwsCdkConstructLibrary options with validation and defaults (min/max/workflow Node versions, scoped name, etc.). */
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
    minNodeVersion: nodeVersionStringSchema.default('20.0.0'),
    workflowNodeVersion: nodeVersionStringSchema.default('24.14.0'),
    maxNodeVersion: nodeVersionStringSchema.default('24.14.0'),
    sonarProjectPropertiesExtraLines: z.array(z.string()).optional(),
  })
  .refine(validateNodeVersionOrder, {
    message: 'Node versions must satisfy min <= workflow <= max',
  }) satisfies z.ZodType<Partial<awscdk.AwsCdkConstructLibraryOptions>> & z.ZodType<AlmaCdkConstructLibraryOptions>;

