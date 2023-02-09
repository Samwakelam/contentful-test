import { Owner } from '../models';

export const isOwner = (value: any): value is Owner => {
  if (!value || typeof value !== 'object') return false;

  const props = [
    'name',
    'image',
    'workshops',
    'connections',
    'id',
    'lookupKey',
    'createdAt',
    'visibility',
  ];
  const keys = Object.keys(value);

  return keys.every((key) => props.includes(key));
};
