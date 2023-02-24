import { tw } from '@sam/theme/twind';

import { InputGroup } from '../../../forms';
import { Button, ButtonVariant } from '../../atoms';

import { useEntryModal } from './entry-modal.hook';
import { EntryModalProps } from './entry-modal.definition';

import * as S from './entry-modal.styles';

export const EntryModal = ({
  type = 'create',
  onClose,
  dispatches,
  widget,
}: EntryModalProps) => {
  const { state, handlers } = useEntryModal({
    type,
    onClose,
    dispatches,
    widget,
  });

  return (
    <div className={tw(S.EntryModalCss)}>
      <InputGroup
        label="Name"
        showLabel
        labelText="Name"
        name="add-modal-name"
        {...state.nameInput}
      />

      <InputGroup
        label="en-us-description"
        showLabel
        labelText="en-US Description (Default)"
        name="add-modal-en-us-description"
        {...state.usDescriptionInput}
      />

      <InputGroup
        label="en-gb-description"
        showLabel
        labelText="en-GB Description"
        name="add-modal-en-gb-description"
        {...state.gbDescriptionInput}
      />

      <Button
        buttonVariant={ButtonVariant.PRIMARY}
        disabled={handlers.resolveIsButtonDisabled() || state.isProcessing}
        loading={state.isProcessing}
        {...handlers.resolveSubmitButton()}
      />
    </div>
  );
};
