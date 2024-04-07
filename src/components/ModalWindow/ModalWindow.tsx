import cn from 'clsx';
import React, { memo, MouseEvent, useRef, useState } from 'react';
import CloseIcon from '../../../public/close.svg';
import styles from './ModalWindow.module.scss';
import { ModalWindowProps } from './ModalWindow.props';

export const ModalWindow = memo(({ visible, handleClose, children, ...props }: ModalWindowProps) => {
  const [show, setShow] = useState<boolean>(visible);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayClick = (e: MouseEvent) => {
    if (e.target === modalRef.current) {
      setShow(!show);
      handleClose();
    }
  };
  return (
    <div
      className={cn(styles.modal, {
        [styles.hidden]: !show,
      })}
    >
      <div className={styles.wrapper} onClick={overlayClick} ref={modalRef}>
        <div className={styles.window} {...props}>
          <button
            className={styles.close_button}
            onClick={() => {
              setShow(!show);
              handleClose();
            }}
          >
            <CloseIcon />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
});

ModalWindow.displayName = 'ModalWindow';
