import { Widget } from '@sam/types';

export type ContentfulAppProps = {};

export type ContentfulAppState = {
  isModalOpen: boolean;
  widgets: Widget[];
};

export type ContentfulAppHandlers = {
  openModal: () => void;
  closeModal: () => void;
};

export type ContentfulAppContextProps = {
  state: ContentfulAppState;
  handlers: ContentfulAppHandlers;
};
