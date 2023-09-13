"use strict";
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

const restaurant = {
  name: "classic Italino",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  Categories: ["Italino", "Pizzeria", "Vegetarian", "Organic"],
  StarterMenu: ["Facaccia", "Bruschetta", "Galic-Bread", "caprese-Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // Enhanced object litral

  openingHourse,
  order(starterIndex, mainMenuIndex) {
    return [this.StarterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ! ${this.StarterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

console.log(restaurant.order(2, 1));
