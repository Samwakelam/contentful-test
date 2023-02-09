import React from 'react';
import { InputGroup } from '../../../src';

export default {
  ['Basic']: () => {
    return (
      <div style={{ width: '34rem', padding: '2rem' }}>
        <InputGroup
          label="test"
          showLabel={true}
          labelText="Label"
          name="test"
          placeholder="Placeholder"
          state={{
            value: '',
            error: {
              hasError: false,
              messages: [],
            },
            isValid: false,
          }}
          handlers={{
            onChange: function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error('Function not implemented.');
            },
          }}
        />
      </div>
    );
  },
};
