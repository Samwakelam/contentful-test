import { ReactElement } from 'react';
import { useSelect } from 'react-cosmos/fixture';

import { DirectionType, SizeType, Tooltip } from '../../../src';

const Wrapper = ({ children }: { children: ReactElement }) => (
  <div
    style={{
      backgroundColor: 'white',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {children}
  </div>
);

const HoverComponent = () => (
  <div
    style={{
      backgroundColor: 'pink',
      color: 'black',
      padding: '12px',
      paddingLeft: '32px',
      paddingRight: '32px',
      borderRadius: '8px',
      cursor: 'pointer',
    }}
  >
    Hover over me
  </div>
);

export default {
  ['Default Open Off']: () => {
    return (
      <Wrapper>
        <Tooltip content="tool tip" direction={DirectionType.TOP}>
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
  ['Slower Delay']: () => {
    return (
      <Wrapper>
        <Tooltip content="tool tip" direction={DirectionType.TOP} delay={800}>
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
  ['Top']: () => {
    return (
      <Wrapper>
        <Tooltip
          content="tool tip"
          direction={DirectionType.TOP}
          defaultOpen={true}
        >
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
  ['Right']: () => {
    return (
      <Wrapper>
        <Tooltip
          content="tool tip"
          direction={DirectionType.RIGHT}
          defaultOpen={true}
        >
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
  ['Bottom']: () => {
    return (
      <Wrapper>
        <Tooltip
          content="tool tip"
          direction={DirectionType.BOTTOM}
          defaultOpen={true}
        >
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
  ['Left']: () => {
    return (
      <Wrapper>
        <Tooltip
          content="tool tip"
          direction={DirectionType.LEFT}
          defaultOpen={true}
        >
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
  ['Longer Content']: () => {
    const [TooltipSize] = useSelect('size', {
      options: [SizeType.S, SizeType.M, SizeType.L, SizeType.XL],
    });

    const [TooltipDirection] = useSelect('direction', {
      options: [
        DirectionType.TOP,
        DirectionType.RIGHT,
        DirectionType.BOTTOM,
        DirectionType.LEFT,
      ],
    });

    return (
      <Wrapper>
        <Tooltip
          content="Hide the element from everyone"
          direction={TooltipDirection}
          defaultOpen={true}
          size={TooltipSize}
        >
          <HoverComponent />
        </Tooltip>
      </Wrapper>
    );
  },
};
