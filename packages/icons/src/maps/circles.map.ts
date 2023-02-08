import {
  CircleChevronDownIcon,
  CircleChevronLeftIcon,
  CircleChevronRightIcon,
  CircleChevronUpIcon,
  CircleChevronDownSolidIcon,
  CircleChevronLeftSolidIcon,
  CircleChevronRightSolidIcon,
  CircleChevronUpSolidIcon,
  CircleBangIcon,
  CircleCrossIcon,
  CircleInfoIcon,
  CirclePlusIcon,
  CircleQuestionIcon,
  CircleStarIcon,
  CircleTickIcon,
  CircleTickSolidIcon,
  CircleStarSolidIcon,
  CircleQuestionSolidIcon,
  CirclePlusSolidIcon,
  CircleInfoSolidIcon,
  CircleCrossSolidIcon,
  CircleBangSolidIcon,
} from '../icons';

export type CirclesType =
  | 'circle-bang'
  | 'circle-cross'
  | 'circle-chevron-down'
  | 'circle-chevron-left'
  | 'circle-chevron-right'
  | 'circle-chevron-up'
  | 'circle-info'
  | 'circle-plus'
  | 'circle-question'
  | 'circle-star'
  | 'circle-tick';

export const circlesMap: { [key in CirclesType]: () => JSX.Element } = {
  'circle-bang': CircleBangIcon,
  'circle-cross': CircleCrossIcon,
  'circle-chevron-down': CircleChevronDownIcon,
  'circle-chevron-left': CircleChevronLeftIcon,
  'circle-chevron-right': CircleChevronRightIcon,
  'circle-chevron-up': CircleChevronUpIcon,
  'circle-info': CircleInfoIcon,
  'circle-plus': CirclePlusIcon,
  'circle-question': CircleQuestionIcon,
  'circle-star': CircleStarIcon,
  'circle-tick': CircleTickIcon,
};

export const circlesSolidMap: { [key in CirclesType]: () => JSX.Element } = {
  'circle-bang': CircleBangSolidIcon,
  'circle-cross': CircleCrossSolidIcon,
  'circle-chevron-down': CircleChevronDownSolidIcon,
  'circle-chevron-left': CircleChevronLeftSolidIcon,
  'circle-chevron-right': CircleChevronRightSolidIcon,
  'circle-chevron-up': CircleChevronUpSolidIcon,
  'circle-info': CircleInfoSolidIcon,
  'circle-plus': CirclePlusSolidIcon,
  'circle-question': CircleQuestionSolidIcon,
  'circle-star': CircleStarSolidIcon,
  'circle-tick': CircleTickSolidIcon,
};
