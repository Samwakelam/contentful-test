import { tw } from 'twind';
import { WebAppProvider } from './web-app.view-model';

import * as styles from './web-app.styles';
import { Icon } from '@sam/icons';

export const WebAppComponent = ({}) => {
  return <div className={tw(styles.WebAppCss)}></div>;
};

export const WebApp = ({}) => (
  <WebAppProvider>
    <WebAppComponent />
  </WebAppProvider>
);
