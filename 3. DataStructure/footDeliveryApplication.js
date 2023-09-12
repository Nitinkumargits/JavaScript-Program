"use strict";
const restaurant = {
  name: "classic Italino",
  location: "Via Angelo Tavanti 23 , Firenze , Italy",
  Categories: ["Italino", "Pizzeria", "Vegetarian", "Organic"],
  StarterMenu: ["Facaccia", "Bruschetta", "Galic-Bread", "caprese-Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainMenuIndex) {
    return [this.StarterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
};

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Array destructuring .
const [x, y, z] = arr;
// console.log(x, y, z);
// footDeliveryApp

// const [first, second] = restaurant.Categories;
// console.log(first, second);//Italino pizzeria

const [first, , second] = restaurant.Categories;
console.log(first, second); //Italino Vegetarian

let [main, secondary] = restaurant.Categories;
[main, secondary] = [secondary, main];
console.log(main, secondary);

// we use array to return multiple value from the differnt key  , from the fuction.

console.log(restaurant.order(2, 0)); //[ 'Galic-Bread', 'Pizza' ]

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// nested Destructing.

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);//2 [ 5, 6 ]

const [i, , [j, k]] = nested;
console.log(i, j, k); //2 5 6

// Default value

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
