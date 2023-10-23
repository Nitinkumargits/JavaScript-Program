"use strict";
// const openingHourse = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, //open 24 hours
//     close: 24,
//   },
// };

// // for (const day of Object.keys(openingHourse)) {
// //   console.log(day);
// // }

// // const property = Object.keys(openingHourse);
// // console.log(property);
// // console.log(`We are open on ${property.length} days`);

// // const values = Object.values(openingHourse);
// // console.log(values);

// // const ent = Object.entries(openingHourse);
// // console.log(ent);

// // for (const x of ent) {
// //   // console.log(x);
// // }

// // for (const [key, { open, close }] of ent) {
// //   console.log(`On ${key}day we are Open at ${open} and close at ${close}.`);
// // }

// // const orderSet = new Set(["A", "B", "B", "A", "C"]);

// // const staff = ["waiter", "waiter", "cheff", "cheff", "manger"];

// // // const staffUnique = new Set(staff);
// // // console.log(staffUnique);

// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique);

// //Map

// // const rest = new Map();

// // rest.set("name", "classico").set(document.querySelector("h1"), "heading");
// // console.log(rest);

// const questions = new Map([
//   ["question", "which one is the best language ?"],
//   [1, "c"],
//   [2, "java"],
//   [3, "javaScript"],
//   [true, "correct answer"],
//   [false, "Try again "],
// ]);

// // console.log([...questions]);

// console.log(questions.keys());
// console.log(questions.values());
// console.log(questions.entries());

// // console.log(question);

// // console.log(questions.get("question"));

// // for (const [key, value] of questions) {
// //   if (typeof key === "number") {
// //     console.log(`${key} : ${value}`);
// //   }
// // }

// // const answer = Number(prompt("your answer ?"));

// // console.log(questions.get(questions.get("correct")) == answer);

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);

//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat");
//   } else {
//     console.log("you got luck");
//   }
// };

// // checkMiddleSeat("11B");

// const [firstName, lastName] = "nitin kumar".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalization = function (name) {
//   const names = name.split(" ");
//   const nameUpper = [];

//   for (const n of names) {
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(" "));
// };

// capitalization("nitin kumar");

// const msg = "Go to gate";
// const pad = msg.padStart(20, "*");
// console.log(pad);

// console.log(pad.length);

// const maskCreditCard = function (number) {
//   const str = number + "";

//   const last = str.slice(-4);

//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(123344556666).repeat(5));

// String Methods Practice

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");

//   const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(
//     36,
//     " "
//   );
//   console.log(output);
// }

// const bookings = [];

// const creatBooking = function (flightNum, numPassengers, Price) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     Price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// creatBooking("LH23", undefined, 23.99);

// const flight = "LH234";
// const jonas = {
//   name: "jonas kuamr",
//   passport: 23435432323,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} : passenger `);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();
// console.dir(booker);
