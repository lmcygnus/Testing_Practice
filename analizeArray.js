/* eslint-disable no-restricted-syntax */
function averageArray(array) {
  const total = array.reduce((m, n) => m + n, 0);
  const average = total / array.length;
  return average;
}

function minimun(array) {
  let min = array[0];
  for (const n of array) {
    if (n < min) {
      min = n;
    }
  }
  return min;
}

function maximun(array) {
  let max = array[0];
  for (const n of array) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

function analizeArray(array) {
  const object = {
    average: averageArray(array),
    min: minimun(array),
    max: maximun(array),
    length: array.length,
  };
  return object;
}

module.exports = analizeArray;

console.log(analizeArray([1, 8, 3, 4, 2, 6]));
