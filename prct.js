const jonas = {
  FirstName: "Nitin",
  age: 30,
  year: 1991,
  calcAge: function () {
    console.log(this);
    return 2038 - this.year;
  },
};

const friend = jonas;
friend.age = 77;

console.log("jonas :", jonas);
console.log("friend :", friend);
