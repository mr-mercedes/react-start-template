import React from 'react';
import MenuIcon from '../../../public/header/menu.svg';
import styles from './SearchBlock.module.scss';
import { Input } from '../Input/Input';

export const SearchBlock = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <MenuIcon />
      </div>
      <div>
        <Input placeholder={'Search'} isSearch={true} />
      </div>
    </div>
  );
};
