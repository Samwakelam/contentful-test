import { useSelect } from 'react-cosmos/fixture';

import { Bar } from '../../../src';

export default {
  ['Basic']: () => {
    return (
      <Bar>
        <h1>A basic Bar</h1>
      </Bar>
    );
  },
  ['Menu bar']: () => {
    const [menuFixed] = useSelect('menuFixed', { options: ['true', 'false'] });

    return (
      <Bar
        menu={{
          onClick: () => alert('click'),
          isFixed: menuFixed ? true : false,
        }}
      >
        <h1>A basic Bar</h1>
        <p>Resize the window to see the menu button's behavior</p>
      </Bar>
    );
  },
};
