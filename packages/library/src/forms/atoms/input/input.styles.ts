import { css, theme } from 'twind/css';

export const InputCss = css({
  '&': {
    position: 'relative',
    paddingTop: theme('spacing.12'),
    paddingBottom: theme('spacing.12'),
    paddingLeft: theme('spacing.24'),
    paddingRight: theme('spacing.24'),
    borderRadius: theme('spacing.8'),
    borderStyle: 'solid',
    borderWidth: theme('spacing.2'),
    borderColor: theme('colors.neutral.400'),
    color: theme('colors.neutral.700'),
    width: '100%',
    backgroundClip: 'padding-box',

    '&::placeholder': {
      color: theme('colors.neutral.400'),
      textTransform: 'capitalize',
    },

    '&:focus': {
      outline: 'auto 2px Highlight',
    },
  },
});

export const InputIsValidCss = css({
  '&': {
    borderBottomColor: theme('colors.green.700'),
  },
});

export const InputHasErrorCss = css({
  '&': {
    borderBottomStyle: 'solid',
    borderBottomColor: theme('colors.red.600'),
    borderBottomWidth: theme('spacing.2'),
  },
});
