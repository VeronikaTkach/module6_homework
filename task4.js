//Задание 4
function showNumber(start, end) {
    let actual = start;
    let countNumber = setInterval(function() {
      console.log(actual);
      if (actual == end) {
        clearInterval(countNumber);
      }
      actual++;
    }, 1000);
  }
  
  showNumber(5, 15);