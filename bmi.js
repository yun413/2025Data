const readline = require('readline-sync');

var weight= readline.questionFloat("Ur weight? (KG)");
var height= readline.questionInt("Ur height? (CM)");
var bmi=weight/((height/100)**2);

console.log("Hello ! Your BMI value is " + bmi);