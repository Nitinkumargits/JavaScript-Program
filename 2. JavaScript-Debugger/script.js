const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "Celsisus",
    value: Number(prompt("Degree Celscius :")),
  };
  console.table(measurment);

  const kelvin = measurment.value + 273;
  return kelvin;
};

console.log(measureKelvin());
