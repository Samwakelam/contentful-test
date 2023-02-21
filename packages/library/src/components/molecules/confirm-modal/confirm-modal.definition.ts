import { DispatchesType } from '@sam/types';
import { ButtonProps, ButtonVariant } from '../../atoms';

export enum ConfirmModalType {
  DELETE = 'delete',
  LEAVE = 'leave',
  PUBLISH = 'publish',
}

export type CustomContentProps = {
  title?: string;
  description?: string;
  decline?: {
    text?: string;
    action?: () => void;
  };
};

export type WidgetId = string;

export type ConfirmModalProps = {
  type: ConfirmModalType;
  widgetId?: WidgetId;
  dispatches: DispatchesType;
  customContent?: CustomContentProps;
  onClose: () => void;
};

export type ConfirmModalHandlers = {
  resolveOnClickMethod: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  resolveButtonType: () => ButtonVariant;
  resolveConfirmButton: () => Required<Pick<ButtonProps, 'children'>> &
    Pick<ButtonProps, 'startIcon'>;
  resolveDeclineButton: (
    alternativeText?: string
  ) => Required<Pick<ButtonProps, 'children'>> & Pick<ButtonProps, 'startIcon'>;
  resolveAction: (alternativeAction?: () => void) => void;
};

export type ConfirmModalState = {
  isProcessing: boolean;
};
