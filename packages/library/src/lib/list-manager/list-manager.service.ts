import { useRef } from 'react';

import { List, Workshop } from '@sam/types';

import { ListManagerContract } from './list-manager.contract';

export class ListManagerService implements ListManagerContract {
  readonly workshop: Workshop;

  constructor(workshop: Workshop) {
    this.workshop = workshop;
  }

  async createList(list: Omit<List, 'id'>): Promise<void> {}

  async getWorkshop(): Promise<Workshop | null> {
    return this.workshop;
  }

  async updateWorkshop(workshop: Workshop): Promise<void> {}

  async updateListById(id: string, list: List): Promise<void> {}

  async deleteListById(id: string): Promise<void> {}
}

export function useListManagerService(workshop: Workshop): ListManagerService {
  const manager = useRef(new ListManagerService(workshop)).current;
  return manager;
}
