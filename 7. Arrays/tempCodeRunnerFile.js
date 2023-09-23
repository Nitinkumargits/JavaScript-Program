const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

const movementUSD = movements.map(function (mov) {
  return mov * eurToUSD;
});

console.log(movementUSD);
