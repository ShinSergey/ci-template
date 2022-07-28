// TODO: write your code here
import sum from './basic';

export default function charStatus(char) {
  if (char.health > 50) {
    return 'healthy';
  } if (char.health < 51 && char.health > 14) {
    return 'wounded';
  }
  return 'critical';
}
// eslint-disable-next-line
console.log('worked');
// eslint-disable-next-line
console.log(sum([1, 2]));
