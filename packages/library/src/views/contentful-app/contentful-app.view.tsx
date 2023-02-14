import { tw } from 'twind';

import { Button, Card, Modal, Placeholder } from '../../components';

import { ContentfulAppProps } from './contentful-app.definition';
import {
  ContentfulAppProvider,
  useContentfulApp,
} from './contentful-app.view-model';
import { AddModelModal } from '../../components/molecules/add-model';

import * as S from './contentful-app.styles';

export const ContentfulAppComponent = ({}: ContentfulAppProps) => {
  const { state, handlers } = useContentfulApp();

  return (
    <div className={tw(S.ContentfulAppCss)}>
      <div className={tw(S.ColumnCss)}>
        <Card>
          <h3> Test </h3>
        </Card>
      </div>
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
