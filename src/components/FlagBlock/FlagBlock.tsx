import React, { useEffect, useState } from 'react';
import styles from './FlagBlock.module.scss';
import { FlagBlockProps } from './FlagBlock.props';

export const FlagBlock = ({ country }: FlagBlockProps) => {
  const [flag, setFlag] = useState<string>('');
  const getFlag = (country: string) => {
    setFlag(`./header/flags/${country}.svg`);
  };
  useEffect(() => {
    getFlag(country);
  }, []);

  return (
    <div className={styles.flag}>
      <img src={flag} alt={`${country} flag`} />
    </div>
  );
};
