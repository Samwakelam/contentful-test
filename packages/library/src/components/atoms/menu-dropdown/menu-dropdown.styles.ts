import { css, Theme, theme } from 'twind/css';

import { ColourType } from '@sam/types';

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

      '&:hover::before': {
        backgroundColor: theme('colors.neutral.200'),
      },

      '& path': {
        fill: theme(colour as keyof Theme),
      },
    },
  });

export const MenuButtonStyles = `
 before:(block absolute -inset-x-24 inset-y-0 opacity-20 content-[''])
`;
