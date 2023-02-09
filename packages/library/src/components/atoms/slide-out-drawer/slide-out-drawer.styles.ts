import { css, theme } from 'twind/css';

export const DrawerStyles = ``;

export const DrawerCss = css({
  '&': {
    backgroundColor: theme('colors.neutral.50'),
    boxShadow: theme('boxShadow.drawer'),
    height: '100%',
    width: '80%',
    borderTopLeftRadius: theme('spacing.16'),
    borderBottomLeftRadius: theme('spacing.16'),
    position: 'absolute',
    right: 0,
    display: 'flex',
    flexFlow: 'column',
  },
  '@screen md': {
    width: '50%',
  },
});

export const OverlayStyles = `

`;

export const OverlayCss = css({
  '&': {
    position: 'fixed',
    inset: 0,
    transform: 'translate3d(100%, 0, 0)',
    transition: 'transform 300ms ease',
  },
});

export const OverlayAfterOpenCss = css({
  '&': {
    transform: 'translate3d(0, 0, 0)',
  },
});

export const OverlayBeforeCloseCss = css({
  '&': {
    transform: 'translate3d(100%, 0, 0)',
  },
});

export const HeaderCss = css({
  '&': {
    display: 'grid',
    gridTemplateColumns: '18px 1fr',
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.16'),
    paddingLeft: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
  },

  '&>h5': {
    gridColumn: 2,
    justifySelf: 'center',
    textTransform: 'capitalize',
  },

  '&>button': {
    gridColumn: 1,
    padding: 0,

    '& i': {
      display: 'flex',
      alignItems: 'center',

      '& path': {
        fill: 'unset',
      },
    },
  },
});

export const ContentCss = css({
  '&': {
    paddingTop: theme('spacing.16'),
    paddingBottom: theme('spacing.24'),
    paddingLeft: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
    height: '100%',
    overflowY: 'auto',
  },

  '@screen sm': {
    paddingLeft: theme('spacing.24'),
    paddingRight: theme('spacing.24'),
  },

  '@screen md': {
    paddingLeft: theme('spacing.32'),
    paddingRight: theme('spacing.32'),
  },

  '@screen lg': {
    paddingLeft: theme('spacing.56'),
    paddingRight: theme('spacing.56'),
  },
});
