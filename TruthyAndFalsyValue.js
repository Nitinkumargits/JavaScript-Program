console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
// money assgin to 0 which is a falsy value
if (money) {
  console.log("don't spend all ");
} else {
  console.log("You should get a job");
}
