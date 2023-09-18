// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lift weight repeation ${rep}`);
// }

const jonas = [
  "jonas",
  "kumar",
  2037 - 1991,
  ["ved", "ekta", "nitin"],
  "teacher",
];

console.log("--- ONLY STRING -----");
for (let i = 0; i <= jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}
console.log("--- BREAK WITH NUMBER  -----");
for (let i = 0; i <= jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
