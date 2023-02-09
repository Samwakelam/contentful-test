import { useState } from 'react';
import { Button, Card, SlideOutDrawer } from '../../../src';

export default {
  ['Open Drawer']: () => {
    return (
      <SlideOutDrawer
        isOpen={true}
        onRequestClose={() => {}}
        drawerTitle="Drawer Title"
      >
        <h3>Im a basic modal</h3>
      </SlideOutDrawer>
    );
  },
  ['Closed Drawer']: () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <SlideOutDrawer
          drawerTitle="Drawer Title"
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
        >
          <Card>
            <h3>Im a basic drawer</h3>
          </Card>
        </SlideOutDrawer>
      </>
    );
  },
};
