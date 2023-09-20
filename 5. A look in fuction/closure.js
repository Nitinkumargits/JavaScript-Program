"use strict";

// let f;

// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // RE-assign f fuciton

// h();
// f();

//Example 2

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passenger`);
    console.log(`there are 3 group, Each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} second .`);
};

boardPassenger(180, 3);
