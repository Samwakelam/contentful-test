export type ContentfulAppProps = {};

export type ContentfulAppState = {
  isModalOpen: boolean;
};

export type ContentfulAppHandlers = {
  openModal: () => void;
  closeModal: () => void;
};

export type ContentfulAppContextProps = {
  state: ContentfulAppState;
  handlers: ContentfulAppHandlers;
};
