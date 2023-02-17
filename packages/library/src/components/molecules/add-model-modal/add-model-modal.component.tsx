import { tw } from 'twind';

import { InputGroup } from '../../../forms';
import { Button, ButtonVariant } from '../../atoms';

import { useAddModelModal } from './add-model-modal.hook';
import { AddModelModalProps } from './add-model-modal.definition';

import * as S from './add-model-modal.styles';

export const AddModelModal = ({ onClose, dispatches }: AddModelModalProps) => {
  const { state, handlers } = useAddModelModal({ onClose, dispatches });

  return (
    <div className={tw(S.AddModelModalCss)}>
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
        onClick={(e) => handlers.onCreate(e)}
      >
        Create
      </Button>
    </div>
  );
};
