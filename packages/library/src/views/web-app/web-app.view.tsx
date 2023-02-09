import { useMemo } from 'react';
import { tw } from 'twind';

import { Languages, Regions } from '@sam/types';

import {
  Bar,
  Card,
  Dropdown,
  MenuItemProps,
  TriggerType,
} from '../../components';
import { parseRegion } from '../../lib';

import { WebAppProvider } from './web-app.view-model';
import { WebAppViewProps } from './web-app.definition';

import * as S from './web-app.styles';

export const WebAppComponent = ({}: WebAppViewProps) => {
  const menuItems: MenuItemProps[] = useMemo(() => {
    return [
      {
        text: `${Languages[parseRegion(Regions['en-GB']).languageCode].name} ${
          parseRegion(Regions['en-GB']).countryCode
        }`,
        isActive: true,
      },
      {
        text: `${Languages[parseRegion(Regions['en-US']).languageCode].name} ${
          parseRegion(Regions['en-US']).countryCode
        }`,
        isActive: false,
      },
    ];
  }, []);

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
      <div className={tw(S.ContentCss)}>
        <Card>
          <h6>description here</h6>
        </Card>
      </div>
    </div>
  );
};

export const WebApp = ({}) => (
  <WebAppProvider>
    <WebAppComponent />
  </WebAppProvider>
);
