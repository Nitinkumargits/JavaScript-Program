const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in the ${retirement} year's .`;
};

console.log(yearUntilRetirement(1991, "NitinKumar"));
