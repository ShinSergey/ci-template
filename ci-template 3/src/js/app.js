// TODO: write your code here
import sum from './basic';

import fetchData from './http';

// eslint-disable-next-line import/prefer-default-export
export function getLevel(userId) {
  const response = fetchData(`https://server:8080/user/${userId}`);

  // TODO: логика обработки
  if (response.status === 'ok') {
    return `Ваш текущий уровень: ${response.level}`;
  }

  return 'Информация об уровне временно недоступна';
}

// eslint-disable-next-line no-unused-vars
console.log('worked');
// eslint-disable-next-line no-unused-vars
console.log(sum([1, 2]));
