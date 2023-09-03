const jonas = {
  firstName: "Jonas Kumar",
  mass: 79,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const mark = {
  firstName: "Mark shaarma",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

jonas.calcBMI();
mark.calcBMI();

console.log(jonas.bmi, mark.bmi);
