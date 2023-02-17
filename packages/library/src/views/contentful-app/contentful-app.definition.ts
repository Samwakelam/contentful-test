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
  addEntry: (model: ModelProps) => void;
  deleteEntry: (entryId: string) => void;
  onModalAction: (modal: ContentfulAppState['openModal']) => void;
  onRegionSelect: (region: Region) => void;
};

export type ContentfulAppContextProps = {
  state: ContentfulAppState;
  handlers: ContentfulAppHandlers;
};
