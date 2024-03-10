const arr1 = [11, 34, 55, 65, 77, 88, 9, 13];
const min = Math.min(...arr1);
const minIndex = arr1.indexOf(min);
const result = [...arr1.slice(0, minIndex), ...arr1.slice(minIndex + 1)];

console.log(result)
