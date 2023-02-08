import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  SortByHorizontalIcon,
  SortByVerticalIcon,
} from '../icons';

export type ArrowsType =
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-up-left'
  | 'arrow-up-right'
  | 'sort-by-h'
  | 'sort-by-v';

export const arrowsMap: { [key in ArrowsType]: () => JSX.Element } = {
  'arrow-down': ArrowDownIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-up-left': ArrowUpLeftIcon,
  'arrow-up-right': ArrowUpRightIcon,
  'sort-by-h': SortByHorizontalIcon,
  'sort-by-v': SortByVerticalIcon,
};
