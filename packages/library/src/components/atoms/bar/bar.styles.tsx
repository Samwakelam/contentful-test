import { css, CSSRules, Directive, theme } from 'twind/css';

export const BarCss: Directive<CSSRules> = css({
  '&': {
    width: '100%',
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: theme('colors.neutral.50'),
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    borderTopWidth: theme('spacing.2'),
    borderBottomWidth: theme('spacing.2'),
    borderColor: theme('colors.neutral.200'),
  },
  '@screen sm': {
    flexFlow: 'row',
  },
});

export const TriggerBoxCss = css({
  '&': {
    backgroundColor: theme('colors.neutral.200'),
  },
});

export const TriggerBoxHiddenCss = css({
  '@screen md': {
    display: 'none',
  },
});

export const TriggerCss = css({
  '@screen sm': {
    height: '100%',
  },
});

export const ContentCss = css({
  '&': {
    width: '100%',
    paddingTop: theme('spacing.24'),
    paddingBottom: theme('spacing.24'),
    paddingLeft: theme('spacing.32'),
    paddingRight: theme('spacing.32'),
  },
  '@screen sm': {
    paddingTop: theme('spacing.32'),
    paddingBottom: theme('spacing.32'),
    paddingLeft: theme('spacing.56'),
    paddingRight: theme('spacing.56'),
  },
  '@screen lg': {
    paddingTop: theme('spacing.40'),
    paddingBottom: theme('spacing.40'),
    paddingLeft: theme('spacing.64'),
    paddingRight: theme('spacing.64'),
  },
});
