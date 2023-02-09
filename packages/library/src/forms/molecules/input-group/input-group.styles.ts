import { css, theme } from 'twind/css';
import tokens from '../../../styles/tokens';

export const InputGroupCss = css({
  '&': {
    position: 'relative',
    width: '100%',
  },
  '& label': {
    display: 'inline-block',
    marginBottom: theme('spacing.8'),
  },
});

export const InputWrapperCss = css({
  '&': {
    position: 'relative',
  },
});

export const IconCss = css({
  '&': {
    position: 'absolute',
    top: theme('spacing.12'),
    right: theme('spacing.40'),
    height: tokens.text.body.small,
    width: tokens.lineHeight.body.small,
  },
  '& svg': {
    height: tokens.lineHeight.body.small,
  },
});

export const IconTickCss = css({
  '& path': {
    fill: theme('colors.green.700'),
  },
});

export const IconCrossCss = css({
  '& path': {
    fill: theme('colors.red.600'),
  },
});

export const ActionButtonCss = css({
  '&': {
    position: 'absolute',
    top: theme('spacing.4'),
    right: theme('spacing.4'),
    cursor: 'pointer',
    borderRadius: theme('spacing.4'),
    height: 'calc( 16px + 40px - 4px )',
    width: theme('spacing.64'),
    pointerEvents: 'all',
    backgroundColor: theme('colors.grey.600'),
  },

  '& svg': {
    height: theme('spacing.32'),
    width: theme('spacing.32'),
    pointerEvents: 'none',

    '& path': {
      fill: theme('colors.blue.500'),
    },
  },
});

export const ListItemsCss = css({
  '&': {
    borderRadius: theme('spacing.8'),
    borderStyle: 'solid',
    borderWidth: theme('spacing.2'),
    borderColour: theme('colors.blue.500'),
    color: theme('colors.neutral.900'),
    width: '100%',
    minHeight: 'calc(16px + 40px)',
    marginTop: tokens.lineHeight.body.small,
  },
});

export const ListItemCss = css({
  '&': {
    paddingTop: theme('spacing.20'),
    paddingBottom: theme('spacing.20'),
    paddingLeft: theme('spacing.24'),
    paddingRight: theme('spacing.80'),
    position: 'relative',
    width: '100%',

    '& > .action-button': {
      top: theme('spacing.2'),
    },
  },
});

export const MessageCss = css({
  '&': {
    visibility: 'hidden',
    marginBottom: theme('spacing.8'),

    textTransform: 'none',
    float: 'left',
    width: '100%',
    color: theme('colors.neutral.700'),
  },
});

export const MessageErrorCss = css({
  '&': {
    color: theme('colors.red.500'),
    visibility: 'visible',
  },
});
