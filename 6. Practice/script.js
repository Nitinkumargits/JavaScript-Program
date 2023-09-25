"use strict";

// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far �
// GOOD LUCK

// const checkDogs = function (juliaDogs, KateDogs) {
//   const juliasCorrect = juliaDogs.slice(); //Make shallow copy

//   juliasCorrect.splice(0, 1);
//   juliasCorrect.splice(-2);

//   const dogs = juliasCorrect.concat(KateDogs);
//   //   Dog number 2 is still a puppy

//   dogs.forEach(function (dog, i) {
//     console.log(
//       `Dog number ${i + 1} is still a ${
//         dog >= 3 ? "adult 🐕" : "puppy 🐶"
//       } and age is ${dog}`
//     );
//   });
// };

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// // dog ages to human ages and calculate the average age of the dogs in their study.
// // Your tasks:
// // Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// // ages ('ages'), and does the following things in order:
// // 1. Calculate the dog age in human years using the following formula: if the dog is
// // <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// // humanAge = 16 + dogAge * 4
// // 2. Exclude all dogs that are less than 18 human years old (which is the same as
// // keeping dogs that are at least 18 years old)
// // 3. Calculate the average human age of all adult dogs (you should already know
// // from other challenges how we calculate averages �)
// // 4. Run the function for both test datasets
// // Test data:
// // § Data 1: [5, 2, 4, 1, 15, 8, 3]
// // § Data 2: [16, 6, 10, 5, 6, 1, 4]
// // GOOD LUCK
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });
//   // console.log(humanAge);
//   const adultdogs = humanAge.filter(function (mov) {
//     return mov > 18;
//   });
//   // console.log(adultdogs);

//   const adultAvgDog = adultdogs.reduce(function (acc, cur, i, arr) {
//     return (acc + cur) / arr.length;
//   }, 0);

//   console.log(adultAvgDog);
// };

// // calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// // calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// const averageHumanAge2 = (ages) => {
//   const humanAge = ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((mov) => mov > 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return humanAge;
// };
// // console.log(averageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find((mov) => mov < 0);
// // console.log(firstWithdrawal);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// const anyDeposite = movements.some((mov) => mov > 0);
// console.log(anyDeposite);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// const arr = [[1, 2, 3], 4, 5, [6, 7]];

// // console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], 4, 5, [[6, 7]], 8, 9];
// console.log(arrDeep.flat(2));
/////////////////////////////////////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

// // console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// // console.log(movements);

// // movements.sort((a, b) => a - b);
// // console.log(movements);

// const x = new Array(7);
// x.fill(1, 3, 5);
// // console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// arr.fill(23, 2, 6);
// // console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 10 }, (_, i) => i + 1);
// console.log(z);

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const numDeposite = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, cur) => (cur >= 1000 ? ++acc : acc), 0);
// console.log(numDeposite);

let a = 10;
// console.log(a++);
// console.log(a);

let b = 10;
// console.log(++b);
// console.log(b);

const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposite += cur) : (sums.withdrals += cur);
      return sums;
    },
    { deposite: 0, withdrals: 0 }
  );
console.log(sums);
