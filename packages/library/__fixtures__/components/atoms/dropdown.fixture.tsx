/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';
import {
  ActiveStyleType,
  Alignment,
  Dropdown,
  TriggerType,
} from '../../../src';

export default {
  ['Main menu']: () => {
    return (
      <div style={{ padding: '1rem' }}>
        <Dropdown
          trigger={{ type: TriggerType.V_TRIMMED }}
          menuItems={[
            { text: 'Item 1', onClick: async () => alert('Item 1') },
            { text: 'Item 2', onClick: async () => alert('Item 2') },
            { text: 'Item 3', onClick: async () => alert('Item 3') },
          ]}
        />
      </div>
    );
  },
  ['Mini menu']: () => {},
  ['Right align']: () => {
    return (
      <div
        style={{ padding: '1rem', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Dropdown
          trigger={{ type: TriggerType.V_TRIMMED }}
          menuItems={[
            { text: 'Item 1', onClick: async () => alert('Item 1') },
            { text: 'Item 2', onClick: async () => alert('Item 2') },
            { text: 'Item 3', onClick: async () => alert('Item 3') },
          ]}
          align={Alignment.RIGHT}
        />
      </div>
    );
  },
  ['Selected Item Trigger']: () => {
    const [selectedItem, setSelectedItem] = useState<string>('Item 1');

    return (
      <div style={{ padding: '1rem' }}>
        <Dropdown
          trigger={{ type: TriggerType.SELECTED }}
          menuItems={[
            {
              text: 'Item 1',
              onClick: async () => setSelectedItem('Item 1'),
              isActive: selectedItem === 'Item 1',
              activeStyle: [ActiveStyleType.BOLD],
            },
            {
              text: 'Item 2',
              onClick: async () => setSelectedItem('Item 2'),
              isActive: selectedItem === 'Item 2',
              activeStyle: [ActiveStyleType.BOLD],
            },
            {
              text: 'Item 3',
              onClick: async () => setSelectedItem('Item 3'),
              isActive: selectedItem === 'Item 3',
              activeStyle: [ActiveStyleType.BOLD],
            },
          ]}
        />
      </div>
    );
  },
};
