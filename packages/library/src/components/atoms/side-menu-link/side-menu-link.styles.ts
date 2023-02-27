import { css, CSSRules, Directive, theme } from '@sam/theme/twind';

import { spacing } from '@sam/theme';

export const SlideMenuLinkStyles = ``;

export const SlideMenuLinkCss: Directive<CSSRules> = css({
  '&': {
    display: 'block',
    backgroundColor: theme('colors.neutral.50'),
    color: theme('colors.neutral.900'),
    padding: `${spacing[24]} ${spacing[32]}`,
    textTransform: 'uppercase',
    fontWeight: theme('fontWeight.bold'),
    margin: `${spacing[16]} 0`,
    borderRadius: theme('spacing.4'),
  },
});

export const SlideMenuLinkActiveCss: Directive<CSSRules> = css({
  '&': {
    backgroundColor: theme('colors.neutral.900'),
    color: theme('colors.neutral.50'),
  },
});
