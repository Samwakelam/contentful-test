import { useState } from 'react';
import { createContext, ReactElement, useContext } from 'react';
import {
  ContentfulAppContextProps,
  ContentfulAppHandlers,
  ContentfulAppState,
} from './contentful-app.definition';

const initialState: ContentfulAppState = {
  isModalOpen: false,
};

export const ContentfulAppContext = createContext<ContentfulAppContextProps>({
  state: initialState,
  handlers: {
    openModal: () => {},
    closeModal: () => {},
  },
});

export const useContentfulApp = (): ContentfulAppContextProps => {
  return useContext(ContentfulAppContext);
};

export const ContentfulAppProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [state, setState] = useState<ContentfulAppState>(initialState);

  const openModal: ContentfulAppHandlers['openModal'] = () => {
    setState((prev) => ({ ...prev, isModalOpen: true }));
  };

  const closeModal: ContentfulAppHandlers['closeModal'] = () => {
    setState((prev) => ({ ...prev, isModalOpen: false }));
  };

  return (
    <ContentfulAppContext.Provider
      value={{
        state: { ...state },
        handlers: {
          openModal,
          closeModal,
        },
      }}
    >
      {children}
    </ContentfulAppContext.Provider>
  );
};
