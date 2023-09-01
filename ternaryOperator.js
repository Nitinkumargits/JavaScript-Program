const age = 13;

// age >= 10 ? console.log("he is big boy") : console.log("he small now");

// ternary  operator inside template literals
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// example

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill  was ${bill}, the  tip was ${tip}, and the the total bill ${
    bill + tip
  }`
);
