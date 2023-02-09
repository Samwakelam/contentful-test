import { List } from './list.type';
import { Entity } from './entity.type';

export interface Workshop extends Entity {
  lists: List[];
}
