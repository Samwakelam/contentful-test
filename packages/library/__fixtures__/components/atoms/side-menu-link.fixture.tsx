import { SlideMenuLink } from '../../../src';

export default {
  ['Default']: () => {
    return (
      <div
        style={{
          width: '300px',
          background: '#f5f5f5',
          padding: '20px',
        }}
      >
        <SlideMenuLink isActive={false} href={'/'} label="Side Bar Link" />
      </div>
    );
  },
  ['Is Active']: () => {
    return (
      <div
        style={{
          width: '300px',
          background: '#f5f5f5',
          padding: '20px',
        }}
      >
        <SlideMenuLink isActive={true} href={'/'} label="Side Bar Link" />
      </div>
    );
  },
};
