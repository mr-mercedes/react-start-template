import React from 'react';
import { InformBlock, SearchBlock } from 'src/components';
import { Avatar } from '../Avatar/Avatar';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.wrapper}>
        <SearchBlock />
        <div className={styles.inform}>
          <InformBlock />
          <Avatar />
        </div>
      </div>
    </header>
  );
};
