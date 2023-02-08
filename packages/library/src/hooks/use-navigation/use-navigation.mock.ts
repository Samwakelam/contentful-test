import { anyString, instance, mock, when } from 'ts-mockito';

import { NavigationService } from './use-navigation.service';

const mockedNavigation = mock<NavigationService>();

when(mockedNavigation.navigate(anyString())).thenCall((s: string) => {
  alert(`You have been navigated to ${s}`);
});

export const useNavigation = () => instance(mockedNavigation);
