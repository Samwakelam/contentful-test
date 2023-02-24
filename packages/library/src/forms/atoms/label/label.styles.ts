import { css, theme } from '@sam/theme/twind';

export const LabelCss = css({
  '&': {
    color: theme('colors.neutral.600'),
    textTransform: 'capitalize',
  },
});

export const LabelHiddenCss = css({
  '&': {
    visibility: 'hidden',
  },
});
