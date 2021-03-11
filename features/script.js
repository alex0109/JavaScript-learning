//
let name = Alex;
let hello = `Hellow ${name}, how are you?`;

//  Тернарный оператор, для простых условий
let num 10;
let msg = num > 10 ? "Loggeg in" : "Error";

// Стрелочные функции
let sum = (a, b) => a + b;

// Спред оператор
let arr1 = [1,2,3];
let arr2 = [4,5,6];
arr1 = [...arr1, ...arr2];

// Суть let и const
let log;
const admin = true;

if (admin) {
  log = "Hello, admin";
} else {
  log = "Error";
}

console.log(log);

// Заполнение массива
let newArr = new Array(10).fill("10");

// Перевернутая строка
ler strrev = str => str.split("").reverse().join("");
console.log(strrev("Reybey"));

// Случайное значение из массива
let cars = ["Honda", "Toyota", "Audi", "BMW", "Seat"];
let randCar = cars[(Math.floor(Math.random() * (cars.length)))]
console.log(randCar);
