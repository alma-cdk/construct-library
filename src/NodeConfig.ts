import { TextFile, cdk } from 'projen';
import { PACKAGE_MANAGER } from './constants';

export interface NodeConfigOptions {
  readonly workflowNodeVersion: string;
}

export class NodeConfig {
  /**
   * @param project - The CDK construct library project.
   */
  constructor(project: cdk.JsiiProject, options: NodeConfigOptions) {
    new TextFile(project, '.nvmrc', {
      lines: [options.workflowNodeVersion],
    });

    // pnpm v11 always self-downloads & runs this exact version within the
    // project directory, keeping local runs aligned with the CI workflows.
    project.package.addField('packageManager', PACKAGE_MANAGER);

    // A pnpm that does not self-switch (v9, or v10 with the feature disabled)
    // would otherwise silently install with its own version. Kept in .npmrc
    // rather than pnpm-workspace.yaml, which v9 does not read settings from:
    // v11 ignores this setting in either location.
    project.npmrc.addConfig('package-manager-strict-version', 'true');

    // `pnpm-workspace.yaml` is not written here: projen's `NodePackage` already
    // declares that file for every pnpm project. See `pnpmWorkspaceSettings.ts`.
  }
}
