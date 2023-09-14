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

// console.log(restaurant.openingHourse.mon); //undefined(not present)

// console.log(restaurant.openingHourse.mon.open);///ERROR

// console.log(restaurant.openingHourse.mon?.open); //Undefined

const days = ["mon", "tue", "web", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHourse[day]?.open;
//   console.log(`On ${day} . we Open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? "Method does not exist .");
//[ 'Facaccia', 'Pasta' ]

// console.log(restaurant.orderRistto?.(0, 1) ?? "Method does not exist .");
//Method does not exist .

const user = [{ name: "nitin", email: "hello@gmail.com" }];

console.log(user[0]?.name ?? "user array is empty.");
