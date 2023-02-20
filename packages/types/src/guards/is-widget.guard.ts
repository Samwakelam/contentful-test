import { Widget } from '../types';

export const isWidget = (value: any): value is Widget => {
  return (
    typeof value.id !== 'undefined' &&
    value._template !== 'undefined' &&
    value.published !== 'undefined'
  );
};
