import { heroesToOrder, heroes } from '../app';

test('should order', () => {
  const result = heroesToOrder(heroes);

  expect(result).toEqual([
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 100 },
  ]);
});
