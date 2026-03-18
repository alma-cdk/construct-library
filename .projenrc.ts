import { cdk, javascript } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';

const JSII_VERSION = "~5.9.0";
const JEST_VERSION = "^30";

const project = new cdk.JsiiProject({
  name: "@alma-cdk/construct-library",
  author: "Alma Media",
  authorAddress: "opensource@almamedia.dev",
  description: "Projen custom project to build Alma CDK construct libraries",
  repositoryUrl: 'https://github.com/alma-cdk/construct-library.git',
  defaultReleaseBranch: 'main',
  releaseEnvironment: "production",
  projenrcTs: true,
  projenCommand: "pnpm exec projen",
  packageManager: javascript.NodePackageManager.PNPM,
  npmAccess: javascript.NpmAccess.PUBLIC,
  npmTrustedPublishing: true,
  jsiiVersion: JSII_VERSION,
  jestOptions: {
    jestVersion: JEST_VERSION,
    updateSnapshot: UpdateSnapshot.NEVER,
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addDevDeps("typescript@^5.9"); // Defaults to very old typescript@4.9
project.addDevDeps("@types/semver@^7");
project.addDevDeps("json-schema-to-typescript@^15");

project.addBundledDeps("zod@4");
project.addBundledDeps("semver@7");

project.addTask("format", {
  exec: "prettier --write .",
});

// project.addTask("generate:pnpm-workspace-types", {
//   description:
//     "Download pnpm-workspace JSON schema and generate pnpm-workspace-schema.d.ts",
//   exec: "ts-node scripts/generate-pnpm-workspace-types.ts",
// });


project.synth();