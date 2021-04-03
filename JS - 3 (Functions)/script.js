// FIRST FUNCTION

function info(word){
  console.log("Hello " + word);
}

var key = prompt();

info(key);

// SECOND FUNCTION

function summ(a, b){
  var res = a + b;
  console.log(res);

  info(res); //можно вызывать одну функ в другой, но внутри функ нельзя создать другую функ
}

summ(5, 7);

// THIRD FUNCTION

function summ1(arr){
  var sum = 0;

  for(var i = 0; i < arr.length; i++)
    sum += arr[i];

  return sum;
}

var array_0 = [6, 8, 1];
var array_1 = [9, 5, 4];
var array_2 = [3, 2, 7];

var result = summ1(array_0);
console.log(res);

summ1(array_1);
summ1(array_2);
