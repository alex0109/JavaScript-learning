// Литеральная нотация или литерал обЪекта
let person = Object.assign({
  name: 'Alex',
  id: 10
});

let newPerson = Object.assign({}, person, {
  email: 'some.email@gmail.com'
});

Object.assign(newPerson, {
  name: 'Reybey'
});

console.log(newPerson);


// Спрэд оператор
const person1 = {
  name: 'Alex',
  id: 10
}

const newPerson1 = {
  ...person1,                                   // вот он
  address: 'USA, New York'
};

console.log(newPerson1);


//
const person2 = {
  name: 'Alex',
  id: 10,
  age: 16,
  lastName: 'Reybey'
};

// Object.seal(person2);                      // Предотвращает добавление новых свойств но допускает изменение старых
Object.freeze(person2);                       // Заморозка объекта(Предотвращает изменение старых свойств но допускает добавление новых)
person.name = 'Ivan';

console.log(Object.keys(person2));            // Вывод ключей объекта в виде массива
console.log(Object.values(person2));          // Вывод значений ключей в виде массиве
console.log(Object.entries(person2));         // Вывод многомерного массива в котором первое значение это ключ, а второй значение


// Сравнение двух объектов
const person3 = {
  name: 'Alex',
  id: 10,
  age: 16,
  lastName: 'Reybey'
};

const newPerson2 = Object.assign(person);

const isEqual = Object.is(person, newPerson2);
console.log(isEqual);


// Циклы по массиву из объекта
const person4 = {
  name: 'Alex',
  id: 10,
  age: 16,
  lastName: 'Reybey'
};

// Вывод каждого ключа объекта
const keys = Object.keys(person);
for (const key of keys) {
  console.log(key);
}

// or

for (let items in person4) {
  console.log(items);
}

// Вывод каждого значения объекта
const values = Object.values(person4);
for (const value of values) {
  console.log(value);
}

//or

for (let items in person4) {
  console.log(person4[items]);
}

// Вывод каждого ключа и значения объекта
const entries = Object.entries(person4);
for (const [key, val] of entries) {
  console.log(`${key} : ${val}`);
}
