"use string";

const airline = "Tap Air Protugal";
const plan = "A307";

// console.log("A3007"[0]);
// console.log(airline.length);

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);

  if (s === "B" || s === "E") {
    console.log("you got the Middle seat !");
  } else console.log("you got luck");
};

// checkMiddleSeat("11E");
// checkMiddleSeat("3E");
// checkMiddleSeat("6C");

// console.log("jona".toUpperCase());
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix the capitalization in name

const passenger = "jOnaS"; //Jonas

const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Compare the Email

const email = "hello@gmail.io";
const loginEmail = "  Hello@gmail.io";

const normalizEmail = loginEmail.toLowerCase().trim();
// console.log(normalizEmail);
// console.log(email === normalizEmail);

const announcement =
  "All  passenger come to boarding door 23 . Boarding door 23 ! door";

// console.log(announcement.$("gate").replaceAll("door"));
// console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "nitin"));

// Practice Example

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  //   console.log(baggage);

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed to board ");
  } else {
    console.log("You can board");
  }
};
// checkBaggage("GUn and socks");
// checkBaggage("food and knife");
// checkBaggage("veggi and momo");

// ///////////////////////////////////////

// console.log("a+very+nice+string".split("+"));

// const [firstName, lastName] = "Nitin kumar".split(" ");

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

const capitalization = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice("1"));
  }
  console.log(namesUpper.join(" "));
};

// capitalization("jonas schtmann");
// capitalization("nitin kumar");

// Padding with string

const message = "Go to gate 23!";
// console.log(message.padStart(23, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);

  return last.padStart(str.length, "*");
};

// console.log(maskCreditCard(44444444444));

const msg = "all the Depature delay\n";
// console.log(msg.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} of plane in line ${"✈".repeat(n)}`);
};

planeInLine(4);
planeInLine(9);
planeInLine(6);
