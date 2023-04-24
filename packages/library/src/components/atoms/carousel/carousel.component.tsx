import { ReactElement } from 'react';

import { tw } from '@sam/theme/twind';

import { CarouselProps } from './carousel.definition';

import * as S from './carousel.styles';

export const Carousel = ({}: CarouselProps): ReactElement<CarouselProps> => {
  return <div className={tw(S.CarouselCss)}></div>;
};
