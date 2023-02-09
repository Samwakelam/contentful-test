import { css, theme } from 'twind/css';

export const PlaceholderStyles = ``;

export const PlaceholderCss = css({
  '&': {
    width: '100%',
    backgroundColor: theme('colors.neutral.200'),
    borderRadius: theme('spacing.16'),
    borderStyle: 'dashed',
    borderColor: theme('colors.neutral.400'),
    borderWidth: theme('spacing.4'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
