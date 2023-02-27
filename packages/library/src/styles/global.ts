import { theme, css } from '@sam/theme/twind';

export const globalStyles = css({
  ':global': {
    '*': {
      boxSizing: 'border-box',
    },
    a: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.700'),
      fontSize: theme('fontSize.16'),
      fontWeight: 400,
      margin: 0,
      textDecoration: 'none',

      '&:hover': {
        color: theme('colors.neutral.500'),
      },
    },
    h1: {
      fontFamily: theme('fontFamily.montserrat'),
      color: theme('colors.neutral.900'),
      fontSize: theme('fontSize.32'),
      fontWeight: theme('fontWeight.bold'),
      margin: 0,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: theme('fontFamily.montserrat'),
      color: theme('colors.neutral.900'),
      fontSize: theme('fontSize.25'),
      fontWeight: theme('fontWeight.bold'),
      margin: 0,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: theme('fontFamily.montserrat'),
      color: theme('colors.neutral.900'),
      fontSize: theme('fontSize.120'),
      fontWeight: theme('fontWeight.bold'),
      margin: 0,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.800'),
      fontSize: theme('fontSize.18'),
      fontWeight: theme('fontWeight.bold'),
      margin: 0,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.800'),
      fontSize: theme('fontSize.16'),
      fontWeight: theme('fontWeight.bold'),
      margin: 0,
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.800'),
      fontSize: theme('fontSize.14'),
      fontWeight: theme('fontWeight.bold'),
      margin: 0,
      textTransform: 'uppercase',
    },
    p: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.700'),
      fontSize: theme('fontSize.16'),
      fontWeight: 400,
      margin: 0,
    },
    li: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.700'),
      fontSize: theme('fontSize.16'),
      fontWeight: 400,
      margin: 0,
    },
    button: {
      border: 'unset',
      fontFamily: theme('fontFamily.roboto'),
    },
    label: {
      fontSize: theme('fontSize.16'),
      fontWeight: theme('fontWeight.bold'),
      fontFamily: theme('fontFamily.roboto'),
    },
  },
});
