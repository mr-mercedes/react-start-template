import React from 'react';
import { useTheme } from 'src/context/ThemeContext';
import ChatIcon from '../../../public/header/chat.svg';
import NotActiveLikeIcon from '../../../public/header/heart.svg';
import NotificationIcon from '../../../public/header/notification.svg';
import SettingsIcon from '../../../public/header/settings.svg';
import styles from './LinkBlock.module.scss';

export const LinkBlock = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
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
      <a href="#" onClick={changeTheme}>
        <SettingsIcon />
      </a>
    </div>
  );
};
