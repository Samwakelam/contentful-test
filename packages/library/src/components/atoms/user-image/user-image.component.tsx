import { ReactElement } from 'react';
import { apply, tw } from 'twind';
import { UserImageProps } from './user-image.definition';

import * as S from './user-image.styles';

export const UserImage = ({
  src,
  className,
  grayscale,
}: UserImageProps): ReactElement<UserImageProps> => {
  return (
    <>
      {src ? (
        <img
          src={src}
          className={tw(
            apply(S.UserImageCss, grayscale && S.GrayscaleCss),
            className
          )}
        />
      ) : (
        <img
          src={'./person.png'}
          className={tw(
            apply(S.UserImageCss, grayscale && S.GrayscaleCss),
            className
          )}
        />
      )}
    </>
  );
};
