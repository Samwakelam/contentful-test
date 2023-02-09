import { mock, when, instance, anything } from 'ts-mockito';

import { Workshop } from '@sam/types';

import { mockOwnerData } from '../../../__synthetic__/owner.data';
import { WorkshopManagerContract } from './workshop-manager.contract';

const serviceMock = mock<WorkshopManagerContract>();

when(serviceMock.createWorkshop(anything())).thenCall(
  (workshop: Omit<Workshop, 'id'>) => {
    const mockWorkshop: Workshop = {
      ...workshop,
      _id: `test-workshop-id-${Math.round(Math.random() * 100)}-${Math.round(
        Math.random() * 100
      )}`,
    };

    mockOwnerData[0].workshops.push(mockWorkshop);
  }
);

when(serviceMock.getOwner()).thenCall(async () => {
  const owner = { ...mockOwnerData[0] };
  const connections = mockOwnerData[0].connections;

  let filledConnections: any[] = [];
  connections.forEach((connection) => {
    const _owner = mockOwnerData.find((owner) => owner._id === connection);
    filledConnections.push(_owner);
  });

  owner.connections = filledConnections;

  return owner;
});

when(serviceMock.getOwnerById(anything())).thenCall((id: string) => {
  return mockOwnerData.find((owner) => owner._id === id);
});

when(serviceMock.updateOwner(anything())).thenResolve();

when(serviceMock.updateWorkshopById(anything(), anything())).thenCall(
  (id: string, workshop: Workshop) => {
    const index = mockOwnerData[0].workshops.findIndex(
      (shop) => shop._id === id
    );
    mockOwnerData[0].workshops[index] = workshop;
  }
);

when(serviceMock.deleteWorkshopById(anything())).thenCall((id: string) => {
  const index = mockOwnerData[0].workshops.findIndex((shop) => shop._id === id);
  mockOwnerData[0].workshops.splice(index, 1);
});

export const useWorkshopManagerService = () => instance(serviceMock);
