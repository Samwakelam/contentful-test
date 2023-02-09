import { css, theme } from 'twind/css';

export const CardStyles = `
`;

export const CardCss = css({
  '&': {
    backgroundColor: theme('colors.neutral.50'),
    padding: theme('spacing.20'),
    boxShadow: theme('boxShadow.card'),
  },
  '@screen sm': {
    padding: theme('spacing.24'),
  },
});
