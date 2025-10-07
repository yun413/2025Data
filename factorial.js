//遞迴結構 在code裡又自己呼叫自己 2個fact //是數字!階層 3!=6
function fact(n){
    if(n==1)
        return 1; //遞迴結束條件
    else
        return n*(fact(n-1));
}


//test
var n=3;
console.log (n+ "! = " +fact(n));



//rcursive sum 1+2+3+...+n //以下是sum的遞迴寫法
function sum(n){
    if(n==1)
        return 1;
    else
        return n+sum(n-1);
}