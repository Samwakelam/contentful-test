import { LanguageCode, Region, RegionCode } from '@sam/types';

/**
 * @name ParsedRegionProps
 *
 * @description - Returns a broken down object of the region to abstract out the country
 *                and the region separately
 *
 * @typedef {Object} ParsedRegionProps
 * @property {LanguageCode} languageCode - represents the language of the region
 * @property {RegionCode} regionCode - represents the full region
 * @property {string} countryCode - represents the country of the region
 */
type ParsedRegionProps = {
  languageCode: LanguageCode;
  regionCode: RegionCode;
  countryCode: string;
};

/**
 * @function parseRegion
 *
 * @description - A helper to abstract the different parts of a region to usable
 *                codes to define the country and the language.
 *
 * @param {Region} region
 *
 * @returns {ParsedRegionProps}
 *
 */
export const parseRegion = (region: Region): ParsedRegionProps => {
  const regionCode: RegionCode = region.iso;

  const languageCode: LanguageCode = regionCode.split('-')[0] as LanguageCode;
  let countryCode = regionCode.split('-')[1];

  if (countryCode === 'GB') countryCode = 'UK';

  return {
    languageCode,
    regionCode,
    countryCode,
  };
};
