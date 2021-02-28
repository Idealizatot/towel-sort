
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (typeof matrix === 'undefined' || !matrix.length) {
    return [];
  }

  let result = [];

  matrix.forEach((element, i) => {
    result.push(...(i % 2 ? element.reverse() : element))
  });

  return result;
}
