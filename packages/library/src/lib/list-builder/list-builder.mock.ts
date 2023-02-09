import { mock, when, instance, anything } from 'ts-mockito';
import { mockListData } from '../../../__synthetic__/list.data';
import { ListBuilderContract } from './list-builder.contract';

const serviceMock = mock<ListBuilderContract>();

when(serviceMock.getList()).thenCall(() => {
    return mockListData;
});
export const useListBuilderService = () => instance(serviceMock);
