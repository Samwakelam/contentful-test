import { EntryService } from '@sam/contentful';
import { useCallback, useEffect, useState } from 'react';
import { createContext, ReactElement, useContext } from 'react';
import {
  ContentfulAppContextProps,
  ContentfulAppHandlers,
  ContentfulAppState,
} from './contentful-app.definition';

const initialState: ContentfulAppState = {
  isModalOpen: false,
  widgets: [],
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

const Store = new EntryService();

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

  const fetchEntries = useCallback(async () => {
    const entries = await Store.getAll({
      locale: '*',
      content_type: 'samTestModel',
    });

    const parsed = entries.map((entry) => {
      const { sys, fields } = entry;

      const properties = Object.entries(fields)
        .map(([key, value]) => [key, value])
        .reduce((obj, _entry: any[]) => {
          // @ts-ignore
          obj[_entry[0]] = _entry[1];
          return obj;
        }, {});

      return {
        _template: sys.contentType.sys.id,
        id: sys.id,
        ...properties,
      };
    });

    setState((prev) => ({ ...prev, widgets: parsed }));
  }, []);

  useEffect(() => {
    fetchEntries();
  }, []);

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
