import { Entry } from '@sam/contentful/delivery';

// Entry<any> from the deliveryAPI 'contentful'
export const mockEntry: Omit<Entry<any>, 'update'> = {
  sys: {
    type: 'test-entry',
    id: 'test-entry-id',
    createdAt: '',
    updatedAt: '',
    locale: 'en-US',
    revision: 0,
    space: {
      sys: {
        type: 'Link',
        linkType: 'Space',
        id: '',
      },
    },
    environment: {
      sys: {
        type: 'Link',
        linkType: 'Environment',
        id: 'develop',
      },
    },
    contentType: {
      sys: {
        type: 'Link',
        linkType: 'ContentType',
        id: 'testEntryModel',
      },
    },
  },
  fields: {},
  metadata: {
    tags: [],
  },
  toPlainObject: () => ({}),
};
