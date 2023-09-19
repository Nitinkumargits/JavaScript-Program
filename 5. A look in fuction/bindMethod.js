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

const bookEW = book.bind(eurowing);
const bookSW = book.bind(swissAir);

// bookEW(34, "pari");
// bookSW(77, "nitin");

const bookEW23 = book.bind(eurowing, 23);
bookEW23("khushi");
