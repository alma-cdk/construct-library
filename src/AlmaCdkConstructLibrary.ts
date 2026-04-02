import { awscdk, javascript } from 'projen';
import { UpdateSnapshot } from 'projen/lib/javascript';
import { z } from 'zod';
import { NodeConfig } from './NodeConfig';
import {
  almaCdkConstructLibraryOptionsSchema,
  type AlmaCdkConstructLibraryOptions,
} from './schemas/almaCdkConstructLibraryOptions';
import { parsePackageName } from './schemas/name';
import { SonarCloudReportWorkflow } from './SonarCloudReportWorkflow';
import { uniqueKeywordsCaseInsensitive } from './uniqueKeywordsCaseInsensitive';

export type { AlmaCdkConstructLibraryOptions } from './schemas/almaCdkConstructLibraryOptions';

const CDK_VERSION = '2.220.0';
const CONSTRUCTS_VERSION = '10.3.0';
const JSII_VERSION = '~5.9.0';
const JEST_VERSION = '^30';
const DEFAULT_KEYWORDS = ['cdk', 'aws-cdk', 'awscdk', 'aws'] as const;
const PRETTIER_IGNORE_PATTERNS = [
  '.github/**/*',
  '.projen/**/*',
  '.vscode/**/*',
  'coverage/**/*',
  'dist/**/*',
  '/*.*',
  '!.projenrc.ts',
] as const;
const DEFAULT_GITIGNORE_PATTERNS = [
  '.DS_Store',
  '/examples/**/cdk.context.json',
  '/examples/**/node_modules',
  '/examples/**/cdk.out',
  '/examples/**/.git',
  'TODO.md',
  '.scannerwork/',
  '**/*.drawio.bkp',
  '**/*.afdesign~lock~',
] as const;

type ValidatedOptions = z.infer<typeof almaCdkConstructLibraryOptionsSchema>;

function buildKeywords(keywords: readonly string[]): string[] {
  return uniqueKeywordsCaseInsensitive([...DEFAULT_KEYWORDS, ...keywords]);
}

function toPythonModuleSegment(value: string): string {
  return value.replace(/-/g, '_');
}

function buildPublishToPypiOptions(name: string) {
  const { scope, packageName } = parsePackageName(name);
  const packagePath = scope == null ? [packageName] : [scope, packageName];

  return {
    distName: packagePath.join('.'),
    module: packagePath.map(toPythonModuleSegment).join('.'),
    trustedPublishing: true,
  };
}

function buildPublishToGoOptions(repositoryUrl: string) {
  return {
    moduleName: `${repositoryUrl.replace('https://', '').replace('.git', '')}-go`,
  };
}

function buildAwsCdkConstructLibraryOptions(
  validatedOptions: ValidatedOptions,
): awscdk.AwsCdkConstructLibraryOptions {
  const { golang, python, ...awsCdkConstructLibraryOptions } = validatedOptions;

  return {
    ...awsCdkConstructLibraryOptions,
    // Package manager & projen
    projenCommand: 'pnpm exec projen',
    authorOrganization: true,
    defaultReleaseBranch: 'main',
    packageManager: javascript.NodePackageManager.PNPM,
    npmAccess: javascript.NpmAccess.PUBLIC,
    npmTrustedPublishing: true,
    projenrcTs: true,
    jsiiVersion: JSII_VERSION,
    keywords: buildKeywords(validatedOptions.keywords),
    jestOptions: {
      jestVersion: JEST_VERSION,
      updateSnapshot: UpdateSnapshot.NEVER,
    },
    // Code quality (Prettier)
    prettier: true,
    prettierOptions: {
      ignoreFileOptions: {
        ignorePatterns: [...PRETTIER_IGNORE_PATTERNS],
      },
    },
    // Publishing
    publishToPypi: python
      ? buildPublishToPypiOptions(validatedOptions.name)
      : undefined,
    publishToGo: golang
      ? buildPublishToGoOptions(validatedOptions.repositoryUrl)
      : undefined,
    // CDK
    cdkVersion: CDK_VERSION,
    constructsVersion: CONSTRUCTS_VERSION,
    // Git & dev
    gitignore: [...DEFAULT_GITIGNORE_PATTERNS],
    tsconfigDev: {
      include: ['AlmaCdkConstructLibrary/**/*.ts'],
    },
  };
}

export class AlmaCdkConstructLibrary extends awscdk.AwsCdkConstructLibrary {
  public readonly workflowNodeVersion: string;

  constructor(options: AlmaCdkConstructLibraryOptions) {
    const validatedOptions =
      almaCdkConstructLibraryOptionsSchema.parse(options);
    super(buildAwsCdkConstructLibraryOptions(validatedOptions));

    this.workflowNodeVersion = validatedOptions.workflowNodeVersion;

    this.addDevDeps('typescript@^5.9'); // Defaults to very old typescript@4.9

    this.addTask('format', {
      exec: 'prettier --write .',
    });

    new SonarCloudReportWorkflow(this, {
      repositoryUrl: validatedOptions.repositoryUrl,
      sonarProjectPropertiesExtraLines:
        validatedOptions.sonarProjectPropertiesExtraLines,
    });

    new NodeConfig(this, {
      workflowNodeVersion: validatedOptions.workflowNodeVersion,
      pnpmSettings: validatedOptions.pnpmSettings,
    });
  }
}
