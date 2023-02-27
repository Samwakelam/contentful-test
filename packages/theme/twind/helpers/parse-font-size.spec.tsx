import { describe, expect, it } from 'vitest';

import { parseFontSize } from './parse-font-size.helper';

describe('parse-font-size.helper', () => {
  it('should return the parsed font-size object', () => {
    const parse = parseFontSize();

    const objectCheck = {
      '12': ['0.75rem', { lineHeight: '1rem' }],
      '13': ['0.8rem', { lineHeight: '1.125rem' }],
      '14': ['0.875rem', { lineHeight: '1.875' }],
      '16': ['1rem', { lineHeight: '1.3rem' }],
      '18': ['1.13rem', { lineHeight: '1.4rem' }],
      '20': ['1.25rem', { lineHeight: '1.56rem' }],
      '25': ['1.5rem', { lineHeight: '1.9rem' }],
      '32': ['2rem', { lineHeight: '2.5rem' }],
      '35': ['2.2rem', { lineHeight: '2.5rem' }],
      '45': ['2.8rem', { lineHeight: '3.125rem' }],
    };

    expect(parse).toEqual(objectCheck);
  });
});
