function capitalize(string) {
  return string.CharAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;