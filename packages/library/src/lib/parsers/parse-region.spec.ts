import { Region, RegionCode } from '@sam/types';
import { describe, it, expect } from 'vitest';

import { parseRegion } from '../..';

describe('parse-region', () => {
  it('should return the expected language from the region', () => {
    const regions: Region[] = [
      {
        name: 'United States',
        iso: RegionCode['en-US'],
      },
      {
        name: 'United States',
        iso: 'es-US' as RegionCode,
      },
      {
        name: 'United Kingdom',
        iso: RegionCode['en-GB'],
      },
    ];
    const expectedLanguage = ['en', 'es', 'en'];

    regions.forEach((region, index) => {
      const object = parseRegion(region);
      expect(object.languageCode).toEqual(expectedLanguage[index]);
    });
  });

  it('should return the expected country from the region', () => {
    const regions: Region[] = [
      {
        name: 'United States',
        iso: RegionCode['en-US'],
      },
      {
        name: 'United States',
        iso: 'es-US' as RegionCode,
      },
      {
        name: 'United Kingdom',
        iso: RegionCode['en-GB'],
      },
    ];
    const expectedCountry = ['US', 'US', 'UK'];

    regions.forEach((region, index) => {
      const object = parseRegion(region);
      expect(object.countryCode).toEqual(expectedCountry[index]);
    });
  });

  it('should return the expected regionCode', () => {
    const regions: Region[] = [
      {
        name: 'United States',
        iso: RegionCode['en-US'],
      },
      {
        name: 'United States',
        iso: 'es-US' as RegionCode,
      },
      {
        name: 'United Kingdom',
        iso: RegionCode['en-GB'],
      },
    ];
    const expectedRegionCode = ['en-US', 'es-US', 'en-GB'];

    regions.forEach((region, index) => {
      const object = parseRegion(region);
      expect(object.regionCode).toEqual(expectedRegionCode[index]);
    });
  });
});
