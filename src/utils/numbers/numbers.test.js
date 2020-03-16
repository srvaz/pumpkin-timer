import { dateToTime, normalizeNumber } from './index';

test('normalized number', () => {
  expect(normalizeNumber(4)).toEqual('04');
  expect(normalizeNumber(10)).toEqual('10');
});

test('returns a time in minutes', () => {
  const now = new Date();
  const startTime = now.getTime();
  const endTime = now.setSeconds(now.getSeconds() + 60);

  expect(dateToTime(startTime, endTime)).toEqual({
    distance: 60000,
    minutes: 1,
    seconds: 0,
  });
});
