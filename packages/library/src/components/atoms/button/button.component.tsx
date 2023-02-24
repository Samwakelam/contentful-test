import { apply, CSSRules, Directive, tw } from '@sam/theme/twind';
import { Icon } from '@sam/icons';

import { ButtonProps, ButtonVariant } from './button.definition';

import * as S from './button.styles';

export const Button = ({
  buttonVariant = ButtonVariant.PRIMARY,
  children,
  className,
  onClick,
  icon,
  startIcon,
  endIcon,
  disabled = false,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={tw(
        apply(resolveButtonVariant(buttonVariant), icon && S.IconButtonCss),
        className
      )}
      disabled={disabled}
    >
      {loading && (
        <span className={tw(S.LoadingCss)}>
          {loading && <Icon icon="spinner" ariaLabel="loading" />}
        </span>
      )}
      <span className={tw(S.ButtonContentContainerCss)} aria-hidden={loading}>
        {startIcon && <Icon {...startIcon} />}
        {children && children}
        {icon && <Icon {...icon} />}
        {endIcon && <Icon {...endIcon} />}
      </span>
    </button>
  );
};

const resolveButtonVariant = (
  variant: ButtonVariant
): Directive<CSSRules> | Directive<CSSRules>[] => {
  switch (variant) {
    case ButtonVariant.SECONDARY: {
      return [S.buttonCss, S.SecondaryButtonCss];
    }
    case ButtonVariant.TERTIARY: {
      return [S.buttonCss, S.TertiaryButtonCss];
    }
    case ButtonVariant.SUCCESS: {
      return [S.buttonCss, S.SuccessButtonCss];
    }
    case ButtonVariant.PRODUCT: {
      return [S.buttonCss, S.ProductButtonCss];
    }
    case ButtonVariant.NONE: {
      return S.UnstyledButtonCss;
    }
    default: {
      return S.buttonCss;
    }
  }
};
