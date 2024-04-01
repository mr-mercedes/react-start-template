import React from 'react';
import ChatIcon from '../../../public/header/chat.svg';
import NotActiveLikeIcon from '../../../public/header/heart.svg';
import NotificationIcon from '../../../public/header/notification.svg';
import SettingsIcon from '../../../public/header/settings.svg';
import styles from './LinkBlock.module.scss';

export const LinkBlock = () => {
  return (
    <div className={styles.links}>
      <a href="#">
        <NotActiveLikeIcon />
      </a>
      <a href="#">
        <NotificationIcon />
      </a>
      <a href="#">
        <ChatIcon />
      </a>
      <a href="#">
        <SettingsIcon />
      </a>
    </div>
  );
};
