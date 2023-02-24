import { css, theme } from '@sam/theme/twind';

export const EditorCss = css({
  '&': {
    position: 'relative',
    borderColor: theme('colors.teal.400'),
    borderStyle: 'solid',
    borderRadius: theme('spacing.4'),
    borderWidth: theme('spacing.4'),
    paddingLeft: theme('spacing.16'),
    paddingTop: theme('spacing.16'),
    paddingRight: theme('spacing.16'),
    paddingBottom: theme('spacing.32'),
    backgroundColor: theme('colors.teal.50'),
  },
});

export const ButtonBoxCss = css({
  '&': {
    position: 'absolute',
    display: 'flex',
    gap: theme('spacing.8'),
    bottom: '-22px',
    left: theme('spacing.16'),
  },
});

export const UnPublishButtonCss = css({
  '&': {
    backgroundColor: theme('colors.orange.400'),
    color: theme('colors.neutral.50'),
  },
  '&:hover': {
    backgroundColor: theme('colors.orange.500'),
  },
  '& path': {
    fill: theme('colors.neutral.50'),
  },
});

export const TagBoxCss = css({
  '&': {
    position: 'absolute',
    top: theme('spacing.8'),
    right: theme('spacing.8'),
    alignItems: 'flex-end',
  },
});
