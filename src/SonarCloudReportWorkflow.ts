import { awscdk, TextFile } from 'projen';
import { WorkflowSteps } from 'projen/lib/github';
import { JobPermission } from 'projen/lib/github/workflows-model';
import { parsePackageName } from './schemas/name';

export interface SonarCloudReportWorkflowOptions {
  readonly repositoryUrl: string;
  /** Lines appended after the default `sonar-project.properties` content. */
  readonly sonarProjectPropertiesExtraLines?: readonly string[];
}

function parseGithubRepositoryUrl(repositoryUrl: string): {
  owner: string;
  repo: string;
} {
  const url = new URL(repositoryUrl);
  const [owner, repo] = url.pathname.replace(/^\//, '').replace(/\.git$/, '').split('/');

  return {
    owner: owner!,
    repo: repo!,
  };
}

function buildSonarProjectPropertiesLines(
  projectName: string,
  repositoryUrl: string,
  extraLines: readonly string[] = [],
): string[] {
  const { scope, packageName } = parsePackageName(projectName);
  const { owner } = parseGithubRepositoryUrl(repositoryUrl);
  const organization = scope ?? owner;

  return [
    'sonar.host.url=https://sonarcloud.io',
    `sonar.projectKey=${organization}_${packageName}`,
    `sonar.organization=${organization}`,
    'sonar.javascript.lcov.reportPaths=./coverage/lcov.info',
    'sonar.sources=./src',
    'sonar.tests=./test',
    'sonar.test.inclusions=**/*.test.*',
    ...extraLines,
  ];
}

export class SonarCloudReportWorkflow {
  constructor(
    project: awscdk.AwsCdkConstructLibrary,
    options: SonarCloudReportWorkflowOptions,
  ) {
    const sonarCloudReportWorkflow =
      project.github?.addWorkflow('sonarcloud-report');

    sonarCloudReportWorkflow?.on({
      push: { branches: ['main', 'beta'] },
      pullRequest: {
        types: ['opened', 'synchronize', 'reopened'],
      },
    });

    sonarCloudReportWorkflow?.addJob('sonarcloud-report', {
      runsOn: ['ubuntu-latest'],
      permissions: {
        contents: JobPermission.READ,
      },
      steps: [
        WorkflowSteps.checkout({
          with: {
            fetchDepth: 0,
          },
        }),
        ...project.renderWorkflowSetup(),
        {
          name: 'Run tests',
          run: 'pnpm run test',
        },
        {
          name: 'SonarCloud Scan',
          uses: 'SonarSource/sonarqube-scan-action@v7',
          env: {
            GITHUB_TOKEN: '${{ secrets.GITHUB_TOKEN }}',
            SONAR_TOKEN: '${{ secrets.SONAR_TOKEN }}',
          },
        },
      ],
    });

    /**
     * Sonarcloud properties file
     */
    const sonarProjectPropertiesLines = buildSonarProjectPropertiesLines(
      project.name,
      options.repositoryUrl,
      options.sonarProjectPropertiesExtraLines,
    );

    new TextFile(project, 'sonar-project.properties', {
      lines: sonarProjectPropertiesLines,
    });
  }
}
