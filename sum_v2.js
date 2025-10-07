//calc 1-2+3-4+.....n
function sum(n){
    var sum=0;
    if(n<=0){
        console.log("error: n must>0");
        return null;
    }else{
        for(var i=1;i<=n;i++){
            if(i%2==0) //even %算餘數 
                sum-=i; 
            else
                sum+=i; //odd 奇數
            //(i%2==0) ? sum-=i : sum+=i; *這段可以取代9-12行 範例在avg.js
        }
        return sum;
        //O(1)
        //return (i%2==0) ? (-1)*(n/2) : (1+n)/2;
    }

}

//test
var n=100; //readline
console.log("1-2+3-4+...." +n+ "=" + sum2(n));

