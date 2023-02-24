import { tw } from '@sam/theme/twind';

import { Button } from '../../atoms';

import {
  ConfirmModalProps,
  ConfirmModalType,
} from './confirm-modal.definition';
import { useConfirmModal } from './confirm-modal.hook';

import * as S from './confirm-modal.styles';

export const ConfirmModal = ({
  type,
  widgetId,
  dispatches,
  customContent,
  onClose,
}: ConfirmModalProps) => {
  const { state, handlers } = useConfirmModal({
    type,
    widgetId,
    dispatches,
    onClose,
  });

  return (
    <div className={tw(S.ConfirmModalCss)}>
      <h2>
        {customContent && customContent.title
          ? customContent.title
          : 'Are you sure?'}
      </h2>
      <p>
        {type === ConfirmModalType.DELETE && 'This will delete this item.'}
        {type === ConfirmModalType.LEAVE &&
          (customContent?.description
            ? customContent.description
            : 'Do you want to exit this screen without saving?')}
        {type === ConfirmModalType.PUBLISH && 'This will publish this page.'}
      </p>
      <div className={tw(S.ButtonWrapperCss)}>
        <Button
          onClick={(e) => handlers.resolveOnClickMethod(e)}
          {...handlers.resolveConfirmButton()}
          disabled={state.isProcessing}
          loading={state.isProcessing}
        />
        <Button
          onClick={() => handlers.resolveAction(customContent?.decline?.action)}
          {...handlers.resolveDeclineButton(customContent?.decline?.text)}
          disabled={state.isProcessing}
        />
      </div>
    </div>
  );
};
