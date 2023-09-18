"use strict";
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");

  return [first.toUpperCase(), ...other].join(" ");
};

const transform = function (str, fn) {
  console.log(`original String : ${str}`);
  console.log(`Transform string : ${fn(str)}`);
  console.log(`Transform by : ${fn.name}`);
};

// transform("JavaScript is best", upperFirstWord);
transform("JavaScript is best", oneWord);
