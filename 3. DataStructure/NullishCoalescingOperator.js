const restaurant = {
  name: "nitin",
  lastName: "Kumar",
};

// restaurant.nameGuest = 0;

const guest = restaurant.nameGuest || 19;
// console.log(guest); //19(it will give the first truthy value...)

// to solve this Nullish coalesing operator

restaurant.nameGuest = 0;
const guest1 = restaurant.nameGuest ?? 18; //(if the first operand is null and undefined only then the Second operand will be executed and return)
console.log(guest1); //0
