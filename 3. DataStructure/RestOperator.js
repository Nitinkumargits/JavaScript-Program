"use strict";
const restaurant = {
  name: "classic Italino",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  Categories: ["Italino", "Pizzeria", "Vegetarian", "Organic"],
  StarterMenu: ["Facaccia", "Bruschetta", "Galic-Bread", "caprese-Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHourse: {
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
  },
  order: function (starterIndex, mainMenuIndex) {
    return [this.StarterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ! ${this.StarterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

const arr = [1, 2, ...[3, 4]];
// console.log(arr);//[ 1, 2, 3, 4 ]

const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);//1 2 [ 3, 4, 5 ]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.StarterMenu,
];

// console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHourse;
// console.log(weekdays);//{ thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// fuction with rest Operator

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};

add(2, 3);
