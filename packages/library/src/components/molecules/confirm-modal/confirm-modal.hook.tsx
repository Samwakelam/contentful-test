import { useState } from 'react';

import { Hook } from '@sam/types';

import { ButtonVariant } from '../../atoms';

import {
  ConfirmModalHandlers,
  ConfirmModalProps,
  ConfirmModalState,
  ConfirmModalType,
} from './confirm-modal.definition';

export const useConfirmModal = ({
  type,
  widgetId,
  dispatches,
  onClose,
}: Omit<ConfirmModalProps, 'customContent'>): Hook<
  ConfirmModalState,
  ConfirmModalHandlers
> => {
  const { onDelete } = dispatches;

  const [state, setState] = useState<ConfirmModalState>({
    isProcessing: false,
  });

  const deleteItem = async () => {
    try {
      setState((prevState) => ({ ...prevState, isProcessing: true }));

      await onDelete(widgetId, () => {});
      onClose();
    } catch (error) {
      throw new Error(`useConfirmModal deleteItem: ${error}`);
    }
  };

  const publishPage = async () => {
    setState((prevState) => ({ ...prevState, isProcessing: true }));
  };

  const savePage = async () => {
    setState((prevState) => ({ ...prevState, isProcessing: true }));
  };

  const resolveOnClickMethod: ConfirmModalHandlers['resolveOnClickMethod'] =
    async (event) => {
      event.preventDefault();

      switch (type) {
        case ConfirmModalType.DELETE: {
          await deleteItem();
          break;
        }
        case ConfirmModalType.LEAVE: {
          await savePage();
          break;
        }
        case ConfirmModalType.PUBLISH: {
          await publishPage();
          break;
        }
      }
    };

  const resolveButtonType: ConfirmModalHandlers['resolveButtonType'] = () => {
    switch (type) {
      case ConfirmModalType.DELETE: {
        return ButtonVariant.PRIMARY;
      }
      case ConfirmModalType.LEAVE: {
        return ButtonVariant.PRODUCT;
      }
      case ConfirmModalType.PUBLISH: {
        return ButtonVariant.SUCCESS;
      }
    }
  };

  const resolveConfirmButton: ConfirmModalHandlers['resolveConfirmButton'] =
    () => {
      switch (type) {
        case ConfirmModalType.DELETE: {
          return { children: 'Delete' };
        }
        case ConfirmModalType.LEAVE: {
          return {
            children: 'Save',
            startIcon: { icon: 'download', ariaLabel: 'save' },
            buttonVariant: ButtonVariant.PRODUCT,
          };
        }
        case ConfirmModalType.PUBLISH: {
          return {
            children: 'Publish',
            startIcon: { icon: 'tick', ariaLabel: 'tick' },
            buttonVariant: ButtonVariant.SUCCESS,
          };
        }
      }
    };

  const resolveDeclineButton: ConfirmModalHandlers['resolveDeclineButton'] = (
    alternativeText
  ) => {
    switch (type) {
      case ConfirmModalType.DELETE: {
        return { children: 'Close', buttonVariant: ButtonVariant.TERTIARY };
      }
      case ConfirmModalType.LEAVE: {
        return {
          children: alternativeText ? alternativeText : 'Exit without saving',
          buttonVariant: ButtonVariant.TERTIARY,
        };
      }
      case ConfirmModalType.PUBLISH: {
        return { children: 'Close', buttonVariant: ButtonVariant.TERTIARY };
      }
    }
  };

  const resolveAction = (alternativeAction?: () => void) => {
    if (alternativeAction) {
      alternativeAction();
    }
    onClose();
  };

  return {
    state,
    handlers: {
      resolveOnClickMethod,
      resolveButtonType,
      resolveConfirmButton,
      resolveDeclineButton,
      resolveAction,
    },
  };
};
