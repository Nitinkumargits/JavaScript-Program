"use strict ";

const OrderSet = new Set(["pizza", "ristto", "pizza", "pasta", "pizza"]);
// console.log(OrderSet);

// console.log(new Set("nitinkumar"));

console.log(OrderSet.size);
console.log(OrderSet.has("pizza"));
console.log(OrderSet.has("butter"));
OrderSet.add("Garlic bread");
OrderSet.add("Garlic bread");
OrderSet.delete("ristto");
console.log(OrderSet);

// OrderSet.clear();
console.log(OrderSet);

for (const order of OrderSet) {
  console.log(order);
}
