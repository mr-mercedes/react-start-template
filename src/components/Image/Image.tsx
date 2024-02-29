import React, { JSX } from 'react';

import { ImageProps } from './Image.props';

export const Image = ({ src, alt, height, weight, className, ...props }: ImageProps): JSX.Element => {
  return <img src={src} alt={alt} height={height} width={weight} className={className} {...props} />;
};
