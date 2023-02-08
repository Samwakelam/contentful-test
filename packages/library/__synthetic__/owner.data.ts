import { Owner } from '@sam/types';

import { mockWorkshopData } from './workshop.data';

interface MockOwner extends Omit<Owner, 'connections'> {
  connections: string[];
}

export const mockOwnerData: MockOwner[] = [
  {
    _id: 'test-owner-id-1',
    name: 'sam',
    workshops: [
      { ...mockWorkshopData, visibility: { isVisible: true, sharedWith: [] } },
    ],
    connections: ['test-owner-id-2', 'test-owner-id-3', 'test-owner-id-4'],
    image: null,
  },
  {
    _id: 'test-owner-id-2',
    name: 'dave',
    workshops: [],
    connections: [],
    image: null,
  },
  {
    _id: 'test-owner-id-3',
    name: 'julie',
    workshops: [],
    connections: [],
    image: null,
  },
  {
    _id: 'test-owner-id-4',
    name: 'stuart',
    workshops: [],
    connections: [],
    image: null,
  },
  {
    _id: 'test-owner-id-5',
    name: 'lizzie',
    workshops: [],
    connections: [],
    image: null,
  },
  {
    _id: 'test-owner-id-6',
    name: 'rosemary',
    workshops: [],
    connections: [],
    image: null,
  },
];
