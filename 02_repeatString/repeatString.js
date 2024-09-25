const repeatString = function(str, num) {
  let concatString = '';
  if(num<=-1){
    concatString="ERROR";
  }
  for(let i = 0; i<num; i++){
    concatString= concatString+str;
  }
  return concatString;
};

// Do not edit below this line
module.exports = repeatString;
