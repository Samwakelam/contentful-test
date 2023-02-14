import { ReactElement } from 'react';

import { Card } from '../../atoms';

import { SamTestModelProps } from './sam-test-model.definition';

export const SamTestModel = ({
  name,
  description,
}: SamTestModelProps): ReactElement<SamTestModelProps> => {
  return (
    <Card>
      <p>{description}</p>
    </Card>
  );
};
