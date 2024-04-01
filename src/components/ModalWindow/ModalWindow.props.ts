import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ModalWindowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean;
  children: ReactNode;
}
