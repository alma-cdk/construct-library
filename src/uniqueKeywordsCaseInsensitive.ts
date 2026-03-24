export function uniqueKeywordsCaseInsensitive(
  keywords: readonly string[],
): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const k of keywords) {
    const key = k.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(k);
  }
  return result;
}
