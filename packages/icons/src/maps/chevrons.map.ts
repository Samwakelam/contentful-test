import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '../icons';

export type ChevronsType =
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up';

export const chevronsMap: { [key in ChevronsType]: () => JSX.Element } = {
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
};
