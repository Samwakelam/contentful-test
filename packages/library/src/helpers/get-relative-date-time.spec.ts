import { describe, expect, it } from 'vitest';
import { getRelativeDateTime } from './get-relative-date-time.helper';

describe('get-relative-date-time', () => {
  it('should return that it was this month', () => {
    const date = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );

    const string = getRelativeDateTime(date);

    expect(string).toEqual('Created this month');
  });

  it('should return that it was one month ago', () => {
    const date = new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      new Date().getDate()
    );

    const string = getRelativeDateTime(date);

    expect(string).toEqual('Created 1 month ago');
  });

  it('should return that it was several months ago', () => {
    const date = new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 5,
      new Date().getDate()
    );

    const string = getRelativeDateTime(date);

    expect(string).toEqual('Created 5 months ago');
  });

  it('should return that it was one year ago', () => {
    const date = new Date(
      new Date().getFullYear() - 1,
      new Date().getMonth(),
      new Date().getDate()
    );

    const string = getRelativeDateTime(date);

    expect(string).toEqual('Created 1 year ago');
  });

  it('should return that it was a couple of years ago', () => {
    const date = new Date(
      new Date().getFullYear() - 2,
      new Date().getMonth(),
      new Date().getDate()
    );

    const string = getRelativeDateTime(date);

    expect(string).toEqual('Created 2 years ago');
  });

  it('should return how many months and years ago', () => {
    const date = new Date(
      new Date().getFullYear() - 2,
      new Date().getMonth() - 5,
      new Date().getDate()
    );

    const string = getRelativeDateTime(date);

    expect(string).toEqual('Created 2 years and 5 months ago');
  });
});
