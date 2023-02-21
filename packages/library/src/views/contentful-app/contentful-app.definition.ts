import React from 'react';

import { Region, Widget } from '@sam/types';

export type ContentfulAppProps = {};

export type ContentfulAppState = {
  openModal: string | null;
  widgets: Widget[];
  regions: Region[];
  defaultRegion: Region;
  selectedRegion: Region;
};

export type ModelProps = {
  name: { 'en-US': string };
  description: { 'en-US': string; 'en-GB'?: string };
};

export type ContentfulAppHandlers = {
  addWidget: (model: ModelProps) => void;
  deleteWidget: (widgetId: string) => void;
  getWidget: (widgetId: string) => Widget | null;
  onModalAction: (modal: ContentfulAppState['openModal']) => void;
  onPublish: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    widgetId: string
  ) => void;
  onRegionSelect: (region: Region) => void;
  onUnPublish: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    widgetId: string
  ) => void;
  resolvePublishedState: (widgetId: string) => boolean;
  resolveUnPublishedChanges: (widgetId: string) => boolean;
  updateWidget: (model: { [key: string]: any }) => void;
};

export type ContentfulAppContextProps = {
  state: ContentfulAppState;
  handlers: ContentfulAppHandlers;
};
