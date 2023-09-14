"use strict ";
const restaurant = {
  name: "classic Italino",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  Categories: ["Italino", "Pizzeria", "Vegetarian", "Organic"],
  StarterMenu: ["Facaccia", "Bruschetta", "Galic-Bread", "caprese-Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainMenuIndex) {
    return [this.StarterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ! ${this.StarterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const openingHourse = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, //open 24 hours
    close: 24,
  },
};
const properties = Object.keys(openingHourse);
// console.log(properties);

let openStr = `We are open on ${properties.length} days :`;

for (const day of properties) {
  openStr += `${day}, `;
}

// console.log(openStr);

// Properties VALUES :

const values = Object.values(openingHourse);
// console.log(values);

// Entires Object

const entire = Object.entries(openingHourse);
// console.log(entire);

for (const x of entire) {
  //   console.log(x);
}

for (const [key, { open, close }] of entire) {
  console.log(`On ${key}, We open at ${open} and close at ${close}`);
}
