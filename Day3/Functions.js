const square = function(x) {
    return x * x;
  };

  console.log(square(12));
// → 144



const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++){
    result *= base;
  }
  return result;
}

console.log(power(2,10));
//1024 









function chicken(){
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + "came first");







//________________________________________________________________________________________________________________________________
//function that calls itself is called RECURSIVE function
//________________________________________________________________________________________________________________________________
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8