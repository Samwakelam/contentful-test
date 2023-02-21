/* eslint-disable import/no-anonymous-default-export */
import { useSelect } from 'react-cosmos/fixture';

import { Button, ButtonVariant } from '../../../src';

export default {
  ['Primary']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRIMARY}
      >
        Primary Button
      </Button>
    );
  },
  ['Secondary']: () => {
    return (
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <Button
          onClick={() => alert('click')}
          buttonVariant={ButtonVariant.SECONDARY}
        >
          Secondary Button
        </Button>
      </div>
    );
  },
  ['Tertiary']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.TERTIARY}
      >
        Tertiary Button
      </Button>
    );
  },
  ['Success']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.SUCCESS}
      >
        Success Button
      </Button>
    );
  },
  ['Product']: () => {
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRODUCT}
      >
        Product Button
      </Button>
    );
  },
  ['None']: () => {
    return (
      <Button onClick={() => alert('click')} buttonVariant={ButtonVariant.NONE}>
        Unstyled Button
      </Button>
    );
  },
  ['Icon at Start']: () => {
    const [Icon] = useSelect('Icon', {
      options: ['bin', 'clock', 'cross', 'pencil', 'plus'],
    });
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRIMARY}
        startIcon={{ icon: Icon, ariaLabel: 'icon' }}
      >
        Primary Button
      </Button>
    );
  },
  ['Icon at End']: () => {
    const [Icon] = useSelect('Icon', {
      options: ['bin', 'clock', 'cross', 'pencil', 'plus'],
    });
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRIMARY}
        endIcon={{ icon: Icon, ariaLabel: 'icon' }}
      >
        Primary Button
      </Button>
    );
  },
  ['Icon Only']: () => {
    const [Icon] = useSelect('Icon', {
      options: ['bin', 'clock', 'cross', 'pencil', 'plus'],
    });
    return (
      <Button
        onClick={() => alert('click')}
        buttonVariant={ButtonVariant.PRIMARY}
        icon={{ icon: Icon, ariaLabel: 'icon' }}
      />
    );
  },
  ['Disabled']: () => {
    const [Variant] = useSelect('Variant', {
      options: [
        ButtonVariant.PRIMARY,
        ButtonVariant.SECONDARY,
        ButtonVariant.TERTIARY,
        ButtonVariant.SUCCESS,
        ButtonVariant.PRODUCT,
      ],
    });
    return (
      <Button onClick={() => alert('click')} buttonVariant={Variant} disabled>
        Disabled Button
      </Button>
    );
  },
  ['Loading']: () => {
    const [Variant] = useSelect('Variant', {
      options: [
        ButtonVariant.PRIMARY,
        ButtonVariant.SECONDARY,
        ButtonVariant.TERTIARY,
        ButtonVariant.SUCCESS,
        ButtonVariant.PRODUCT,
      ],
    });
    return (
      <Button onClick={() => alert('click')} buttonVariant={Variant} loading>
        Loading Button
      </Button>
    );
  },
};
