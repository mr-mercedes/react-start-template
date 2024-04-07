import React from 'react';
import styles from './Logo.module.scss';
import { LogoProps } from './Logo.props';

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <div className={styles.logo} {...props}>
      <span className={styles.text}>panda</span>
    </div>
  );
};
