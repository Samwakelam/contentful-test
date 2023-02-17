import {
  useCallback,
  useEffect,
  useState,
  createContext,
  ReactElement,
  useContext,
} from 'react';

import { EntryService } from '@sam/contentful';
import { Regions, RegionCode } from '@sam/types';

import {
  ContentfulAppContextProps,
  ContentfulAppHandlers,
  ContentfulAppState,
} from './contentful-app.definition';

const initialState: ContentfulAppState = {
  openModal: null,
  widgets: [],
  regions: [],
  defaultRegion: Regions['en-US'],
  selectedRegion: Regions['en-US'],
};

export const ContentfulAppContext = createContext<ContentfulAppContextProps>({
  state: initialState,
  handlers: {
    addEntry: () => {},
    deleteEntry: () => {},
    onModalAction: () => {},
    onRegionSelect: () => {},
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

  const onModalAction: ContentfulAppHandlers['onModalAction'] = (modal) => {
    setState((prev) => ({ ...prev, openModal: modal }));
  };

  const onRegionSelect: ContentfulAppHandlers['onRegionSelect'] = (region) => {
    setState((prev) => ({ ...prev, selectedRegion: region }));
  };

  const fetchRegions = useCallback(async () => {
    const locales = await Store.locales();

    const regions = locales.items.map(
      (locale) => Regions[locale.code as RegionCode]
    );

    const index = locales.items.findIndex((locale) => locale.default);
    const defaultRegion = Regions[locales.items[index].code as RegionCode];

    setState((prev) => ({
      ...prev,
      regions,
      defaultRegion,
      selectedRegion: defaultRegion,
    }));
  }, []);

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

  const addEntry: ContentfulAppHandlers['addEntry'] = async (model) => {
    try {
      await Store.create(model);

      fetchEntries();
    } catch (error) {
      throw new Error(`useContentfulApp addEntry: ${error}`);
    }
  };

  const deleteEntry: ContentfulAppHandlers['deleteEntry'] = async (entryId) => {
    try {
      await Store.del(entryId);
      fetchEntries();
    } catch (error) {
      throw new Error(`useContentfulApp deleteEntry: ${error}`);
    }
  };

  useEffect(() => {
    fetchEntries();
    fetchRegions();
  }, []);

  return (
    <ContentfulAppContext.Provider
      value={{
        state: { ...state },
        handlers: {
          addEntry,
          deleteEntry,
          onModalAction,
          onRegionSelect,
        },
      }}
    >
      {children}
    </ContentfulAppContext.Provider>
  );
};
