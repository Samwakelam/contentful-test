import { css, theme } from 'twind/css';

export const UserImageCss = css({
  '&': {
    height: theme('spacing.40'),
  },
});

export const GrayscaleCss = css({
  '&': {
    filter: 'grayscale(1)',
  },
});
