// function logger() {
//   console.log("My name is  nitin kumar ");
// }

// logger();
// logger();
// logger();
// logger();
// /////////////////////////////////////////////////////////////
function fruitProcessor(apples, orange) {
  console.log(apples, orange);
  const juice = `Juice with ${apples} apples and ${orange} oranges .`;
  return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);

const appleOrangeJuice = fruitProcessor(4, 65);
console.log(appleOrangeJuice);
