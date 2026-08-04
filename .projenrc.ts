import { cdk, javascript } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';
import {
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

const project = new cdk.JsiiProject({
  stability: cdk.Stability.STABLE,
  majorVersion: 1,
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
  npmAccess: javascript.NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  jsiiVersion: JSII_VERSION,
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
  peerDeps: ['constructs@^10.0.0', 'projen@^0.99.21'],
  bundledDeps: ['zod@4', 'semver@7'],
  devDeps: [
    `typescript@${TYPESCRIPT_VERSION}`,
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