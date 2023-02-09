import { css, theme } from 'twind/css';

export const TooltipCss = css({
  '&': {
    display: 'inline-block',
    position: 'relative',
  },
});

export const TipStyles = `before:(block content-[''])`;

export const TipCss = css({
  '&': {
    position: 'absolute',
    borderRadius: theme('spacing.4'),
    left: '50%',
    transform: 'translateX(-50%)',
    paddingTop: theme('spacing.4'),
    paddingRight: theme('spacing.8'),
    paddingBottom: theme('spacing.4'),
    paddingLeft: theme('spacing.8'),
    color: theme('colors.neutral.50'),
    background: theme('colors.neutral.900'),
    fontSize: '14px',
    fontFamily: theme('fontFamily.roboto'),
    lineHeight: theme('spacing.20'),
    zIndex: 100,
    textAlign: 'center',
  },

  '&:before': {
    height: 0,
    width: 0,
    position: 'absolute',
    pointerEvents: 'none',
    left: '50%',
    border: 'solid transparent',
    borderWidth: theme('spacing.8'),
    marginLeft: 'calc(8px * -1)',
  },
});

export const TopCss = css({
  '&': {
    bottom: 'calc(100% + 16px)',
  },
  '&:before': {
    top: '100%',
    borderTopColor: theme('colors.neutral.900'),
  },
});

export const LeftCss = css({
  '&': {
    left: 'auto',
    right: 'calc(100% + 20px)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
  },
  '&:before': {
    left: 'auto',
    right: 'calc(8px * -2)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
    borderLeftColor: theme('colors.neutral.900'),
  },
});

export const RightCss = css({
  '&': {
    left: 'calc(100% + 20px)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
  },
  '&:before': {
    left: 'calc(8px * -1)',
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
    borderRightColor: theme('colors.neutral.900'),
  },
});

export const BottomCss = css({
  '&': {
    top: 'calc(100% + 16px)',
  },
  '&:before': {
    bottom: '100%',
    borderBottomColor: theme('colors.neutral.900'),
  },
});
