const sumAll = function(a, b) {
  // Validation checks
  if (a < 0 || b < 0) {
    return 'ERROR'; // Check for negative numbers
  }
  
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return 'ERROR'; // Check for non-integer numbers
  }
  
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR'; // Check for non-number parameters
  }

  // Summing logic
  let sum = 0;
  
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      sum += i;
    }
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
