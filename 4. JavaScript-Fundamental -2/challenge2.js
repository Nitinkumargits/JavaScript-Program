// //////////////////////////////////////
// coding challenge #1
/*
Given an arry of forecast maximum temperatures,the thermometer displays  string with these  tempertures

example: [17,21,23] will print "... 17 degree Celscius in 1 days . ....21 degree Celscius  in 2 days ...23 dc in 3 days ..."

create a fuction 'pritForecast' which takes in an array 'arr' an logs a string like the above to the console.
use the problem-solving framework : Understand the problem and break it up into sub-problem !

TEST DATA 1:[17,21,23]
TEST DATA 2:[12,5,-5,0,4]

1> Understand the Problem
 -Array transformed to string , separated by ...
 -what is the x days ? Answer :index +1

2>Breaking up into sub-problem 
 -Transform array into String 
 -Transform each element to string with degree Celsius
 -string needs to contain day(index+1)
 - Add ... between elements and Start and end of string .
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  debugger;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]} degree Celsius in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

printForecast(data2);
