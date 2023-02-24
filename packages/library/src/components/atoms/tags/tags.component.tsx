import { ReactElement } from 'react';

import { tw, apply } from '@sam/theme/twind';

import { TagProps } from './tags.definition';

import * as S from './tags.styles';

export const Tags = ({ tags, className }: TagProps): ReactElement<TagProps> => {
  const colourMap = {
    blue: S.BlueCss,
    green: S.GreenCss,
    orange: S.OrangeCss,
  };

  return (
    <div className={tw(apply(S.TagContainerCss), className)}>
      {tags.map((tag, index) => {
        if (tag.showTag)
          return (
            <h6
              className={tw(apply(S.TagCss), colourMap[tag.colour])}
              key={`tag-${tag.value}-${index}`}
            >
              {tag.value}
            </h6>
          );

        return null;
      })}
    </div>
  );
};
