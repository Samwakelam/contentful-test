import {
  ListAddIcon,
  ListFaveIcon,
  ListFaveSolidIcon,
  ListIcon,
  ListSearchIcon,
} from '../icons';

export type ListType = 'list' | 'list-add' | 'list-fave' | 'list-search';

export const listMap: { [key in ListType]: () => JSX.Element } = {
  list: ListIcon,
  'list-add': ListAddIcon,
  'list-fave': ListFaveIcon,
  'list-search': ListSearchIcon,
};

export const listSolidMap: { [key in ListType]: () => JSX.Element } = {
  list: ListIcon,
  'list-add': ListAddIcon,
  'list-fave': ListFaveSolidIcon,
  'list-search': ListSearchIcon,
};
