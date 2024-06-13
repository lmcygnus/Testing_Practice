const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function findIndex(string) {
  const array = string.split('');
  const result = [];
  for (const character of array) {
    const index = characters.indexOf(character.toLowerCase());
    result.push(index);
  }
  return result;
}

function caesarCipher(string, n) {
  const result = [];
  const indexes = findIndex(string);
  for (const index of indexes) {
    result.push(characters[index + n]);
  }
  return result;
}

console.log(caesarCipher('hello', 3));
