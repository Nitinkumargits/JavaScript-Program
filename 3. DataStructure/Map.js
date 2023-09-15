"use strict";

const rest = new Map();
rest.set("name", "classico Italino");
rest.set(1, "Fireze,Itaily");
// console.log(rest.set(2, "Lisbon,portogal"));

rest
  .set("categories", ["Italanio", "pizzeria", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 22)
  .set(true, "we are opne :D ")
  .set(false, "we are close :( ");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// Quiz App

const question = new Map([
  ["question", "What is the best programing language in world ?"],
  [1, "c"],
  [2, "java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "correct"],
  [false, "Try again"],
]);

// console.log(question);
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key} : ${value}`);
  }
  // console.log(answer);
}
const answer = 3; //Number(promt("your answer"));
console.log(question.get(question.get("correct") === answer));
