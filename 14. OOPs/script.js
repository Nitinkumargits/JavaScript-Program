'use strict';

const Person = function (firstName, BirthYear) {
  this.firstName = firstName;
  this.BirthYear = BirthYear;
  //Neve do this...
  this.calcAge = function () {
    console.log(2037 - this.BirthYear);
  };
};

const Nitin = new Person('nitin', 2000);
const ekta = new Person('ekta', 2001);
const ved = new Person('Ved', 2003);
console.log(Nitin, ekta, ved);
