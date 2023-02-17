import { css, theme } from 'twind/css';
import tokens from '../../../styles/tokens';

export const SamTestModelCss = css({
  '& p:first-child': {
    fontSize: tokens.text.body.small,
  },
});
