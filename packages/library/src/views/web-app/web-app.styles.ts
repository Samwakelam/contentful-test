import { css, CSSRules, Directive, theme } from 'twind/css';

import tokens from '../../styles/tokens';

export const WebAppCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
  },
});

export const BoxCss: Directive<CSSRules> = css({
  '&': {
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.8'),
  },
});

export const SubtitleCss: Directive<CSSRules> = css({
  '&': {
    color: theme('colors.neutral.600'),
    fontSize: tokens.text.heading[14],
    lineHeight: tokens.lineHeight.heading[14],
  },
});

export const ContentCss = css({
  '&': {
    backgroundColor: theme('colors.rose.100'),
    height: '100%',
    paddingTop: theme('spacing.12'),
    paddingLeft: theme('spacing.24'),
    paddingRight: theme('spacing.24'),
    paddingBottom: theme('spacing.24'),
  },
});
