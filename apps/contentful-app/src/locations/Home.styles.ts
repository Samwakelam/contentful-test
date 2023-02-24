import { css, theme } from '@sam/theme/twind';

export const HomeCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
    width: '100%',
    gap: theme('spacing.16'),
    paddingLeft: theme('spacing.56'),
    paddingRight: theme('spacing.56'),
    paddingTop: theme('spacing.32'),
    paddingBottom: theme('spacing.32'),
  },
});
