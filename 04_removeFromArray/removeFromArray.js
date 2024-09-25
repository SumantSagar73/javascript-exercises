const removeFromArray = function(array, ...elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let index = array.indexOf(element);

    // Keep removing the element as long as it exists in the array
    while (index !== -1) {
      array.splice(index, 1);
      index = array.indexOf(element);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
