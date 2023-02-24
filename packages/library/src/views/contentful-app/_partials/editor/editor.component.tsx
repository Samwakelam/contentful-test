import { useState } from 'react';
import { tw } from '@sam/theme/twind';

import {
  Button,
  ButtonVariant,
  ConfirmModal,
  ConfirmModalType,
  EntryModal,
  Modal,
  SizeType,
  Tooltip,
  TagColour,
  Tags,
} from '../../../../components';

import { useContentfulApp } from '../../contentful-app.view-model';

import { EditorProps } from './editor.definition';

import * as S from './editor.styles';

export const Editor = ({ widgetId, children }: EditorProps) => {
  const { state, handlers } = useContentfulApp();
  const [processing, setProcessing] = useState<string | null>(null);

  const widget = handlers.getWidget(widgetId) ?? undefined;

  return (
    <div className={tw(S.EditorCss)}>
      <Tags
        className={tw(S.TagBoxCss)}
        tags={[
          {
            value: 'Published',
            showTag: handlers.resolvePublishedState(widgetId),
            colour: TagColour.GREEN,
          },
          {
            value: 'Draft',
            showTag: !handlers.resolvePublishedState(widgetId),
            colour: TagColour.ORANGE,
          },
          {
            value: 'Unpublished Changes',
            showTag: handlers.resolveUnPublishedChanges(widgetId),
            colour: TagColour.ORANGE,
          },
        ]}
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
            onClick={async (e) => {
              setProcessing('unpublish');
              await handlers.onUnPublish(e, widgetId);
              setProcessing(null);
            }}
            loading={processing === 'unpublish'}
          >
            UnPublish
          </Button>
        ) : (
          <Button
            startIcon={{ icon: 'tick', ariaLabel: 'publish' }}
            buttonVariant={ButtonVariant.SUCCESS}
            onClick={async (e) => {
              setProcessing('publish');
              await handlers.onPublish(e, widgetId);
              setProcessing(null);
            }}
            loading={processing === 'publish'}
          >
            Publish
          </Button>
        )}
        {handlers.resolveUnPublishedChanges(widgetId) && (
          <Tooltip content="Publish Changes" size={SizeType.L}>
            <Button
              icon={{ icon: 'tick', ariaLabel: 'publish' }}
              buttonVariant={ButtonVariant.PRODUCT}
              onClick={async (e) => {
                setProcessing('publishChanges');
                await handlers.onPublish(e, widgetId);
                setProcessing(null);
              }}
              loading={processing === 'publishChanges'}
            />
          </Tooltip>
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
        modalTitle="Edit Component"
      >
        <EntryModal
          type="update"
          onClose={() => handlers.onModalAction(null)}
          dispatches={{ onUpdate: handlers.updateWidget }}
          widget={widget}
        />
      </Modal>
    </div>
  );
};
