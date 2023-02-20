import {
  useCallback,
  useEffect,
  useState,
  createContext,
  ReactElement,
  useContext,
} from 'react';

import { EntryService, Entry } from '@sam/contentful';
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
    fetchEntry: async () => null,
    onModalAction: () => {},
    onPublish: () => {},
    onRegionSelect: () => {},
    onUnPublish: () => {},
    resolvePublishedState: () => false,
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

  const parseEntry = (entry: Entry) => {
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
      published: entry.isPublished(),
      ...properties,
    };
  };

  const fetchEntries = useCallback(async () => {
    const entries = await Store.getAll({
      locale: '*',
      content_type: 'samTestModel',
    });

    const parsed = entries.map((entry) => parseEntry(entry));

    setState((prev) => ({ ...prev, widgets: parsed }));
  }, []);

  const fetchEntry: ContentfulAppHandlers['fetchEntry'] = async (entryId) => {
    const entry = await Store.get(entryId, {
      locale: '*',
    });

    if (entry) return entry;

    return null;
  };

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

  const onModalAction: ContentfulAppHandlers['onModalAction'] = (modal) => {
    setState((prev) => ({ ...prev, openModal: modal }));
  };

  const onPublish: ContentfulAppHandlers['onPublish'] = async (
    event,
    entryId
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const publishedEntry = await Store.publish(entryId);
      const parsedEntry = parseEntry(publishedEntry);

      const index = state.widgets.findIndex(
        (widget) => widget.id === parsedEntry.id
      );
      const newWidgets = [...state.widgets];

      newWidgets[index] = parsedEntry;

      setState((prev) => ({ ...prev, widgets: newWidgets }));
    } catch (error) {
      throw new Error(`useContentfulApp onPublish: ${error}`);
    }
  };

  const onRegionSelect: ContentfulAppHandlers['onRegionSelect'] = (region) => {
    setState((prev) => ({ ...prev, selectedRegion: region }));
  };

  const onUnPublish: ContentfulAppHandlers['onUnPublish'] = async (
    event,
    entryId
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const unPublishedEntry = await Store.unPublish(entryId);
      const parsedEntry = parseEntry(unPublishedEntry);

      const index = state.widgets.findIndex(
        (widget) => widget.id === parsedEntry.id
      );
      const newWidgets = [...state.widgets];
      newWidgets[index] = parsedEntry;

      setState((prev) => ({ ...prev, widgets: newWidgets }));
    } catch (error) {
      throw new Error(`useContentfulApp onUnPublish: ${error}`);
    }
  };

  const resolvePublishedState: ContentfulAppHandlers['resolvePublishedState'] =
    (entryId) => {
      const widget = state.widgets.find((widget) => widget.id === entryId);

      return widget?.published ?? false;
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
          fetchEntry,
          onModalAction,
          onPublish,
          onRegionSelect,
          onUnPublish,
          resolvePublishedState,
        },
      }}
    >
      {children}
    </ContentfulAppContext.Provider>
  );
};
