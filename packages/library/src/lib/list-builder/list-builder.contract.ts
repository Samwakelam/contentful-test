import { List } from '@sam/types';

export interface ListBuilderContract {
    getList(): Promise<List | null>;
}
