import { uniqueKeywordsCaseInsensitive } from '../src/uniqueKeywordsCaseInsensitive';

describe('uniqueKeywordsCaseInsensitive', () => {
  it('returns empty array for empty input', () => {
    expect(uniqueKeywordsCaseInsensitive([])).toEqual([]);
  });

  it('returns same order when no duplicates', () => {
    expect(
      uniqueKeywordsCaseInsensitive(['cdk', 'aws-cdk', 'constructs']),
    ).toEqual(['cdk', 'aws-cdk', 'constructs']);
  });

  it('drops exact duplicate strings', () => {
    expect(uniqueKeywordsCaseInsensitive(['cdk', 'aws', 'cdk'])).toEqual([
      'cdk',
      'aws',
    ]);
  });

  it('treats duplicates case-insensitively and keeps first spelling', () => {
    expect(
      uniqueKeywordsCaseInsensitive(['cdk', 'CDK', 'Aws', 'aws']),
    ).toEqual(['cdk', 'Aws']);
  });

  it('keeps first occurrence when same word appears with different casing', () => {
    expect(uniqueKeywordsCaseInsensitive(['Foo', 'bar', 'foo'])).toEqual([
      'Foo',
      'bar',
    ]);
  });
});
