import { cdk, javascript } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';
import {
  DEV_ENGINES,
  JEST_VERSION,
  JSII_VERSION,
  NODEJS_MAX_VERSION,
  NODEJS_MIN_VERSION,
  NODEJS_WORKFLOW_VERSION,
  PNPM_VERSION,
  PROJEN_COMMAND,
  TYPESCRIPT_VERSION,
} from './src/constants';
import { NodeConfig } from './src/NodeConfig';
import { buildPnpmWorkspaceYamlOptions } from './src/pnpmWorkspaceSettings';

const project = new cdk.JsiiProject({
  stability: cdk.Stability.STABLE,
  majorVersion: 2,
  name: '@alma-cdk/construct-library',
  author: 'Alma Media',
  authorAddress: 'opensource@almamedia.dev',
  authorOrganization: true,
  description: 'Projen custom project to build Alma CDK construct libraries',
  repositoryUrl: 'https://github.com/alma-cdk/construct-library.git',
  defaultReleaseBranch: 'main',
  releaseEnvironment: 'production',
  projenrcTs: true,
  projenCommand: PROJEN_COMMAND,
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: PNPM_VERSION,
  devEngines: DEV_ENGINES,
  pnpmOptions: {
    workspaceYamlOptions: buildPnpmWorkspaceYamlOptions(),
  },
  npmAccess: javascript.NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  jsiiVersion: JSII_VERSION,
  typescriptVersion: TYPESCRIPT_VERSION,
  jestOptions: {
    jestVersion: JEST_VERSION,
    updateSnapshot: UpdateSnapshot.NEVER,
  },
  gitignore: [
    '.DS_Store',
    '/examples/**/cdk.context.json',
    '/examples/**/node_modules',
    '/examples/**/cdk.out',
    '/examples/**/.git',
    'TODO.md',
    '.scannerwork/',
    '**/*.drawio.bkp',
    '**/*~lock~',
  ],

  deps: ['projen'],
  peerDeps: ['constructs@^10.7.2', 'projen@^0.101.23'],
  bundledDeps: ['zod@4', 'semver@7'],
  devDeps: [
    '@types/semver@^7',
    'json-schema-to-typescript@^15',
  ],
  minNodeVersion: NODEJS_MIN_VERSION,
  workflowNodeVersion: NODEJS_WORKFLOW_VERSION,
  maxNodeVersion: NODEJS_MAX_VERSION,
});

project.addTask('format', {
  exec: 'prettier --write .',
});

new NodeConfig(project, {
  workflowNodeVersion: NODEJS_WORKFLOW_VERSION,
});

project.addTask('generate:pnpm-workspace-types', {
  description:
    'Download pnpm-workspace JSON schema and generate pnpm-workspace-schema.d.ts',
  exec: 'ts-node scripts/generate-pnpm-workspace-types.ts',
});


project.synth();