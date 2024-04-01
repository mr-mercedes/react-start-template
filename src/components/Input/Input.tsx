import React, { ForwardedRef, forwardRef } from 'react';
import { InputProps } from './Input.props';
import SearchIcon from '../../../public/header/search.svg';
import styles from './Input.module.scss';
import cn from 'clsx';

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
