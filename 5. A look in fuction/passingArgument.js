"use strict ";

const flight = "Lh2300";

const jonas = {
  name: "jonas kumar",
  passport: 24423232321,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";

  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 24423232321) {
    console.log("checked IN");
  } else {
    console.log("Wrong passport ");
  }
};

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
