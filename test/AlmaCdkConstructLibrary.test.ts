import { cdk } from 'projen';
import { Testing } from 'projen/lib/testing';
import { AlmaCdkConstructLibrary } from '../src/AlmaCdkConstructLibrary';

type LibraryOptions = ConstructorParameters<typeof AlmaCdkConstructLibrary>[0];

const baseLibraryOptions: LibraryOptions = {
  stability: cdk.Stability.STABLE,
  majorVersion: 1,
  author: 'Alma Media',
  authorAddress: 'opensource@almamedia.dev',
  name: '@alma-cdk/project',
  description: 'Opinionated CDK Project "Framework"',
  repositoryUrl: 'https://github.com/alma-cdk/project.git',
  releaseEnvironment: 'production',
};

function synthProject(options: Partial<LibraryOptions> = {}) {
  return Testing.synth(
    new AlmaCdkConstructLibrary({
      ...baseLibraryOptions,
      ...options,
    }),
  );
}

test('snapshot', () => {
  const project = new AlmaCdkConstructLibrary({ ...baseLibraryOptions });
  const snapshot = Testing.synth(project);
  expect(snapshot).toMatchSnapshot();
});

test('constructor validates options before synthesis', () => {
  expect(
    () =>
      new AlmaCdkConstructLibrary({
        ...baseLibraryOptions,
        name: 'invalid-name',
      }),
  ).toThrow();
});

test('.nvmrc uses workflowNodeVersion when provided', () => {
  const snapshot = synthProject({
    workflowNodeVersion: '22',
  });

  expect(snapshot['.nvmrc'].trim()).toBe('22');
});

test('package.json merges keywords case-insensitively', () => {
  const snapshot = synthProject({
    keywords: ['Custom', 'AWS', 'cdk'],
  });
  const packageJson = snapshot['package.json'] as {
    keywords: string[];
  };

  expect(packageJson.keywords).toHaveLength(5);
  expect(packageJson.keywords).toEqual(
    expect.arrayContaining(['cdk', 'aws-cdk', 'awscdk', 'aws', 'Custom']),
  );
});

test('package.json derives Python and Go publish metadata from package name', () => {
  const snapshot = synthProject({
    name: '@alma-cdk/my-hyphenated-package-name',
    repositoryUrl:
      'https://github.com/alma-cdk/my-hyphenated-package-name.git',
  });
  const packageJson = snapshot['package.json'] as {
    jsii: {
      targets: {
        python: {
          distName: string;
          module: string;
        };
        go: {
          moduleName: string;
        };
      };
    };
  };

  expect(packageJson.jsii.targets.python.distName).toBe(
    'alma-cdk.my-hyphenated-package-name',
  );
  expect(packageJson.jsii.targets.python.module).toBe(
    'alma_cdk.my_hyphenated_package_name',
  );
  expect(packageJson.jsii.targets.go.moduleName).toBe(
    'github.com/alma-cdk/my-hyphenated-package-name-go',
  );
});

test('package.json omits disabled Python and Go publish targets', () => {
  const snapshot = synthProject({
    python: false,
    golang: false,
  });
  const packageJson = snapshot['package.json'] as {
    jsii: {
      targets: {
        python?: unknown;
        go?: unknown;
      };
    };
  };

  expect(packageJson.jsii.targets.python).toBeUndefined();
  expect(packageJson.jsii.targets.go).toBeUndefined();
});

test('pnpm-workspace.yaml contains hardened workspace defaults', () => {
  const snapshot = synthProject();
  const workspaceConfig = snapshot['pnpm-workspace.yaml'];

  expect(workspaceConfig).toContain('minimumReleaseAge: 4320');
  expect(workspaceConfig).toContain('trustPolicy: no-downgrade');
  expect(workspaceConfig).toContain('nodeLinker: hoisted');
  expect(workspaceConfig).toContain('onlyBuiltDependencies:');
  expect(workspaceConfig).toContain('overrides:');
});

test('pnpm-workspace.yaml merges pnpmSettings into defaults', () => {
  const snapshot = synthProject({
    pnpmSettings: {
      minimumReleaseAge: 60,
      onlyBuiltDependencies: ['esbuild'],
      overrides: {
        '@types/node': '^24',
      },
    },
  });
  const workspaceConfig = snapshot['pnpm-workspace.yaml'];

  expect(workspaceConfig).toContain('minimumReleaseAge: 60');
  expect(workspaceConfig).toContain('onlyBuiltDependencies:');
  expect(workspaceConfig).toContain('  - esbuild');
  expect(workspaceConfig).toContain('overrides:');
  expect(workspaceConfig).toContain('  "@types/node": ^24');
});

test('sonar-project.properties derives project coordinates from the scoped name', () => {
  const snapshot = synthProject();
  const sonarProjectProperties = snapshot['sonar-project.properties'];

  expect(sonarProjectProperties).toContain('sonar.projectKey=alma-cdk_project');
  expect(sonarProjectProperties).toContain('sonar.organization=alma-cdk');
});

test('sonar-project.properties appends sonarProjectPropertiesExtraLines', () => {
  const sonarProjectPropertiesExtraLines = [
    'sonar.issue.ignore.multicriteria=e1',
    'sonar.issue.ignore.multicriteria.e1.ruleKey=typescript:S1874',
    'sonar.issue.ignore.multicriteria.e1.resourceKey=src/example/*.ts',
  ];
  const project = new AlmaCdkConstructLibrary({
    ...baseLibraryOptions,
    sonarProjectPropertiesExtraLines,
  });
  const snapshot = Testing.synth(project);
  expect(snapshot['sonar-project.properties']).toMatchSnapshot();
});
