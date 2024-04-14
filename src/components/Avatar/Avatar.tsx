import React from 'react';
import { Image } from '../Image/Image';
import styles from './Avatar.module.scss';

const url =
  'https://sun1-19.userapi.com/impg/KqzSoXgVmdBwFXUmpmi3T9xiuGE5Rt-_KlQkyA/0tBDasg5GBY.jpg?size=1440x2160&quality=96&sign=a0710fc561e06bde8195c4beac8ca66d&type=album';
export const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <Image src={url} alt={'avatar'} weight={62} height={62} />
    </div>
  );
};
