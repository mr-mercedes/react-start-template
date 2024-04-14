import React, { DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from 'react';
import cn from 'clsx';
import CloseIcon from '../../../public/close.svg';
import styles from './ModalWindow.module.scss';

export const ModalWindow = ({ visible, children, ...props }: ModalWindowProps) => {
  const [show, setShow] = useState<boolean>(visible);
  return (
    <div
      className={cn(styles.modal, {
        [styles.hidden]: !show,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.window} {...props}>
          <button className={styles.close_button} onClick={() => setShow(!show)}>
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export interface ModalWindowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean;
  children: ReactNode;
}
