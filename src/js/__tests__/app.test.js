import demo from '../app';

test('demo', () => {
  const value = '123';

  const received = demo(value);
  const expected = '123';

  expect(received).toBe(expected);
});
