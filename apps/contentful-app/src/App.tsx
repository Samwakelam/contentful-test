import { locations } from '@contentful/app-sdk';
import { useSDK } from '@contentful/react-apps-toolkit';
import { useMemo } from 'react';

import { globalStyles } from '@sam/library';
import { themeConfig, setup, tw } from '@sam/theme/twind';

import ConfigScreen from './locations/ConfigScreen';
import Dialog from './locations/Dialog';
import EntryEditor from './locations/EntryEditor';
import Field from './locations/Field';
import Page from './locations/Page';
import Sidebar from './locations/Sidebar';
import Home from './locations/Home';

const ComponentLocationSettings = {
  [locations.LOCATION_APP_CONFIG]: ConfigScreen,
  [locations.LOCATION_ENTRY_FIELD]: Field,
  [locations.LOCATION_ENTRY_EDITOR]: EntryEditor,
  [locations.LOCATION_DIALOG]: Dialog,
  [locations.LOCATION_ENTRY_SIDEBAR]: Sidebar,
  [locations.LOCATION_PAGE]: Page,
  [locations.LOCATION_HOME]: Home,
};

import './styles/reset.css';

const App = () => {
  const sdk = useSDK();
  setup(themeConfig);

  const Component = useMemo(() => {
    for (const [location, component] of Object.entries(
      ComponentLocationSettings
    )) {
      if (sdk.location.is(location)) {
        return component;
      }
    }
  }, [sdk.location]);

  return Component ? (
    <div className={tw(globalStyles)} style={{ width: '100%' }}>
      <Component />
    </div>
  ) : null;
};

export default App;
