import { cdk } from 'projen';
import { Testing } from 'projen/lib/testing';
import { AlmaCdkConstructLibrary } from '../src/AlmaCdkConstructLibrary';

const baseLibraryOptions = {
  stability: cdk.Stability.STABLE,
  majorVersion: 1,
  author: 'Alma Media',
  authorAddress: 'opensource@almamedia.dev',
  name: '@alma-cdk/project',
  description: 'Opinionated CDK Project "Framework"',
  repositoryUrl: 'https://github.com/alma-cdk/project.git',
  releaseEnvironment: 'production',
} as const;

test('snapshot', () => {
  const project = new AlmaCdkConstructLibrary({ ...baseLibraryOptions });
  const snapshot = Testing.synth(project);
  expect(snapshot).toMatchSnapshot();
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
