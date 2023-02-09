import { List } from '@sam/types';
import { useRef } from 'react';
import { ListBuilderContract } from './list-builder.contract';

export class ListBuilderService implements ListBuilderContract {
    readonly listId: string;

    constructor(listId: string) {
        this.listId = listId;
    }

    async getList(): Promise<List | null> {
        return null;
    }
}

export function useListBuilderService(listId: string) {
    const builder = useRef(new ListBuilderService(listId)).current;
    return builder;
}
