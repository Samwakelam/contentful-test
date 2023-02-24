import { css } from '@sam/theme/twind';
import { font } from '@sam/theme';

export const SamTestModelCss = css({
  '& p:last-child': {
    fontSize: font.text.body.small,
    display: 'none',
  },
});
