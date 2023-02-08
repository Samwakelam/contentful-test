import { useRouter } from 'next/router';

export interface NavigationService {
  navigate: (href: string) => void;
}

export const useNavigation = (): NavigationService => {
  const router = useRouter();
  console.log('router: ', router);

  const navigate = (href: string) => {
    router.push(href);
  };

  return { navigate };
};
