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

class Personcl {
  constructor(firstName, BirthYear) {
    this.firstName = firstName;
    this.BirthYear = BirthYear;
  }

  calcAge() {
    console.log(2037 - this.BirthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const nitin = new Personcl('Nitin', 2000);

console.log(nitin);
nitin.calcAge();
nitin.greet();
