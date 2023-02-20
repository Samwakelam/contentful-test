import { css, theme } from 'twind/css';

import tokens from '../../../../styles/tokens';

export const TagCss = css({
  '&': {
    backgroundColor: 'pink',
    display: 'flex',
    borderRadius: theme('spacing.4'),
    paddingLeft: theme('spacing.4'),
    paddingRight: theme('spacing.4'),
    width: 'fit-content',
  },

  '& h6': {
    fontSize: tokens.text.heading[12],
    lineHeight: tokens.lineHeight.heading[12],
    color: theme('colors.neutral.50'),
  },
});

export const PublishedCss = css({
  '&': {
    backgroundColor: theme('colors.green.600'),
  },
});

export const DraftCss = css({
  '&': {
    backgroundColor: theme('colors.orange.400'),
  },
});
