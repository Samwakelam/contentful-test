import { theme } from 'twind';
import { css } from 'twind/css';

import tokens from './tokens';

export const globalStyles = css({
  ':global': {
    '*': {
      boxSizing: 'border-box',
    },
    a: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.700'),
      fontSize: tokens.text.body.standard,
      lineHeight: tokens.lineHeight.body.standard,
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
      fontSize: tokens.text.heading[32],
      lineHeight: tokens.lineHeight.heading[32],
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: theme('fontFamily.montserrat'),
      color: theme('colors.neutral.900'),
      fontSize: tokens.text.heading[25],
      lineHeight: tokens.lineHeight.heading[25],
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
    },
    h3: {
      fontFamily: theme('fontFamily.montserrat'),
      color: theme('colors.neutral.900'),
      fontSize: tokens.text.heading[20],
      lineHeight: tokens.lineHeight.heading[20],
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.800'),
      fontSize: tokens.text.heading[18],
      lineHeight: tokens.lineHeight.heading[18],
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.800'),
      fontSize: tokens.text.heading[16],
      lineHeight: tokens.lineHeight.heading[16],
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.800'),
      fontSize: tokens.text.heading[14],
      lineHeight: tokens.lineHeight.heading[14],
      fontWeight: 700,
      margin: 0,
      textTransform: 'uppercase',
    },
    p: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.700'),
      fontSize: tokens.text.body.standard,
      lineHeight: tokens.lineHeight.body.standard,
      fontWeight: 400,
      margin: 0,
    },
    li: {
      fontFamily: theme('fontFamily.roboto'),
      color: theme('colors.neutral.700'),
      fontSize: tokens.text.body.standard,
      lineHeight: tokens.lineHeight.body.standard,
      fontWeight: 400,
      margin: 0,
    },
    button: {
      border: 'unset',
      fontFamily: theme('fontFamily.roboto'),
    },
    label: {
      fontSize: tokens.text.body.standard,
      lineHeight: tokens.lineHeight.body.standard,
      fontWeight: 700,
      fontFamily: theme('fontFamily.roboto'),
    },
  },
});
