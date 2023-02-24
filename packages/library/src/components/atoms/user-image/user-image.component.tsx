/* eslint-disable @next/next/no-img-element */
import { ReactElement } from 'react';

import { tw, apply } from '@sam/theme/twind';

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
          alt="user image"
        />
      ) : (
        <img
          src={'./person.png'}
          className={tw(
            apply(S.UserImageCss, grayscale && S.GrayscaleCss),
            className
          )}
          alt="placeholder user image"
        />
      )}
    </>
  );
};
