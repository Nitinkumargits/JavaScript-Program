"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //book:function(flightNum,name){},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

//create a new AIRLINE

const eurowing = {
  airline: "Eurowing",
  iataCode: "EW",
  bookings: [],
};

const swissAir = {
  airline: "Swisstzer",
  iataCode: "SZ",
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowing, 444, "Ekta");
book.call(lufthansa, 666, "Ekta");
book.call(swissAir, 999, "nitin");
// console.log(eurowing, lufthansa, swissAir);

// console.log(lufthansa);

const flight = [23, "Pari"];

book.apply(swissAir, flight);
book.call(swissAir, ...flight);
