'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

function rangeOdd(start, end) {
  const result = [];
  for (let current = start; current <= end; current++) {
    if (current % 2 !== 0) {
      result.push(current);
    }
  }
  return result;
}
module.exports = { rangeOdd };