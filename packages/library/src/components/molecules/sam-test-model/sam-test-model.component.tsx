import { ReactElement } from 'react';

import { tw } from '@sam/theme/twind';

import { Card } from '../../atoms';

import { SamTestModelProps } from './sam-test-model.definition';

import * as S from './sam-test-model.styles';

export const SamTestModel = ({
  name,
  id,
  description,
}: SamTestModelProps): ReactElement<SamTestModelProps> => {
  return (
    <Card>
      <div className={tw(S.SamTestModelCss)}>
        <p>{description}</p>
        <p>ID: {id}</p>
      </div>
    </Card>
  );
};
