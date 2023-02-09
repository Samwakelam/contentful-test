import { Gift } from '../models';

export const isGift = (value: any): value is Gift => {
  return (
    typeof value.properties !== 'undefined' && typeof value._id !== 'undefined'
  );
};
