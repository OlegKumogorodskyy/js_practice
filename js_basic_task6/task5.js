function sequenceSum(begin, end, step) {
  if (begin > end) {
    return 0;
  }

  if ((end - begin) % step !== 0) {
    end -= (end - begin) % step;
  }

  var n = Math.floor((end - begin) / step) + 1;
  return (n * (begin + end)) / 2;
}

console.log(sequenceSum(2, 2, 2));
console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
console.log(sequenceSum(1, 5, 3));
