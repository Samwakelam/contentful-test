import { ColourType } from '@sam/types';
import { css, Theme, theme } from '@sam/theme/twind';

export const MenuDropdownCss = css({
  position: 'relative',
});

export const MenuTriggerStyles = `before:(block absolute -inset-x-12 -inset-y-12 content-[''])`;

export const MenuTriggerCss = css({
  '&': { height: 'unset', width: 'unset' },
});

export const MenuListCss = (stackPosition: 'left' | 'right' = 'left') =>
  css({
    '&': {
      paddingLeft: theme('spacing.24'),
      paddingRight: theme('spacing.24'),
      borderRadius: theme('spacing.4'),
      borderWidth: theme('spacing.2'),
      borderStyle: 'solid',
      borderColor: theme('colors.neutral.200'),
      boxShadow: theme('boxShadow.card'),
      backgroundColor: theme('colors.neutral.50'),
      position: 'absolute',
      top: theme('spacing.32'),
      right: stackPosition === 'right' ? 0 : 'unset',
      left: stackPosition === 'left' ? 0 : 'unset',
      display: 'none',
      flexFlow: 'column',
      zIndex: 5,
    },
  });

export const MenuListActiveCss = css({
  display: 'inline-flex',
});

export const MenuItemsCss = (colour: string = ColourType.GREY) =>
  css({
    '&': {
      paddingTop: theme('spacing.12'),
      paddingBottom: theme('spacing.12'),
      borderWidth: theme('spacing.2'),
      borderBottomStyle: 'solid',
      borderColor: theme('colors.neutral.200'),
      borderRadius: 0,
      minWidth: theme('spacing.112'),
      position: 'relative',
    },

    '&:last-child': {
      borderBottom: 'unset',
    },

    '&>button': {
      color: theme(colour as keyof Theme),
      textTransform: 'capitalize',
      display: 'flex',
      alignItems: 'center',
      gap: theme('spacing.8'),
      width: '100%',

      '&:hover::before': {
        backgroundColor: theme('colors.neutral.200'),
        margin: '-12px -24px',
        width: 'calc(100% + 48px)',
      },

      '& path': {
        fill: theme(colour as keyof Theme),
      },
    },
  });

export const MenuButtonStyles = `
 before:(block absolute inset-y-0 opacity-20 content-[''] w-full mx-[-24px] my-[-12px])
`;

export const TriggerSelectedCss = css({
  '&': {
    fontSize: theme('fontSize.13'),
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.8'),
  },

  '& span:nth-child(2)': {
    height: theme('spacing.24'),
  },

  '& i': {
    height: theme('spacing.12'),
    display: 'flex',
    alignItems: 'center',

    '& svg': {
      display: 'inline-block',
      height: theme('spacing.8'),
      width: '100%',
    },
  },
});

export const SelectedBoldStyles = `font-bold`;

export const SelectedBackgroundCss = css({
  '&': {},
});
