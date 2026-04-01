import { TextFile, cdk, YamlFile } from 'projen';
import { daysToMinutes } from './daysToMinutes';
import { PnpmWorkspaceSpecification } from './pnpm-workspace-schema';

export interface NodeConfigOptions {
  readonly workflowNodeVersion: string;
  readonly pnpmSettings?: PnpmWorkspaceSpecification;
}

function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
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

export class NodeConfig {
  /**
   * @param project - The CDK construct library project.
   */
  constructor(project: cdk.JsiiProject, options: NodeConfigOptions) {
    new TextFile(project, '.nvmrc', {
      lines: [options.workflowNodeVersion],
    });

    const defaultWorkspaceConfig: PnpmWorkspaceSpecification = {
      minimumReleaseAge: daysToMinutes(3),
      minimumReleaseAgeExclude: ['@alma-cdk/construct-library'],
      trustPolicy: 'no-downgrade',
      trustPolicyIgnoreAfter: daysToMinutes(14),
      trustPolicyExclude: ['jsii@5.9.33'],
      nodeLinker: 'hoisted', // required for bundled deps
      resolutionMode: 'highest',
      strictDepBuilds: true,
      onlyBuiltDependencies: [
        'unrs-resolver', // needed by Jest
      ],
      blockExoticSubdeps: true,
      overrides: {},
    };

    const workspaceConfig = mergePnpmSettings(
      defaultWorkspaceConfig,
      options.pnpmSettings,
    );

    new YamlFile(project, 'pnpm-workspace.yaml', {
      obj: workspaceConfig,
    });
  }
}
