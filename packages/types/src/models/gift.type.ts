import { Entity } from './entity.type';
import { Owner } from './owner.type';

export interface Gift extends Entity {
  image?: string;
  price?: string;
  shopName?: string;
  url?: string;
  category?: string;
  details?: string;
  properties: {
    purchased: boolean;
    purchasedBy: Owner | null;
    watching: Owner[];
  };
}
