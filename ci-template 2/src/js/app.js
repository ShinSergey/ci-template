// TODO: write your code here
import sum from './basic';

export const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export function heroesToOrder(arr) {
  return arr.sort((a, b) => a.health - b.health);
}

heroesToOrder(heroes);

// eslint-disable-next-line
console.log('worked');

// eslint-disable-next-line
console.log(sum([1, 2]));
