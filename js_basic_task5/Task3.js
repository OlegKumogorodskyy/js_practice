function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0) 
}

console.log(sum([21, 22, 44, 55, 43, 23, 65, 77]));