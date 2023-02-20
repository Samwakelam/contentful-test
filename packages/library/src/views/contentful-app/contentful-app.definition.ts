import React from 'react';

import { Region, Widget } from '@sam/types';
import { Entry } from '@sam/contentful';

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
  addEntry: (model: ModelProps) => void;
  deleteEntry: (entryId: string) => void;
  fetchEntry: (entryId: string) => Promise<Entry | null>;
  onModalAction: (modal: ContentfulAppState['openModal']) => void;
  onPublish: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    entryId: string
  ) => void;
  onRegionSelect: (region: Region) => void;
  onUnPublish: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    entryId: string
  ) => void;
  resolvePublishedState: (entryId: string) => boolean;
};

export type ContentfulAppContextProps = {
  state: ContentfulAppState;
  handlers: ContentfulAppHandlers;
};
