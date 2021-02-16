var number = 1;
var string = "stroka";
var booling = true;
var arr = [1, 2, 3, 4];
var matrix = [[1, 2, 3], ["word", 3.5, 1], ["3", 5.5, 2]];

// IF ELSE

if(booling == false){
  console.log("True is true: working");
} else if(booling && number == 2 || number == 1){ // && - and, || - or
  console.log("Else if: working");
} else {
  console.log("Else: working");
}

// FOR

for(var i = 0; i < 5; i++){
  console.log(i);
}

// WHILE

var j = 100;
while(j > 10){
  console.log(j);
  j -= 10;
}

// DO WHILE

var x = 100;
do {
  console.log(x);
} while(x < 50);
