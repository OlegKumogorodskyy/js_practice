function filterList(list) {
  return list.filter((element) => typeof element === "number");
}

console.log(filterList([1, 2, "a", "b"]));
console.log(filterList([1, "a", "b", 0, 15]));
console.log(filterList([1, 2, "asf", "1", "123", 123]));
