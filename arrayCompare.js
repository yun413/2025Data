var str="Hello";

var str2="hello";

console.log("Is same?"+(str===str2));

var ary=[1,2,3];
var ary2=[1,2,3];
//JSON
var aryString = JSON.stringify(ary);
var ary2String = JSON.stringify(ary2);
console.log("ary to JSON string"+aryString);
console.log("ary2 to JSON string"+ary2String);

console.log("Is same?"+aryString==ary2String);