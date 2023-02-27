import { css, CSSRules, Directive, theme } from '@sam/theme/twind';

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
    fontSize: theme('fontSize.14'),
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
    display: 'flex',
    flexFlow: 'column',
    gap: theme('spacing.16'),
  },
});
