import { List } from '@sam/types';

export const mockListData: List = {
  _id: 'test-list-id',
  name: 'Christmas List',
  lookupKey: '#owner:test-owner-id-1;workshop:test-workshop-id;',
  createdAt: new Date(),
  gifts: [],
  description: null,
  visibility: {
    isVisible: true,
    sharedWith: [],
  },
};
