'use strict';

// const Person = function (firstName, BirthYear) {
//   this.firstName = firstName;
//   this.BirthYear = BirthYear;
//   //Neve do this...
//   // this.calcAge = function () {
//   //   console.log(2037 - this.BirthYear);
//   // };
// };

// const Nitin = new Person('nitin', 2000);
// const ekta = new Person('ekta', 2001);
// const ved = new Person('Ved', 2003);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.BirthYear);
// };

// Nitin.calcAge();
// ekta.calcAge();
// ved.calcAge();

//PROTOTYPE

// const Person = function (firstName, BirthYear) {
//   this.firstName = firstName;
//   this.BirthYear = BirthYear;
// };
// const jonas = new Person('jonas', 1971);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.BirthYear);
// };

// // jonas.calcAge();
// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);

// const arr = [3, 6, 6, 3, 5, 9, 9];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');
// // console.dir(h1);

// const Person = function (firstName, BirthYear) {
//   this.firstName = firstName;
//   this.BirthYear = BirthYear;
// };

// const jonas = new Person('Jonas', 1971);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.BirthYear);
// };
// jonas.calcAge();

// console.log(Person.prototype);
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9];
// console.log(arr);

// challenge 1

// const Car = function (BrandName, Speed) {
//   this.BrandName = BrandName;
//   this.Speed = Speed;
// };

// Car.prototype.accelerate = function () {
//   console.log(this.Speed + 10);
// };
// Car.prototype.break = function () {
//   console.log(this.Speed - 5);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1.break();
// car2.accelerate();

// ES6 CLASSES

// class Personcl {
//   constructor(firstName, BirthYear) {
//     this.firstName = firstName;
//     this.BirthYear = BirthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.BirthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const nitin = new Personcl('Nitin', 2000);

// console.log(nitin);
// nitin.calcAge();
// nitin.greet();
////////////////////////////////////////////

// Setter n Getter

// const account = {
//   owner: 'Jonas',
//   movements: [23, 43, 5, 47, 8, 11],
//   //getter
//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// //getter
// console.log(account.latest);
// //setter
// account.latest = 50;
// console.log(account.movements);

//class declaration

// class Personcl {
//   constructor(fullName, BirthYear) {
//     this.fullName = fullName;
//     this.BirthYear = BirthYear;
//   }

//   get age() {
//     return 2037 - this.BirthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full Name !`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new Personcl('jessica kumari', 1996);
// // console.log(jessica);

//STATIC METHOD

// const PersonStatic = function (firstName, BirthYear) {
//   this.firstName = firstName;
//   this.BirthYear = BirthYear;
// };

// const jonas = new PersonStatic('Jonas', 1996);
// PersonStatic.hey = function () {
//   console.log(`Hey there ${this.firstName}`);
//   console.log(this);
// };

// PersonStatic.hey();
// jonas.hey();

// class PersonStatic {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   static hey() {
//     console.log('Hey there !!!');
//   }
// }

// PersonStatic.hey();
//////////////////////////////////////////

// //Object.create()
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const sarah = Object.create(PersonProto);
// sarah.init('sarah', 1917);
// sarah.calcAge();
//////////////////////////////////////////
//Inheritance

// //Parent class
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// //Child Class

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// //Linking the Parent and student prototype

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const Mike = new Student('Mike', 2000, 'computer Science');
// Mike.calcAge();

// Mike.introduce();

// console.log(Mike.__proto__.__proto__);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
////////////////////////////
//Inheritance Using ES6: Classes

class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class StudentCl extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log('Its good to know !!!');
  }
}

const nitin = new StudentCl('nitin', 2000, 'CSE');
nitin.calcAge();
nitin.introduce();
/*

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) { 
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/
