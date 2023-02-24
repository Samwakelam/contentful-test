import { css, theme } from '@sam/theme/twind';

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
