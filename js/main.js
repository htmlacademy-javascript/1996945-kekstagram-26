import _ from 'lodash';

export const getRandomNumberFromRange = (start, end) => {
  if (end <= start) {
    return undefined;
  }
  return _.random(start, end);
};

export const isCorrectLength = (text, size) => text.length <= size;

