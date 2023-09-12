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

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole , 21",
  mainIndex: 2,
  starterIndex: 2,
});

// let {
//   fri: { open, close },
// } = restaurant.openingHourse;
// console.log(open, close);

//------------------- Desturing Object---------------------------------- .

// const { name, openingHourse, Categories } = restaurant;
// console.log(name, openingHourse, Categories);

// const {
//   name: restaurantName,
//   openingHourse: hours,
//   Categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], StarterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating object

// let a = 22;
// let b = 43;

// const obj = { a: 2, b: 9, c: 23 };

// ({ a, b } = obj);
// console.log(a, b);

// Nested object

// ------------ ARRAYS--------------------------//

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// Array destructuring .
// const [x, y, z] = arr;
// // console.log(x, y, z);
// // footDeliveryApp

// // const [first, second] = restaurant.Categories;
// // console.log(first, second);//Italino pizzeria

// const [first, , second] = restaurant.Categories;
// // console.log(first, second); //Italino Vegetarian

// let [main, secondary] = restaurant.Categories;
// [main, secondary] = [secondary, main];
// // console.log(main, secondary);

// // we use array to return multiple value from the differnt key  , from the fuction.

// // console.log(restaurant.order(2, 0)); //[ 'Galic-Bread', 'Pizza' ]

// // const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// // nested Destructing.

// const nested = [2, 4, [5, 6]];

// // const [i, , j] = nested;
// // console.log(i, j);//2 [ 5, 6 ]

// const [i, , [j, k]] = nested;
// // console.log(i, j, k); //2 5 6

// // Default value

// const [p = 1, q = 1, r = 1] = [8, 9];
// // console.log(p, q, r);
