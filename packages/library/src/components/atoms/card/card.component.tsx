import { ReactElement } from 'react';

import { tw } from '@sam/theme/twind';

import { CardProps } from './card.definition';

import * as S from './card.styles';

export const Card = ({ children }: CardProps): ReactElement<CardProps> => {
  return <div className={tw(S.CardCss)}>{children}</div>;
};
