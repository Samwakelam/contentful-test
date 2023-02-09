import { Alignment, MenuDropdown } from '../../../src';

export default {
  ['Main menu']: () => {
    return (
      <div style={{ padding: '1rem' }}>
        <MenuDropdown
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
        <MenuDropdown
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
};
