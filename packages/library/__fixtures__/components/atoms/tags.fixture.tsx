/* eslint-disable import/no-anonymous-default-export */
import { ReactElement } from 'react';
import { TagColour, Tags } from '../../../src';

const Wrapper = ({ children }: { children: ReactElement }) => (
  <div
    style={{
      backgroundColor: 'white',
      padding: '1rem',
    }}
  >
    {children}
  </div>
);

export default {
  ['Green']: () => {
    return (
      <Wrapper>
        <Tags
          tags={[
            {
              value: 'Tag',
              showTag: true,
              colour: TagColour.GREEN,
            },
          ]}
        />
      </Wrapper>
    );
  },
  ['Blue']: () => {
    return (
      <Wrapper>
        <Tags
          tags={[
            {
              value: 'Tag',
              showTag: true,
              colour: TagColour.BLUE,
            },
          ]}
        />
      </Wrapper>
    );
  },
  ['Orange']: () => {
    return (
      <Wrapper>
        <Tags
          tags={[
            {
              value: 'Tag',
              showTag: true,
              colour: TagColour.ORANGE,
            },
          ]}
        />
      </Wrapper>
    );
  },
  ['Multiple Tags']: () => {
    return (
      <Wrapper>
        <Tags
          tags={[
            {
              value: 'Tag',
              showTag: true,
              colour: TagColour.GREEN,
            },
            {
              value: 'Tag',
              showTag: true,
              colour: TagColour.BLUE,
            },
            {
              value: 'Tag',
              showTag: true,
              colour: TagColour.ORANGE,
            },
          ]}
        />
      </Wrapper>
    );
  },
};
