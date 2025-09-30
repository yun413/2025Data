//使用while回圈计算1+2+...+n的和
// function sum(n)
// {
//     var result = 0;
//     var i=0;
//     while(i++ < n)
//     {
//         result += i;
//     }
//     return result;
// }


//使用do...while回圈计算1+2+...+n的和
function sum(n)
{
    var result = 0;
    var i=1;
    do {
        result += i;
    }
    while(i++ < n);
    return result;
}

//test
var n=10;
console.log("1+2+...+"+n+"="+sum(n));

//Q1:更好的方式，固定演算次數，求得一樣的結果