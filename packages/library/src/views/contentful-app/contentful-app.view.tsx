import { tw } from 'twind';

import { EntryService } from '@sam/contentful';

import { Button, Modal, Placeholder } from '../../components';

import { ContentfulAppProps } from './contentful-app.definition';
import {
  ContentfulAppProvider,
  useContentfulApp,
} from './contentful-app.view-model';
import { AddModelModal } from '../../components/molecules/add-model';

import * as S from './contentful-app.styles';
import { renderWidgets } from './_partials/renderer';

export const ContentfulAppComponent = ({}: ContentfulAppProps) => {
  const { state, handlers } = useContentfulApp();

  const entryService = new EntryService();
  const test = async () => {
    return await entryService.getAll();
  };

  return (
    <div className={tw(S.ContentfulAppCss)}>
      <div className={tw(S.ColumnCss)}>{renderWidgets(state.widgets)}</div>
      <div className={tw(S.ColumnCss)}>
        <Placeholder className={tw(S.PlaceholderCss)}>
          <Button
            startIcon={{ icon: 'plus', ariaLabel: 'plus' }}
            onClick={() => handlers.openModal()}
          >
            Add Component
          </Button>
        </Placeholder>
      </div>
      <Modal
        modalTitle="Add Component"
        onRequestClose={() => handlers.closeModal()}
        isOpen={state.isModalOpen}
      >
        <AddModelModal onClose={() => handlers.closeModal()} />
      </Modal>
    </div>
  );
};

export const ContentfulApp = (props: ContentfulAppProps) => {
  return (
    <ContentfulAppProvider>
      <ContentfulAppComponent {...props} />
    </ContentfulAppProvider>
  );
};
