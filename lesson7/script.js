var counter  = 0;

var id = setInterval(my_func, 1000);

function my_func() {
  counter++;
  console.log(counter);

  if(counter == 3)
    clearInterval(id); //остановка интервала
}

// АНОНИМНАЯ ФУНКЦИЯ ИНТЕРВАЛ

// setInterval(function() {
//   counter++;
//   console.log(counter);
// }, 1000);

// АНОНИМНАЯ ФУНКЦИЯ ТАЙМЕР

setTimeout(function() {
  console.log("Timer is working!");
}, 2000);
