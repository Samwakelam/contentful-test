import { createElement, ReactElement } from 'react';

import { FillType, IconMapProps, IconProps } from './icon.definition';
import {
  arrowsMap,
  chevronsMap,
  circlesMap,
  circlesSolidMap,
  clocksMap,
  clocksSolidMap,
  listMap,
  listSolidMap,
  mediaMap,
  mediaSolidMap,
  miscMap,
  miscSolidMap,
  shapesMap,
  shapesSolidMap,
  symbolsMap,
  utilsMap,
  utilsSolidMap,
} from './maps';

export const iconMap: IconMapProps = {
  ...arrowsMap,
  ...chevronsMap,
  ...circlesMap,
  ...clocksMap,
  ...listMap,
  ...mediaMap,
  ...miscMap,
  ...shapesMap,
  ...symbolsMap,
  ...utilsMap,
};

export const iconSolidsMap: IconMapProps = {
  ...arrowsMap,
  ...chevronsMap,
  ...circlesSolidMap,
  ...clocksSolidMap,
  ...listSolidMap,
  ...mediaSolidMap,
  ...miscSolidMap,
  ...shapesSolidMap,
  ...symbolsMap,
  ...utilsSolidMap,
};

export const Icon = ({
  icon,
  fill = FillType.SOLID,
  ariaLabel,
  className,
}: IconProps): ReactElement<IconProps> => {
  return (
    <i className={className} aria-label={ariaLabel}>
      {fill === 'solid'
        ? createElement(iconSolidsMap[icon])
        : createElement(iconMap[icon])}
    </i>
  );
};
