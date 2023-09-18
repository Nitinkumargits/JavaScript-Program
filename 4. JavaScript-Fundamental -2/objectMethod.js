const jonas = {
  firstName: "Nitin",
  lastName: "Kumar",
  birthYear: 1991,
  hasDriverLicence: true,
  friends: ["ved", "ekta", "nitink"],
  calcAge: function () {
    console.log(this);
    console.log(typeof this);
    return 2037 - this.birthYear;
  },
};

// console.log(jonas["calcAge"](1991));

console.log(jonas.calcAge());
