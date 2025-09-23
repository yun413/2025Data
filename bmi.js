const readline = require('readline-sync');

var weight=0;
while(weight<10 || weight>120){
    weight=readline.questionInt("Ur weight? (10~120KG)");
}
var height=0;
while(height<60 || height>230){
    height=readline.questionInt("Ur height? (60~230CM)");
}

var bmi=weight/((height/100)**2);

console.log("Hello ! Your BMI value is " + bmi.toFixed(2));