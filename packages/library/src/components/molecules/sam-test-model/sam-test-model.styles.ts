import { css, theme } from '@sam/theme/twind';

export const SamTestModelCss = css({
  '& p:last-child': {
    fontSize: theme('fontSize.14'),
    display: 'none',
  },
});
