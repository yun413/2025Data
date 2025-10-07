//費氏數列 //很慢
//A1:
function fib(n){
    //prevent n<0
    if(n==0||n==1)
        return n;
    else
        return fib(n-1)+fib(n-2);
}


//用迴圈方式寫 //很快
//A2:
function fib(n){
    //prevent n<0
    var a=0,b=1;
    for(var i=1;i<=n;i++){
        a=a+b;
        b=a-b;
    }
    return a;
}

//test
var n=50;
console.log(" fibonacci "+n+" = "+fib(n))