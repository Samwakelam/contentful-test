import { Gift } from '@sam/types';

export const mockGiftData: Gift = {
  _id: 'test-gift-id',
  name: 'Racing Roasties',
  lookupKey:
    '#owner:test-owner-id-1;workshop:test-workshop-id;list:test-list-id;',
  createdAt: new Date(),
  properties: {
    purchased: false,
    purchasedBy: null,
    watching: [],
  },
  description: null,
  visibility: {
    isVisible: true,
    sharedWith: [],
  },
};
