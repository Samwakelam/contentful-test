import { ReactElement } from 'react';
import { SamTestModelProps } from './sam-test-model.definition';

export const SamTestModel = ({
  name,
  description,
}: SamTestModelProps): ReactElement<SamTestModelProps> => {
  return <p>{description}</p>;
};
