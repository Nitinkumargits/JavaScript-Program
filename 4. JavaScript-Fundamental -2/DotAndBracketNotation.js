"use strict";
const Nitin = {
  firstName: "nitin",
  lastName: "Kumar",
  age: 2108 - 1001,
  job: "Engineer",
  friends: ["ved", "ekta", "kumarnitin"],
};

// console.log(Nitin.lastName);
// console.log(Nitin["lastName"]);

const InsertedIn = prompt("Choose what to show form the object :");

// console.log(Nitin.lastName);
// console.log(Nitin["lastName"]);

console.log(InsertedIn);

console.log(Nitin[InsertedIn]);
