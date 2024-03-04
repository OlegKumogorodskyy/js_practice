function isAllCaps(string) {
  return string === string.toUpperCase();
}

console.log(isAllCaps("c"));
console.log(isAllCaps("C")); 
console.log(isAllCaps("hello I AM DONALD"));
console.log(isAllCaps("HELLO I AM DONALD")); 
console.log(isAllCaps("ACSKLDFJSgSKLDFJSKLDFJ")); 
console.log(isAllCaps("ACSKLDFJSKSLDFJSKLDFJ")); 
