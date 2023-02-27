import { mock, when, instance, anything } from 'ts-mockito';

import { RegionCode, Widget } from '@sam/types';

import { ContentfulAppContract } from './use-contentful-app.contract';

const serviceMock = mock<ContentfulAppContract>();

const WIDGETS: Widget[] = [];

const getRandomId = () =>
  `test-id-${Math.round(Math.random() * 100)}-${Math.round(
    Math.random() * 100
  )}`;

when(serviceMock.createWidget(anything())).thenCall(
  (model: { [key: string]: unknown }) => {
    const widget: Widget = {
      _template: 'samTestModel',
      id: getRandomId(),
      ...model,
      published: false,
    };

    WIDGETS.push(widget);
  }
);

when(serviceMock.deleteWidget(anything())).thenCall((widgetId: string) => {
  const index = WIDGETS.findIndex((widget) => widget.id === widgetId);
  WIDGETS.splice(index, 1);
});

when(serviceMock.getAllWidgets()).thenCall(() => {
  return WIDGETS;
});

when(serviceMock.getWidgetById(anything())).thenCall((id: string) => {});

when(serviceMock.getAllRegions()).thenCall(() => {
  return {
    regions: [
      {
        name: 'United States',
        iso: RegionCode['en-US'],
      },
      {
        name: 'United Kingdom',
        iso: RegionCode['en-GB'],
      },
    ],
    defaultRegion: 'en-US',
  };
});

when(serviceMock.publishWidget(anything())).thenCall((id: string) => {
  const index = WIDGETS.findIndex((widget) => widget.id === id);
  const widget: Widget = WIDGETS[index];

  const updateWidget = {
    ...widget,
    published: true,
    publishedAt: new Date().toString(),
  };
  WIDGETS[index] = updateWidget;

  return updateWidget;
});

when(serviceMock.unPublishWidget(anything())).thenCall((id: string) => {
  const index = WIDGETS.findIndex((widget) => widget.id === id);
  const widget: Widget = WIDGETS[index];

  const updateWidget = {
    ...widget,
    published: false,
  };

  WIDGETS[index] = updateWidget;

  return updateWidget;
});

when(serviceMock.updateWidget(anything(), anything())).thenCall(
  (id: string, model: { [key: string]: unknown }) => {
    const index = WIDGETS.findIndex((widget) => widget.id === id);
    const widget: Widget = WIDGETS[index];

    const updateWidget = {
      ...widget,
      ...model,
      updatedAt: new Date().toString(),
    };

    WIDGETS[index] = updateWidget;

    return updateWidget;
  }
);

export const useContentfulAppService = () => instance(serviceMock);
