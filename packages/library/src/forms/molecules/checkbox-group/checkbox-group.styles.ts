import { css, theme } from 'twind/css';

export const CheckboxGroupCss = css({
  '&': {
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    position: 'relative',
    gap: theme('spacing.8'),
    userSelect: 'none',
    marginBottom: theme('spacing.8'),
  },
});

export const InputCss = css({
  '&': {
    height: theme('spacing.20'),
    width: theme('spacing.20'),
    pointerEvents: 'all',
    opacity: 1,
    cursor: 'pointer',
    margin: theme('spacing.4'),
  },

  '&:hover ~ span': {
    backgroundColor: theme('colors.neutral.300'),
  },

  '&:hover:checked ~ span': {
    backgroundColor: theme('colors.cyan.600'),
  },
});

export const LabelCss = css({
  '&': {
    marginTop: theme('spacing.0'),
    marginBottom: theme('spacing.0'),
    // lineHeight: 'unset',
    //   marginLeft: theme('spacing.16'),
    //   marginRight: theme('spacing.16'),
  },
});

export const CheckboxCss = css({
  '&': {
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    height: theme('spacing.24'),
    width: theme('spacing.24'),
    backgroundColor: theme('colors.neutral.200'),
    borderRadius: '25%',
    margin: '3px',
  },
});

export const CheckboxCheckedCss = css({
  '&': {
    backgroundColor: theme('colors.cyan.500'),
  },
});

export const IconCss = css({
  '&': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: theme('spacing.24'),
    marginLeft: theme('spacing.2'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',

    '& svg': {
      height: theme('spacing.12'),
      width: theme('spacing.12'),
    },

    '& path': {
      fill: theme('colors.neutral.50'),
    },
  },
});
