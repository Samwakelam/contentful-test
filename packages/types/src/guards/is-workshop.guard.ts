import { Workshop } from '../models';

export const isWorkshop = (value: any): value is Workshop => {
  return typeof value.lists !== 'undefined';
};
