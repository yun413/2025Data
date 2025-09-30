//Ans1 c語言
// function avg(score)
// {
//     var sum=0, average=0;
//     for(var i=0;i<score.length;i++)
//     {
//      sum += score[i];  //是把score[i]的值加到sum上
//     }
//     if(score.length>0)
//         average=sum/score.length;
//     return average;
// }

//Ans2 c語言+java
function avg(score)
{
    var sum=0, average=0;
    for(var i=0;i<score.length;i++)
    {
     sum += score[i];  //是把score[i]的值加到sum上
    }
    return (score.length>0) ? sum/score.length:0;
}





//test
var Score=[5,8,20,55,70,41,19];
//var Score=[];
console.log(Score.toString()+"average:"+avg(Score));


