import React from 'react';
import { LinkBlock } from 'src/components';
import { FlagBlock } from '../FlagBlock/FlagBlock';
import styles from './InformBlock.module.scss';

export const InformBlock = () => {
  return (
    <div className={styles.inform}>
      <FlagBlock country={'be'} />
      <LinkBlock />
    </div>
  );
};
