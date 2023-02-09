import { css, CSSRules, Directive, theme } from 'twind/css';

import tokens from '../../../styles/tokens';

export const SlideMenuLinkStyles = ``;

export const SlideMenuLinkCss: Directive<CSSRules> = css({
  '&': {
    display: 'block',
    backgroundColor: theme('colors.neutral.50'),
    color: theme('colors.neutral.900'),
    padding: `${tokens.spacing[24]} ${tokens.spacing[32]}`,
    textTransform: 'uppercase',
    fontWeight: '700',
    margin: `${tokens.spacing[16]} 0`,
    borderRadius: theme('spacing.4'),
  },
});

export const SlideMenuLinkActiveCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.neutral.900'),
    color: theme('colors.neutral.50'),
  },
});
