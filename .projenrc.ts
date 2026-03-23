import { cdk, javascript } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';
import { NodeConfig, NodeConfigOptions } from './src/NodeConfig';

// const CDK_VERSION = '2.220.0';
const JSII_VERSION = '~5.9.0';
const JEST_VERSION = '^30';

const project = new cdk.JsiiProject({
  stability: cdk.Stability.EXPERIMENTAL,
  majorVersion: 0,
  name: '@alma-cdk/construct-library',
  author: 'Alma Media',
  authorAddress: 'opensource@almamedia.dev',
  description: 'Projen custom project to build Alma CDK construct libraries',
  repositoryUrl: 'https://github.com/alma-cdk/construct-library.git',
  defaultReleaseBranch: 'main',
  releaseEnvironment: 'production',
  projenrcTs: true,
  projenCommand: 'pnpm exec projen',
  packageManager: javascript.NodePackageManager.PNPM,
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
  peerDeps: ['constructs@^10.0.0', 'projen@^0.99.21', '@alma-cdk/construct-library'],
  bundledDeps: ['zod@4', 'semver@7'],
  devDeps: ['typescript@^5.9', '@types/semver@^7', 'json-schema-to-typescript@^15'],
});

project.addTask('format', {
  exec: 'prettier --write .',
});

new NodeConfig({ ...project, workflowNodeVersion: '24.10.0' } as cdk.JsiiProject & NodeConfigOptions); // TODO fix

project.addTask('generate:pnpm-workspace-types', {
  description:
    'Download pnpm-workspace JSON schema and generate pnpm-workspace-schema.d.ts',
  exec: 'ts-node scripts/generate-pnpm-workspace-types.ts',
});


project.synth();