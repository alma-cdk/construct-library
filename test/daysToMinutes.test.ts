import { daysToMinutes } from '../src/daysToMinutes';

describe('daysToMinutes', () => {
  it('maps 1 day to 1440 minutes', () => {
    expect(daysToMinutes(1)).toBe(1440);
  });

  it('maps 3 days to 4320 minutes', () => {
    expect(daysToMinutes(3)).toBe(4320);
  });

  it('maps 14 days to 20160 minutes', () => {
    expect(daysToMinutes(14)).toBe(20160);
  });

  it('maps 0 days to 0 minutes', () => {
    expect(daysToMinutes(0)).toBe(0);
  });
});
