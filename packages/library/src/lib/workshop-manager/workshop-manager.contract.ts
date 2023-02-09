import { Owner, Workshop } from '@sam/types';

export interface WorkshopManagerContract {
  createWorkshop(workshop: Omit<Workshop, 'id'>): Promise<Workshop | null>;
  getOwner(): Promise<Owner | null>;
  getOwnerById(id: string): Promise<Owner | null>;
  getConnectionById(id: string): Promise<Owner | null>;
  updateOwner(owner: Owner): Promise<Owner | null>;
  updateWorkshopById(id: string, workshop: Workshop): Promise<Workshop | null>;
  deleteWorkshopById(id: string): Promise<void>;
}
