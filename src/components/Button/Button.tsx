import cn from 'clsx';
import React, { PropsWithChildren } from 'react';
import { ButtonProps } from 'src/components/Button/Button.props';
import styles from './Button.module.scss';

export const Button = ({ children, className, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
