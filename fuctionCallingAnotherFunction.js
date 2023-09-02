const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apple, orange) {
  const applePieces = cutPieces(apple);
  const orangePieces = cutPieces(orange);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
  return juice;
};

console.log(fruitProcessor(2, 3));
