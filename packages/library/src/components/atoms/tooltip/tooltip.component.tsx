import { ReactElement, useState } from 'react';
import { CSSRules, Directive, tw } from 'twind';

import { DirectionType, TooltipProps, SizeType } from './tooltip.definition';

import * as S from './tooltip.styles';

export const Tooltip = ({
  content,
  direction = DirectionType.TOP,
  delay,
  defaultOpen = false,
  size,
  children,
}: TooltipProps): ReactElement<TooltipProps> => {
  let timeout: ReturnType<typeof setTimeout>;

  const [active, setActive] = useState<boolean>(defaultOpen);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className={tw(S.TooltipCss)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div
          className={tw(S.TipStyles, S.TipCss, resolveTipDirection(direction))}
          style={{ width: resolveTipSize(size) }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

const resolveTipDirection = (
  direction: DirectionType
): Directive<CSSRules> | Directive<CSSRules>[] => {
  switch (direction) {
    case DirectionType.TOP: {
      return S.TopCss;
    }
    case DirectionType.RIGHT: {
      return S.RightCss;
    }
    case DirectionType.BOTTOM: {
      return S.BottomCss;
    }
    case DirectionType.LEFT: {
      return S.LeftCss;
    }
    default: {
      return S.TopCss;
    }
  }
};

const resolveTipSize = (size?: SizeType): string => {
  if (!size) return 'unset';
  switch (size) {
    case SizeType.S: {
      return '5rem';
    }
    case SizeType.M: {
      return '7rem';
    }
    case SizeType.L: {
      return '9rem';
    }
    case SizeType.XL: {
      return '13rem';
    }
    default: {
      return 'unset';
    }
  }
};
