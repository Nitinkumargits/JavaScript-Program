"use strict ";

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

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
// console.log(newArr);

// Shallow copy array
const mainMenuArr = [...restaurant.mainMenu];
// console.log(mainMenuArr);

// merge two array.

const MergeArr = [...restaurant.mainMenu, ...restaurant.StarterMenu];
// console.log(MergeArr);

//Spread operator with object

const newRestaurant = {
  fondedIn: 1991,
  ...restaurant,
  fonder: "nitink",
};

console.log(newRestaurant);
