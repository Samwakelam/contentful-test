import { mock, when, instance, anything } from 'ts-mockito';

import { isOwner, List, Owner } from '@sam/types';

import { mockOwnerData } from '../../../__synthetic__/owner.data';
import { mockWorkshopData } from '../../../__synthetic__/workshop.data';

import { ListManagerContract } from './list-manager.contract';

const serviceMock = mock<ListManagerContract>();

let WORKSHOP = { ...mockWorkshopData };

when(serviceMock.createList(anything())).thenCall((list: Omit<List, 'id'>) => {
  const mockList: List = {
    ...list,
    _id: `test-list-id-${Math.round(Math.random() * 100)}-${Math.round(
      Math.random() * 100
    )}`,
  };

  WORKSHOP.lists.push(mockList);
});

when(serviceMock.getWorkshop()).thenCall(() => {
  const workshop = { ...WORKSHOP };
  const connections: string[] | Owner[] = WORKSHOP.visibility.sharedWith;

  let filledConnections: any[] = [];
  connections.forEach((connection) => {
    if (isOwner(connection)) {
      filledConnections.push(connection);
    } else {
      const _owner = mockOwnerData.find((owner) => owner._id === connection);
      filledConnections.push(_owner);
    }
  });

  workshop.visibility.sharedWith = filledConnections;

  return workshop;
});

when(serviceMock.updateWorkshop(anything())).thenCall((workshop) => {
  WORKSHOP = workshop;
});

when(serviceMock.updateListById(anything(), anything())).thenCall(
  (id: string, list: List) => {
    const index = WORKSHOP.lists.findIndex((obj) => {
      return obj._id === id;
    });

    WORKSHOP.lists[index] = list;
  }
);

when(serviceMock.deleteListById(anything())).thenCall((id: string) => {
  const index = WORKSHOP.lists.findIndex((obj) => obj._id === id);
  WORKSHOP.lists.splice(index, 1);
});

export const useListManagerService = () => instance(serviceMock);
