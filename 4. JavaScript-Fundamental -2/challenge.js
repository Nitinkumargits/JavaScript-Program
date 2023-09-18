"use strict";

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 33, 44, 555, 66, 77];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  total.push(tip + bills[i]);
}

// console.log(bills, tips, total);

const calcAvearge = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr;
  }
  return sum / arr.length;
};

// console.log(calcAvearge([2, 3, 7]));
console.log(calcAvearge(total));
