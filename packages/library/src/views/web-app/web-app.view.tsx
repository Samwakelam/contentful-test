import { useMemo } from 'react';

import { tw } from '@sam/theme/twind';
import { Languages } from '@sam/types';

import {
  Bar,
  Card,
  Dropdown,
  MenuItemProps,
  TriggerType,
  ActiveStyleType,
} from '../../components';
import { parseRegion } from '../../lib';

import { useWebApp, WebAppProvider } from './web-app.view-model';
import { WebAppProps } from './web-app.definition';

import * as S from './web-app.styles';

export const WebAppComponent = ({ regions, children }: WebAppProps) => {
  const { state, handlers } = useWebApp();

  const menuItems: MenuItemProps[] = useMemo(() => {
    const items: MenuItemProps[] = [];

    regions.forEach((region) => {
      items.push({
        text: `${Languages[parseRegion(region).languageCode].name} ${
          parseRegion(region).countryCode
        }`,
        isActive: state.activeRegion === region.iso,
        activeStyle: [ActiveStyleType.BOLD],
        onClick: () => handlers.onRegionSelect(region.iso),
      });
    });

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [regions, state.activeRegion]);

  return (
    <div className={tw(S.WebAppCss)}>
      <Bar>
        <div className={tw(S.BoxCss)}>
          <h3 className={tw(S.SubtitleCss)}>Region</h3>
          <Dropdown
            trigger={{ type: TriggerType.SELECTED }}
            menuItems={menuItems}
          />
        </div>
      </Bar>
      <div className={tw(S.ContentCss)}>{children}</div>
    </div>
  );
};

export const WebApp = (props: WebAppProps) => (
  <WebAppProvider dispatches={props.dispatches}>
    <WebAppComponent {...props} />
  </WebAppProvider>
);
