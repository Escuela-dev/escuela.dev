import { describe, beforeEach, afterEach, expect, test, vi } from 'vitest';

import { nextClassDateTime } from './countdownUtil';

describe('nextClassDateTime', () => {
  beforeEach(() => {
    // Mock the Date object
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test('returns next class time today if before 11:30', () => {
    const mockDate = new Date('2024-02-19T08:00:00'); // Monday 8am
    vi.setSystemTime(mockDate);

    const result = nextClassDateTime();
    expect(result?.getHours()).toBe(11);
    expect(result?.getMinutes()).toBe(30);
    expect(result?.getDate()).toBe(mockDate.getDate());
  });

  test('returns 19:30 if between 11:30 and 19:30', () => {
    const mockDate = new Date('2024-02-01T14:00:00'); // Monday 2pm
    vi.setSystemTime(mockDate);

    const result = nextClassDateTime();
    expect(result?.getHours()).toBe(19);
    expect(result?.getMinutes()).toBe(30);
    expect(result?.getDate()).toBe(mockDate.getDate());
  });

  test('returns next day 11:30 if after 19:30', () => {
    const mockDate = new Date('2024-06-19T20:00:00'); // Monday 8pm
    vi.setSystemTime(mockDate);

    const result = nextClassDateTime();
    expect(result?.getHours()).toBe(11);
    expect(result?.getMinutes()).toBe(30);
    expect(result?.getDate()).toBe(mockDate.getDate() + 1);
  });

  test('skips Sunday and returns Monday if current day is Saturday after 19:30', () => {
    const mockDate = new Date('2024-11-16T20:00:00'); // Saturday 8pm
    vi.setSystemTime(mockDate);

    const result = nextClassDateTime();
    expect(result?.getDay()).toBe(1); // Monday
    expect(result?.getHours()).toBe(11);
    expect(result?.getMinutes()).toBe(30);
  });
});
