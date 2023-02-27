import { css, theme } from '@sam/theme/twind';

export const TagContainerCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.4'),

    width: 'fit-content',
  },
});

export const TagCss = css({
  '&': {
    fontSize: theme('fontSize.12'),
    borderRadius: theme('spacing.4'),
    paddingLeft: theme('spacing.4'),
    paddingRight: theme('spacing.4'),
  },
});

export const GreenCss = css({
  '&': {
    backgroundColor: theme('colors.green.600'),
    color: theme('colors.neutral.50'),
  },
});

export const OrangeCss = css({
  '&': {
    backgroundColor: theme('colors.orange.400'),
    color: theme('colors.neutral.50'),
  },
});

export const BlueCss = css({
  '&': {
    backgroundColor: theme('colors.sky.600'),
    color: theme('colors.neutral.50'),
  },
});
