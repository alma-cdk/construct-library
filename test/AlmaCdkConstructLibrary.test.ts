import { cdk } from 'projen';
import { Testing } from 'projen/lib/testing';
import { AlmaCdkConstructLibrary } from '../src/AlmaCdkConstructLibrary';
import { PACKAGE_MANAGER, PNPM_VERSION } from '../src/constants';

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
        name: 'invalid/name',
      }),
  ).toThrow();
});

test('.nvmrc uses workflowNodeVersion when provided', () => {
  const snapshot = synthProject({
    workflowNodeVersion: '22.13.0',
  });

  expect(snapshot['.nvmrc'].trim()).toBe('22.13.0');
});

test('pins the same pnpm version for local runs and CI workflows', () => {
  const snapshot = synthProject();
  const packageJson = snapshot['package.json'] as {
    packageManager: string;
  };

  expect(packageJson.packageManager).toBe(PACKAGE_MANAGER);
  expect(snapshot['.github/workflows/build.yml']).toContain(
    `version: ${PNPM_VERSION}`,
  );
});

test('.npmrc rejects an older pnpm that would not switch to the pinned version', () => {
  const snapshot = synthProject();

  expect(snapshot['.npmrc']).toContain('package-manager-strict-version=true');
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

test('package.json derives Python publish metadata from unscoped package name', () => {
  const snapshot = synthProject({
    name: 'my-hyphenated-package-name',
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
    'my-hyphenated-package-name',
  );
  expect(packageJson.jsii.targets.python.module).toBe(
    'my_hyphenated_package_name',
  );
  expect(packageJson.jsii.targets.go.moduleName).toBe(
    'github.com/alma-cdk/my-hyphenated-package-name-go',
  );
});

test('build workflow includes Codecov step when codeCov is enabled', () => {
  const snapshot = synthProject({
    codeCov: true,
  });

  expect(snapshot['.github/workflows/build.yml']).toContain(
    'codecov/codecov-action@',
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
  expect(workspaceConfig).toContain('allowBuilds:');
  expect(workspaceConfig).toContain('blockExoticSubdeps: true');
  expect(workspaceConfig).toContain('glob@>=9.0.0 <14.0.2: ^14.0.2');
  expect(workspaceConfig).toContain('minimatch@>=7.0.0 <11.0.1: ^11.0.1');
});

test('pnpm-workspace.yaml merges pnpmSettings into defaults', () => {
  const snapshot = synthProject({
    pnpmSettings: {
      minimumReleaseAge: 60,
      allowBuilds: { esbuild: true },
      trustPolicyExclude: ['esbuild@0.27.2'],
      overrides: {
        '@types/node': '^24',
      },
    },
  });
  const workspaceConfig = snapshot['pnpm-workspace.yaml'];

  expect(workspaceConfig).toContain('minimumReleaseAge: 60');
  expect(workspaceConfig).toContain('allowBuilds:');
  expect(workspaceConfig).toContain('  unrs-resolver: true');
  expect(workspaceConfig).toContain('  esbuild: true');
  expect(workspaceConfig).toContain('  - jsii@5.9.33');
  expect(workspaceConfig).toContain('  - esbuild@0.27.2');
  expect(workspaceConfig).toContain('overrides:');
  expect(workspaceConfig).toContain('  "@types/node": ^24');
});

test('sonar-project.properties derives project coordinates from the scoped name', () => {
  const snapshot = synthProject();
  const sonarProjectProperties = snapshot['sonar-project.properties'];

  expect(sonarProjectProperties).toContain('sonar.projectKey=alma-cdk_project');
  expect(sonarProjectProperties).toContain('sonar.organization=alma-cdk');
});

test('sonar-project.properties derives organization from repository owner for unscoped names', () => {
  const snapshot = synthProject({
    name: 'project',
    repositoryUrl: 'https://github.com/alma-cdk/project.git',
  });
  const sonarProjectProperties = snapshot['sonar-project.properties'];

  expect(sonarProjectProperties).toContain('sonar.projectKey=alma-cdk_project');
  expect(sonarProjectProperties).toContain('sonar.organization=alma-cdk');
});

describe('next major release branch', () => {
  it('is created from majorVersion without any releaseBranches option', () => {
    const snapshot = synthProject({ majorVersion: 3 });
    const workflow = snapshot['.github/workflows/release-4.x.yml'] as string;

    expect(workflow).toBeDefined();
    expect(workflow).toContain('name: release-4.x');
    expect(workflow).toContain('      - 4.x');
    expect(workflow).toContain('NPM_DIST_TAG: beta');
  });

  it('prepares the release task with the next major and beta prerelease', () => {
    const snapshot = synthProject({ majorVersion: 3 });
    const tasks = snapshot['.projen/tasks.json'] as {
      tasks: Record<string, { env: Record<string, string> }>;
    };

    expect(tasks.tasks['release:4.x'].env).toMatchObject({
      RELEASE: 'true',
      MAJOR: '4',
      PRERELEASE: 'beta',
    });
  });

  it('keeps the default branch releasing the current major as latest', () => {
    const snapshot = synthProject({ majorVersion: 3 });
    const tasks = snapshot['.projen/tasks.json'] as {
      tasks: Record<string, { env: Record<string, string> }>;
    };

    expect(tasks.tasks.release.env).toMatchObject({
      RELEASE: 'true',
      MAJOR: '3',
    });
    expect(tasks.tasks.release.env.PRERELEASE).toBeUndefined();
  });

  it('adds downstream releaseBranches alongside the default one', () => {
    const snapshot = synthProject({
      majorVersion: 3,
      releaseBranches: {
        'legacy-2.x': { majorVersion: 2, npmDistTag: 'legacy' },
      },
    });

    expect(snapshot['.github/workflows/release-4.x.yml']).toBeDefined();
    expect(snapshot['.github/workflows/release-legacy-2.x.yml']).toContain(
      'NPM_DIST_TAG: legacy',
    );
  });

  it('lets downstream override the next major branch configuration', () => {
    const snapshot = synthProject({
      majorVersion: 3,
      releaseBranches: {
        '4.x': { majorVersion: 4, prerelease: 'rc', npmDistTag: 'next' },
      },
    });
    const tasks = snapshot['.projen/tasks.json'] as {
      tasks: Record<string, { env: Record<string, string> }>;
    };

    expect(tasks.tasks['release:4.x'].env).toMatchObject({
      MAJOR: '4',
      PRERELEASE: 'rc',
    });
    expect(snapshot['.github/workflows/release-4.x.yml']).toContain(
      'NPM_DIST_TAG: next',
    );
  });

  it('tracks majorVersion so the beta branch follows it', () => {
    const snapshot = synthProject({ majorVersion: 10 });

    expect(snapshot['.github/workflows/release-11.x.yml']).toBeDefined();
    expect(snapshot['.github/workflows/release-10.x.yml']).toBeUndefined();
  });
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
