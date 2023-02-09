import { css, theme } from 'twind/css';

export const ModalStyles = ``;

export const ModalCss = css({
  '&': {
    backgroundColor: theme('colors.neutral.50'),
    boxShadow: theme('boxShadow.drawer'),
    width: '100%',
    height: '90%',
    borderTopLeftRadius: theme('spacing.16'),
    borderTopRightRadius: theme('spacing.16'),
    position: 'fixed',
    bottom: 0,
  },
  '@screen sm': {
    backgroundColor: theme('colors.neutral.50'),
    boxShadow: theme('boxShadow.card'),
    width: theme('spacing.544'),
    height: 'unset',
    borderTopLeftRadius: theme('spacing.0'),
    borderTopRightRadius: theme('spacing.0'),
    position: 'relative',
  },
});

export const OverlayStyles = `
    sm:(
      bg(neutral-600 opacity-75)
    )
`;

export const OverlayCss = css({
  '&': {
    position: 'fixed',
    inset: 0,
    transform: 'translate3d(0, 100%, 0)',
    transition: 'transform 300ms ease',
    zIndex: 2,
  },
  '@screen sm': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    inset: 0,
    transform: 'unset',
  },
});

export const OverlayAfterOpenCss = css({
  '&': {
    transform: 'translate3d(0, 0, 0)',
  },
  '@screen sm': {
    transform: 'unset',
  },
});

export const OverlayBeforeCloseCss = css({
  '&': {
    transform: 'translate3d(0, 100%, 0)',
  },
  '@screen sm': {
    transform: 'unset',
  },
});

export const HeaderCss = css({
  '&': {
    display: 'grid',
    gridTemplateColumns: '44px 1fr 44px',
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingLeft: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
  },
  '&>h5': {
    gridColumn: 2,
    justifySelf: 'center',
    alignSelf: 'center',
  },
  '&>button': {
    gridColumn: 3,
    padding: 0,
    display: 'inline-block',
  },
});

export const ContentCss = css({
  '&': {
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.80'),
    paddingLeft: theme('spacing.40'),
    paddingRight: theme('spacing.40'),
  },
  '@screen sm': {
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.80'),
    paddingLeft: theme('spacing.56'),
    paddingRight: theme('spacing.56'),
  },
});
