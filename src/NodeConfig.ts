import { TextFile, cdk, YamlFile } from 'projen';
import { daysToMinutes } from './daysToMinutes';
import { PnpmWorkspaceSpecification } from './pnpm-workspace-schema';

export interface NodeConfigOptions {
  workflowNodeVersion: string;
}

export class NodeConfig {
  /**
   * @param project - The CDK construct library project; must expose `workflowNodeVersion` (e.g. AlmaCdkConstructLibrary).
   */
  constructor(project: cdk.JsiiProject & NodeConfigOptions) {
    new TextFile(project, '.nvmrc', {
      lines: [project.workflowNodeVersion],
    });

    new YamlFile(project, 'pnpm-workspace.yaml', {
      obj: {
        minimumReleaseAge: daysToMinutes(3),
        minimumReleaseAgeExclude: ['@alma-cdk/construct-library'],
        trustPolicy: 'no-downgrade',
        trustPolicyIgnoreAfter: daysToMinutes(14),
        trustPolicyExclude: ['jsii@5.9.33'],
        nodeLinker: 'hoisted', // required for bundled deps
        resolutionMode: 'highest',
        strictDepBuilds: true,
        onlyBuiltDependencies: ['unrs-resolver'], // allow unrs-resolver build scripts
        blockExoticSubdeps: true,
        overrides: {
          'ajv@^8': '^8.18.0',
        },
      } as PnpmWorkspaceSpecification,
    });
  }
}
