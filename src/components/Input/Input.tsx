import React, { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes } from 'react';
import cn from 'clsx';
import SearchIcon from '../../../public/header/search.svg';
import styles from './Input.module.scss';

export const Input = forwardRef(
  ({ isSearch, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={styles.wrapper}>
        <input className={cn(styles.input, className)} ref={ref} {...props} />
        {isSearch && <SearchIcon />}
      </div>
    );
  },
);

Input.displayName = 'Input';

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isSearch: boolean;
}
