import { DispatchesType, RegionCode } from '@sam/types';
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  WebAppContextProps,
  WebAppHandlers,
  WebAppState,
} from './web-app.definition';

export const WebAppContext = createContext<WebAppContextProps>({
  state: { activeRegion: RegionCode['en-GB'] },
  handlers: {
    onRegionSelect: () => {},
  },
});

export const useWebApp = (): WebAppContextProps => {
  return useContext(WebAppContext);
};

export const WebAppProvider = ({
  children,
  dispatches,
}: {
  children: ReactElement;
  dispatches: DispatchesType;
}) => {
  const [state, setState] = useState<WebAppState>({
    activeRegion: RegionCode['en-GB'],
  });

  const { selectedRegion } = dispatches;

  const onRegionSelect: WebAppHandlers['onRegionSelect'] = (region) => {
    setState((prev) => ({ ...prev, activeRegion: region }));
  };

  useEffect(() => {
    selectedRegion(state.activeRegion, () => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.activeRegion]);

  return (
    <WebAppContext.Provider
      value={{
        state: { ...state },
        handlers: {
          onRegionSelect,
        },
      }}
    >
      {children}
    </WebAppContext.Provider>
  );
};
