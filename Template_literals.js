const firstname = "nitin";

const nitinName = `I'm ${firstname}`;

console.log(nitinName);

/*NOT like this down  */
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + job + ", a" + (year - birthYear) + "year old" + job + "!";
console.log(jonas);

// do like this
const johnas = `I'm ${firstname} ,a ${year - birthYear} year old ${job} ! `;
console.log(johnas);

// another use case of template literals is to create the multiline

console.log(`string with \n\ multiple \n\ line  `);
