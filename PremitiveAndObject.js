"use strict";

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);
// //////////////////////////////////////

const me = {
  name: "jonas",
  age: 30,
};

const friend = me;
friend.age = 2;
console.log("Me :", me);
console.log("friend :", friend);
