import { css, theme } from 'twind/css';
import tokens from '../../../styles/tokens';

export const SamTestModelCss = css({
  '& p:last-child': {
    fontSize: tokens.text.body.small,
    display: 'none',
  },
});
