//Задание 2
function checkNumber(x){
  let y = 0;
  if (x > 1000) {
    console.log("Данные не верны");
  } else {
    if (x == 1 || x == 0) {
      console.log("1 и 0 не являются простыми или составными числами");
    } else {
      for (i = 0; i <= x; i++) {
        if (x % i == 0) {
          y++;
        }
      }
      if (y > 2) {
        console.log("Это число составное");
      } else {
        console.log("Это число простое");
      }
    }
  }
};
checkNumber(0);
checkNumber(1);
checkNumber(54);
checkNumber(1016);