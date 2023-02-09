import { Input } from '../../../src';

export default {
  ['Basic']: () => (
    <div style={{ width: '34rem', padding: '2rem' }}>
      <Input hasError={false} isValid={false} />
    </div>
  ),
  ['Extra']: () => (
    <div style={{ width: '34rem', padding: '2rem' }}>
      <Input hasError={false} isValid={false} placeholder="Placeholder" />
    </div>
  ),
  ['Is Valid']: () => (
    <div style={{ width: '34rem', padding: '2rem' }}>
      <Input hasError={false} isValid={true} />
    </div>
  ),
  ['Has Error']: () => (
    <div style={{ width: '34rem', padding: '2rem' }}>
      <Input hasError={true} isValid={false} />
    </div>
  ),
};
