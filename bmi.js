const reading = require('readline-sync');

var weight=65;
var height=160;
var bmi=weight/((height/100)**2);

console.log("Hello ! Your BMI value is " + bmi);