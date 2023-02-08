import { Workshop } from '@sam/types';

interface MockWorkshop extends Omit<Workshop, 'visibility'> {
  visibility: {
    isVisible: true;
    sharedWith: string[];
  };
}

export const mockWorkshopData: MockWorkshop = {
  _id: 'test-workshop-id',
  name: "Sam's workshop",
  lookupKey: '#owner:test-owner-id-1;',
  createdAt: new Date(),
  visibility: {
    isVisible: true,
    sharedWith: ['test-owner-id-2', 'test-owner-id-3'],
  },
  description: null,
  lists: [
    {
      _id: 'test-list-id-1',
      name: 'Christmas List',
      lookupKey: '#owner:test-owner-id-1;workshop:test-workshop-id;',
      createdAt: new Date(),
      gifts: [],
      description: null,
      visibility: {
        isVisible: true,
        sharedWith: [],
      },
    },
    {
      _id: 'test-list-id-2',
      name: 'Birthday List',
      lookupKey: '#owner:test-owner-id-1;workshop:test-workshop-id;',
      createdAt: new Date('2021-03-15'),
      gifts: [],
      description: null,
      visibility: {
        isVisible: true,
        sharedWith: [],
      },
    },
    {
      _id: 'test-list-id-3',
      name: 'Games List',
      lookupKey: '#owner:test-owner-id-1;workshop:test-workshop-id;',
      createdAt: new Date('2021-12-15'),
      gifts: [],
      description: null,
      visibility: {
        isVisible: false,
        sharedWith: [],
      },
    },
    {
      _id: 'test-list-id-4',
      name: 'Games List',
      lookupKey: '#owner:test-owner-id-1;workshop:test-workshop-id;',
      createdAt: new Date('2022-03-15'),
      gifts: [],
      description: null,
      visibility: {
        isVisible: true,
        sharedWith: [],
      },
    },
  ],
};
