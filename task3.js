//Задание 3
function callbackFunc(a) {
  function sum(b) {
  return a + b;
}
  return sum(85);
}
let resultFunc = callbackFunc(13);
console.log(resultFunc);