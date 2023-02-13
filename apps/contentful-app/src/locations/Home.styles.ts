import { css, theme } from 'twind/css';

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
