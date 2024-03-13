const arr1 = [11, 34, 55, 65, 77, 88, 9, 13];
const k = 4; 

const maxProduct = (arr, k) => {
  const sortedArr = [...arr].sort((a, b) => b - a);
  let product = 1;
  for (let i = 0; i < k; i++) {
    product *= sortedArr[i];
  }
  return product;
};

console.log(maxProduct(arr1, k)); 
