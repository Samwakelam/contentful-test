import { useCallback, useEffect } from 'react';
import { tw } from 'twind';

import {
  Button,
  ButtonVariant,
  ConfirmModal,
  ConfirmModalType,
  EntryModal,
  Modal,
} from '../../../../components';

import { useContentfulApp } from '../../contentful-app.view-model';
import { Tag } from '../tag';

import { EditorProps } from './editor.definition';

import * as S from './editor.styles';

export const Editor = ({ widgetId, children }: EditorProps) => {
  const { state, handlers } = useContentfulApp();

  const getEntry = useCallback(async () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all([getEntry()]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widgetId]);

  return (
    <div className={tw(S.EditorCss)}>
      <Tag
        published={handlers.resolvePublishedState(widgetId)}
        className={tw(S.TagCss)}
      />
      <div className={tw(S.ButtonBoxCss)}>
        <Button
          icon={{ icon: 'pencil', ariaLabel: 'edit' }}
          buttonVariant={ButtonVariant.PRIMARY}
          onClick={() => handlers.onModalAction(`update-${widgetId}`)}
        />
        <Button
          icon={{ icon: 'bin', ariaLabel: 'delete' }}
          buttonVariant={ButtonVariant.PRIMARY}
          onClick={() => handlers.onModalAction(`delete-${widgetId}`)}
        />
        {handlers.resolvePublishedState(widgetId) ? (
          <Button
            startIcon={{ icon: 'cross', ariaLabel: 'un-publish' }}
            className={tw(S.UnPublishButtonCss)}
            onClick={(e) => handlers.onUnPublish(e, widgetId)}
          >
            UnPublish
          </Button>
        ) : (
          <Button
            startIcon={{ icon: 'tick', ariaLabel: 'publish' }}
            buttonVariant={ButtonVariant.SUCCESS}
            onClick={(e) => handlers.onPublish(e, widgetId)}
          >
            Publish
          </Button>
        )}
      </div>
      {children}
      <Modal
        isOpen={state.openModal === `delete-${widgetId}`}
        onRequestClose={() => handlers.onModalAction(null)}
      >
        <ConfirmModal
          type={ConfirmModalType.DELETE}
          widgetId={widgetId}
          dispatches={{ onDelete: handlers.deleteWidget }}
          onClose={() => handlers.onModalAction(null)}
        />
      </Modal>
      <Modal
        isOpen={state.openModal === `update-${widgetId}`}
        onRequestClose={() => handlers.onModalAction(null)}
        modalTitle="Edit Widget"
      >
        <EntryModal type="update" onClose={() => {}} dispatches={{}} />
      </Modal>
    </div>
  );
};
