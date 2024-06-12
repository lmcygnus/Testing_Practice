function capitalize(string) {
  const firstCharacter = string.charAt(0).toUpperCase();
  const spare = string.slice(1);
  return firstCharacter + spare;
}

module.exports = capitalize;