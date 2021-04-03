// CLASS

class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }

  // FUNCTION IN CLASS

  info() {
    console.log("Human: " + this.name + ". Age: " + this.age);
  }
}

// CREATE OBJECT BASED ON CLASS

var alex = new Person('Alex', 16, true);

console.log(alex.name);

alex.name = 'Alex1';

// CALL FUNCTION FROM CLASS

alex.info();

console.log(alex);
console.log(alex.name);
