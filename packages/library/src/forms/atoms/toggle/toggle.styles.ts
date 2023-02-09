import { css, theme } from 'twind/css';

export const ContainerCss = css({
    '&': {
        width: theme('spacing.56'),
        height: theme('spacing.32'),
    },
});

export const ToggleCss = css({
    '&': {
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        height: '100%',
    },
});

export const SpanStyles = `before:(block content-[''])`;

export const SpanCss = css({
    '&': {
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme('colors.neutral.50'),
        transition: '0.4s',
        borderRadius: theme('spacing.32'),
        borderColor: theme('colors.neutral.300'),
        borderStyle: 'solid',
        borderWidth: theme('spacing.2'),
    },

    '&:before': {
        position: 'absolute',
        content: '',
        backgroundColor: theme('colors.neutral.300'),
        transition: '0.4s',
        width: theme('spacing.20'),
        height: theme('spacing.20'),
        borderRadius: '50%',
        left: theme('spacing.4'),
        bottom: theme('spacing.4'),
    },

    '&[data-active="true"]': {
        backgroundColor: theme('colors.green.500'),
        borderColor: theme('colors.neutral.500'),
    },

    '&[data-active="true"]:before': {
        transform: 'translateX(24px)',
        backgroundColor: theme('colors.neutral.500'),
    },
});
