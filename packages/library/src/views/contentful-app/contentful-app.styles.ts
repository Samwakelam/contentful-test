import { css, theme } from '@sam/theme/twind';

export const ContentfulAppCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'row',
    height: '100vh',
    backgroundColor: theme('colors.teal.100'),
    gap: theme('spacing.16'),
    paddingLeft: theme('spacing.16'),
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
  },
});

export const ColumnCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '50%',
    backgroundColor: theme('colors.teal.200'),
    borderRadius: theme('spacing.4'),
    paddingLeft: theme('spacing.16'),
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
  },
});

export const PlaceholderCss = css({
  '&': {
    paddingLeft: theme('spacing.32'),
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingRight: theme('spacing.32'),
  },
});

export const ColumnOneCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.32'),
    overflowY: 'auto',
  },
});
