function printTextWithDelay(text, seconds) {
  setTimeout(() => {
    console.log(text);
  }, seconds * 1000);
}
printTextWithDelay("My text", 5);

export { printTextWithDelay };