/* eslint-disable no-restricted-syntax */
const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

function findIndex(string) {
  const array = string.split('');
  const result = [];
  for (const character of array) {
    if (character === character.toUpperCase()) {
      result.push(character);
    } else {
      const index = characters.indexOf(character);
      if (index === -1) {
        result.push(character);
      } else {
        result.push(index);
      }
    }
  }
  return result;
}

function caesarCipher(string, n) {
  const result = [];
  const indexes = findIndex(string);
  for (const index of indexes) {
    if (typeof index === 'string') {
      const upperChar = characters.indexOf(index.toLowerCase());
      if (upperChar === -1) {
        result.push(index);
      } else {
        const upper = characters[(upperChar + n) % 26];
        result.push(upper.toUpperCase());
      }
    } else {
      result.push(characters[(index + n) % 26]);
    }
  }
  return result;
}

console.log(caesarCipher('Hello,', 3));
