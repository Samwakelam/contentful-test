import { Owner } from './owner.type';

export type Entity = {
  _id: string;
  name: string;
  lookupKey: string;
  createdAt: Date;
  description: string | null;
  visibility: {
    isVisible: boolean;
    sharedWith: Owner[];
  };
};
