const MINUTES_PER_DAY = 24 * 60;

/** Whole calendar days as minutes (24h per day, fixed length). */
export function daysToMinutes(days: number): number {
  return days * MINUTES_PER_DAY;
}
