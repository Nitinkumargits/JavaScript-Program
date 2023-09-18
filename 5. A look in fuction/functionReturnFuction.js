"use strict";

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
const greet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};

const greetHey = greet("HEY");

greetHey("Ved");
greetHey("ekta");
greet("hellow")("nitin");
