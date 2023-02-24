import { css, theme } from '@sam/theme/twind';

export const ConfirmModalCss = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    gap: theme('spacing.24'),
  },
});

export const ButtonWrapperCss = css({
  '&': {
    display: 'flex',
    gap: theme('spacing.8'),
  },
});
