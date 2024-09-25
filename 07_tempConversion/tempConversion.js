const convertToCelsius = function(
  f
) {
  let convert = (f- 32) / (9/5);
  return parseFloat(convert.toFixed(1));
};

const convertToFahrenheit = function(c) {
  let convert = c * 9/5 + 32;
 return parseFloat(convert.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
