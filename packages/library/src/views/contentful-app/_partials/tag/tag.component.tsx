import { ReactElement } from 'react';
import { apply, tw } from 'twind';

import { TagProps } from './tag.definition';

import * as S from './tag.styles';

export const Tag = ({
  published,
  className,
}: TagProps): ReactElement<TagProps> => {
  return (
    <div
      className={tw(
        apply(S.TagCss, published ? S.PublishedCss : S.DraftCss),
        className
      )}
    >
      <h6>{published ? 'Published' : 'Draft'}</h6>
    </div>
  );
};
