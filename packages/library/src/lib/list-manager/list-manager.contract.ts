import { List, Workshop } from '@sam/types';

export interface ListManagerContract {
  createList(list: Omit<List, 'id'>): Promise<void>;
  getWorkshop(): Promise<Workshop | null>;
  updateWorkshop(workshop: Workshop): Promise<void>;
  updateListById(id: string, list: List): Promise<void>;
  deleteListById(id: string): Promise<void>;
}
