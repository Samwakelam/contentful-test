import { tw } from 'twind';

import { SlideMenuLinkProps } from './side-menu-link.definition';

import * as S from './side-menu-link.styles';

export const SlideMenuLink = ({
  href,
  isActive,
  label,
}: SlideMenuLinkProps) => {
  return (
    <a
      href={href}
      className={tw(S.SlideMenuLinkCss, isActive && S.SlideMenuLinkActiveCss)}
    >
      {label}
    </a>
  );
};
