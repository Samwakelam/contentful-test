import { createContext, ReactElement, useContext, useState } from 'react';
import {
  WebAppContextProps,
  WebAppHandlers,
  WebAppState,
} from './web-app.definition';

export const WebAppContext = createContext<WebAppContextProps>({
  state: {},
  handlers: {},
});

export const useWebApp = (): WebAppContextProps => {
  return useContext(WebAppContext);
};

export const WebAppProvider = ({ children }: { children: ReactElement }) => {
  const [state, setState] = useState<WebAppState>({});

  return (
    <WebAppContext.Provider value={{ state: { ...state }, handlers: {} }}>
      {children}
    </WebAppContext.Provider>
  );
};
