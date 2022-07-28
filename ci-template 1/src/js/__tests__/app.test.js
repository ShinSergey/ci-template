import charStatus from '../app';

test('should healthy', () => {
  const result = charStatus({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test('should wounded', () => {
  const result = charStatus({ name: 'Маг', health: 40 });

  expect(result).toBe('wounded');
});

test('should critical', () => {
  const result = charStatus({ name: 'Маг', health: 10 });

  expect(result).toBe('critical');
});
