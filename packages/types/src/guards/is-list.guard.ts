import { List } from '../models';

export const isList = (value: any): value is List => {
  return typeof value.gifts !== 'undefined';
};
