import { font } from '../../src';

export const parseFontSize = () => {
  const sizes = Object.entries(font.text.heading);

  const fontSizes = sizes.reduce((obj, [key, value]) => {
    // @ts-ignore
    obj[key] = [value, { lineHeight: font.lineHeight.heading[key] }];
    return obj;
  }, {});

  return fontSizes;
};
