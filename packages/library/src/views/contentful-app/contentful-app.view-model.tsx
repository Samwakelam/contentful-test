import {
  useCallback,
  useEffect,
  useState,
  createContext,
  ReactElement,
  useContext,
} from 'react';

import { Regions, Widget } from '@sam/types';

import {
  ContentfulAppContextProps,
  ContentfulAppHandlers,
  ContentfulAppState,
} from './contentful-app.definition';
import { useContentfulAppService } from '../../hooks/use-contentful-app/use-contentful-app.service';

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
    addWidget: () => {},
    deleteWidget: () => {},
    getWidget: () => null,
    onModalAction: () => {},
    onPublish: () => {},
    onRegionSelect: () => {},
    onUnPublish: () => {},
    resolvePublishedState: () => false,
    resolveUnPublishedChanges: () => false,
    updateWidget: () => {},
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
  const contentfulAppService = useContentfulAppService();

  const [state, setState] = useState<ContentfulAppState>(initialState);

  const fetchRegions = useCallback(async () => {
    const { regions, defaultRegion } =
      await contentfulAppService.getAllRegions();

    setState((prev) => ({
      ...prev,
      regions,
      defaultRegion,
    }));
  }, []);

  const fetchWidgets = useCallback(async () => {
    const widgets = await contentfulAppService.getAllWidgets();

    if (widgets) {
      setState((prev) => ({ ...prev, widgets }));
    }
  }, []);

  const getWidget: ContentfulAppHandlers['getWidget'] = (widgetId) => {
    const widget = state.widgets.find((w) => w.id === widgetId);

    if (widget) {
      return widget;
    }
    return null;
  };

  const addWidget: ContentfulAppHandlers['addWidget'] = async (model) => {
    try {
      await contentfulAppService.createWidget(model);

      fetchWidgets();
    } catch (error) {
      throw new Error(`useContentfulApp addWidget: ${error}`);
    }
  };

  const deleteWidget: ContentfulAppHandlers['deleteWidget'] = async (
    widgetId
  ) => {
    try {
      await contentfulAppService.deleteWidget(widgetId);

      fetchWidgets();
    } catch (error) {
      throw new Error(`useContentfulApp deleteWidget: ${error}`);
    }
  };

  const onModalAction: ContentfulAppHandlers['onModalAction'] = (modal) => {
    setState((prev) => ({ ...prev, openModal: modal }));
  };

  const onPublish: ContentfulAppHandlers['onPublish'] = async (
    event,
    widgetId
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const widget = await contentfulAppService.publishWidget(widgetId);

      const newWidgets: Widget[] = [...state.widgets];

      if (widget) {
        const index = newWidgets.findIndex((widget) => widget.id === widgetId);
        newWidgets[index] = widget;
      }

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
    widgetId
  ) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const widget = await contentfulAppService.unPublishWidget(widgetId);

      const newWidgets: Widget[] = [...state.widgets];

      if (widget) {
        const index = newWidgets.findIndex((widget) => widget.id === widgetId);
        newWidgets[index] = widget;
      }

      setState((prev) => ({ ...prev, widgets: newWidgets }));
    } catch (error) {
      throw new Error(`useContentfulApp onUnPublish: ${error}`);
    }
  };

  const resolvePublishedState: ContentfulAppHandlers['resolvePublishedState'] =
    (widgetId) => {
      const widget = state.widgets.find((widget) => widget.id === widgetId);

      return widget?.published ?? false;
    };

  useEffect(() => {
    fetchWidgets();
    fetchRegions();
  }, []);

  const resolveUnPublishedChanges: ContentfulAppHandlers['resolveUnPublishedChanges'] =
    (widgetId) => {
      const widget = state.widgets.find((widget) => widget.id === widgetId);

      if (widget && widget.publishedAt && widget.updatedAt) {
        const publishedAt = new Date(widget?.publishedAt).getTime();

        const updatedAt = new Date(widget?.updatedAt).getTime();

        if (publishedAt < updatedAt) {
          return true;
        }
        return false;
      }
      return false;
    };

  const updateWidget: ContentfulAppHandlers['updateWidget'] = async (model) => {
    const widgetId = model.id;
    delete model.id;
    const widget = await contentfulAppService.updateWidget(widgetId, model);

    const newWidgets: Widget[] = [...state.widgets];

    if (widget) {
      const index = newWidgets.findIndex((widget) => widget.id === widgetId);
      newWidgets[index] = widget;
    }

    setState((prev) => ({ ...prev, widgets: newWidgets }));
  };

  return (
    <ContentfulAppContext.Provider
      value={{
        state: { ...state },
        handlers: {
          addWidget,
          deleteWidget,
          getWidget,
          onModalAction,
          onPublish,
          onRegionSelect,
          onUnPublish,
          resolvePublishedState,
          resolveUnPublishedChanges,
          updateWidget,
        },
      }}
    >
      {children}
    </ContentfulAppContext.Provider>
  );
};
