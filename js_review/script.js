var states = [
  "Alabama",
  "California",
  "Connecticut",
  "District of Columbia",
  "Maine",
  "Minnesota"
];

var numEmployees = [
  234726,
  1111812,
  157363,
  1275,
  46741,
  288583
];

// annualPay expressed in thousands of dollars
var annualPay = [
  11759599,
  69487378,
  10586486,
  56900,
  2477958,
  16119212
]

var avgPay = []
for(var i = 0; i < numEmployees.length; i++){
  avgPay.push(getAverage(annualPay[i], numEmployees[i]))
}


// function multiply(num1, num2){
//   var product = num1 * num2
//   return product
// }

function getAverage(total, divisor){
  return total/divisor
}
