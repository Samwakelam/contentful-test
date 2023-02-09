import { useState } from 'react';
import { CheckboxGroup } from '../../../src/forms/molecules/checkbox-group';

export default {
  ['Unchecked']: () => {
    const [isChecked, setChecked] = useState<boolean>(true);

    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <CheckboxGroup
          labelText="Checkbox"
          value="checkbox"
          id="checkbox"
          checked={isChecked}
          onChecked={({ value, checked }) => setChecked(checked)}
        />
      </div>
    );
  },
  ['Checked']: () => {
    const [isChecked, setChecked] = useState<boolean>(true);

    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <CheckboxGroup
          labelText="Checkbox"
          value="checkbox"
          id="checkbox"
          checked={isChecked}
          onChecked={({ value, checked }) => setChecked(checked)}
        />
      </div>
    );
  },
};
