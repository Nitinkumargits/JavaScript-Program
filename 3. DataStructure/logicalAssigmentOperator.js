"use strict";

const rest1 = {
  name: "Capri",
  //   numGuest: 30,
  numGuest: 0,
};

const rest2 = {
  name: "la Pizza",
  owner: "Giomi Rossi",
};

rest2.owner = rest2.owner && "Nitin";
console.log(rest2);

// rest2.numGuest = rest1.numGuest || 10;
// console.log(rest2);

// OR-Logical Assignment Operator

// rest1.numGuest = rest1.numGuest || 10;
// console.log(rest1); //{ name: 'Capri', numGuest: 30 }

// rest1.numGuest ||= 10;
// console.log(rest1);//{ name: 'Capri', numGuest: 30 }

// Nullish-Coalescing-Logical Assignment Operator

// rest1.numGuest ??= 55;
// console.log(rest1);
