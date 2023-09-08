"use strict ";
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${name} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1991) {
      const str = `oh, You're a millenial ${name}`;
      console.log(str);
    }
  }
  printAge();
  return age;
}

const name = " Nitin(global variable) "; //Gobal variable
console.log(calcAge(1991)); //calling fuction
