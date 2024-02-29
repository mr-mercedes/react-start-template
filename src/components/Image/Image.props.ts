import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  src: string;
  alt: string;
  weight: number;
  height: number;
}
