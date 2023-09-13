// console.log(true || "nitin");
// console.log("" || "jonas");
// console.log(3 || "ekta");
// console.log(undefined || null);
// //////////////////////////////////////

const restaurant = {
  name: "nitin",
};

const guest = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest);

//// or use OR-Operator

const guest1 = restaurant.numGuest || 10;
// console.log(guest1);

// And operator(return frist falsy value)

console.log(0 && "jonas");
console.log("hello" && null);
