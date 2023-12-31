// 'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// // const arr = ['a', 'b', 'c', 'd', 'e'];
// // SLICE METHOD

// // console.log(arr.slice(2));
// // console.log([...arr]);
// // console.log(arr.slice());

// // SPLICE METHOD

// // console.log(arr.splice(2));
// // console.log(arr);

// // console.log(arr.splice(-1));
// // console.log(arr);

// // arr.splice(1, 2);
// // console.log(arr);

// // REVERSE METHOD

// // const arr2 = [1, 2, 3, 4, 5];
// // // console.log(arr2.reverse());

// // const arr3 = arr.concat(arr2);
// // console.log(arr3);

// // const letter = arr3.join('--');
// // console.log(letter);

// // const tot = [1, 2, 3, 4, 5];
// // console.log(tot.at(0));
// // console.log(tot.at(-1));
// // console.log(tot[tot.length - 1]);
// // console.log(tot.slice(-1)[0]);

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`Your deposite ${movement}`);
// //   } else {
// //     console.log(`You Withdraw ${Math.abs(movement)}`);
// //   }
// // }

// // const t = '';
// // console.log(t.padStart(50, '*'));

// // movements.forEach(function (movement) {
// //   return movement > 0
// //     ? console.log(`Your deposite ${movement}`)
// //     : console.log(`You Withdraw ${Math.abs(movement)}`);
// // });
// // console.log('**************************');

// // for (const [i, movement] of movements.entries()) {
// //   if (movement > 0) {
// //     console.log(`Movement ${i + 1} :Your deposite ${movement}`);
// //   } else {
// //     console.log(`Movement ${i + 1} :You Withdraw ${Math.abs(movement)}`);
// //   }
// // }

// // console.log('************* 3 *************');

// // movements.forEach(function (mov, i, arr) {
// //   if (mov > 0) {
// //     console.log(`Movement ${i + 1} :Your deposite ${mov}`);
// //   } else {
// //     console.log(`Movement ${i + 1} :You Withdraw ${Math.abs(mov)}`);
// //   }
// //   // console.log(arr);
// // });

// // const currencies = new Map([
// //   ['USD', 'United States dollar'],
// //   ['EUR', 'Euro'],
// //   ['GBP', 'Pound sterling'],
// // ]);

// // currencies.forEach(function (value, key, map) {
// //   console.log(`${key} : ${value}`);
// // });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});

console.log(movementUSD);
console.log('******************************');

const eurToUSDfor = [];
for (const mov of movements) {
  eurToUSDfor.push(eurToUSD * mov);
}

console.log(eurToUSDfor);

console.log('******************************');

const arrowEurToUSD = movements.map ((mov) => eurToUSD * mov);
console.log(arrowEurToUSD);


console.log('******************************');

