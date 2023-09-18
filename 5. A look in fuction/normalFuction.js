"use strict ";
const bookings = [];
const creatingBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatingBooking("LH234", undefined, 99);
