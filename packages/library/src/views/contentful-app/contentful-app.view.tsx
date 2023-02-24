import { useMemo } from 'react';
import { tw } from '@sam/theme/twind';

import { Languages } from '@sam/types';

import {
  Button,
  Modal,
  Placeholder,
  EntryModal,
  Dropdown,
  TriggerType,
  ActiveStyleType,
  MenuItemProps,
} from '../../components';
import { parseRegion, renderWidgets } from '../../lib';

import { ContentfulAppProps } from './contentful-app.definition';
import {
  ContentfulAppProvider,
  useContentfulApp,
} from './contentful-app.view-model';

import { Editor } from './_partials';

import * as S from './contentful-app.styles';

export const ContentfulAppComponent = ({}: ContentfulAppProps) => {
  const { state, handlers } = useContentfulApp();

  const menuItems: MenuItemProps[] = useMemo(() => {
    const items: MenuItemProps[] = [];

    state.regions.forEach((region) => {
      items.push({
        text: `${Languages[parseRegion(region).languageCode].name} ${
          parseRegion(region).countryCode
        }`,
        isActive: state.selectedRegion.iso === region.iso,
        activeStyle: [ActiveStyleType.BOLD],
        onClick: () => handlers.onRegionSelect(region),
      });
    });

    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.regions, state.selectedRegion]);

  return (
    <div className={tw(S.ContentfulAppCss)}>
      <div className={tw(S.ColumnCss, S.ColumnOneCss)}>
        <Dropdown
          trigger={{ type: TriggerType.SELECTED }}
          menuItems={menuItems}
        />
        {renderWidgets(
          state.widgets,
          state.selectedRegion.iso,
          state.defaultRegion.iso,
          Editor
        )}
      </div>
      <div className={tw(S.ColumnCss)}>
        <Placeholder className={tw(S.PlaceholderCss)}>
          <Button
            startIcon={{ icon: 'plus', ariaLabel: 'plus' }}
            onClick={() => handlers.onModalAction('add')}
          >
            Add Component
          </Button>
        </Placeholder>
      </div>
      <Modal
        modalTitle="Add Component"
        onRequestClose={() => handlers.onModalAction(null)}
        isOpen={state.openModal === 'add'}
      >
        <EntryModal
          type="create"
          onClose={() => handlers.onModalAction(null)}
          dispatches={{ onAdd: handlers.addWidget }}
        />
      </Modal>
    </div>
  );
};

export const ContentfulApp = (props: ContentfulAppProps) => {
  return (
    <ContentfulAppProvider>
      <ContentfulAppComponent {...props} />
    </ContentfulAppProvider>
  );
};
