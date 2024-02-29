import React, { JSX } from 'react';
import { Image } from './Image/Image';
import styles from './Interview.scss';

const url =
  'https://sun1-19.userapi.com/impg/KqzSoXgVmdBwFXUmpmi3T9xiuGE5Rt-_KlQkyA/0tBDasg5GBY.jpg?size=1440x2160&quality=96&sign=a0710fc561e06bde8195c4beac8ca66d&type=album';

export const Interview = (): JSX.Element => {
  return (
    <div>
      <div className={styles.content}>
        <Image src={url} alt={styles.photo} weight={400} height={600} />
        <div className={styles.personal_data}>
          <div>
            <h1>Страница визитка</h1>
            <p className={styles.surname}>Фамилия : Боровиков</p>
            <p className={styles.name}>Имя : Сергей</p>
            <p className={styles.middle}>Отчество : Владимирович</p>
            <p className={styles.date_of_birthday}>Дата рождения: 16 октября 1991 год</p>
          </div>
          <div>
            <h3>Обо мне</h3>
            <p>
              Привет, и спасибо, что посетил мою страницу. Я разработчик Backend на Java 17+, так же в стэке технологий
              которыми я владею есть Spring / Spring Boot и PostgreSQL. Я разрабатываю Web приложения около 2х лет.
            </p>
            <p>
              Сейчас с расширением функцианала появилась потребность в получении компетенций в Frontend разработке. Хочу
              научится писать {'Чистые'} компоненты с возможностью переиспользования. Развить навык постороения
              архетиктуры Web приложения.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
