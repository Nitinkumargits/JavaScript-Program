// const friend = ["ved", "ekta", "nitin"];

// console.log(friend);
// console.log(friend[0]);
// console.log(friend[1]);
// console.log(friend[2]);

// // length of the array
// console.log(friend.length);

// // to get the last element in the array
// console.log(friend[friend.length - 1]);

// // Mutate the array.

// friend[2] = "kumarNitin";
// console.log(friend);

// const variable = "A variable";

// const nitin = [friend, "kumar", 2037, 1991, variable];
// console.log(nitin);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[0]);
// console.log(years.length);
// const age3 = calcAge(years[years.length - 1]);

// const age = [
//   calcAge(years[0]),
//   calcAge(years[0]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(age);
// //////////////////////////////////////////////////////
// const friend = ["ved", "ekta", "nitin"];

// friend.push("kumarNitin");
// friend.unshift("upreti");

// // friend.pop();
// console.log(friend);
// const popped = friend.pop();
// console.log(popped);

// console.log(friend);

// friend.shift();
// console.log(friend);
// /////////////////////////////////////////

const calctip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bill = [126, 555, 44];

const tips = [calctip(bill[0]), calctip(bill[1]), calctip(bill[2])];

const totals = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

console.log(totals);
