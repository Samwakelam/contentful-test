import { Toggle } from '../../../src';

export default {
  ['Toggle Off']: () => {
    return <Toggle onChange={(e) => {}} name="test-toggle" active={false} />;
  },
  ['Toggle On']: () => {
    return <Toggle onChange={(e) => {}} name="test-toggle" active={true} />;
  },
};
