import { describe, it, expect, vi } from 'vitest';

import { useNavigation } from './use-navigation.service';

vi.mock('./use-navigation.service', () => ({
  useNavigation: () => ({
    navigate: vi.fn(),
  }),
}));

describe('use-navigation', () => {
  it('should have been called', () => {
    const { navigate } = useNavigation();
    navigate('/a/path-string');

    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
