import { Gift } from './gift.type';
import { Entity } from './entity.type';

export interface List extends Entity {
  gifts: Gift[];
}
