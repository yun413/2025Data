function avg(score)
{
    var sum=0, average=0;
    for(var i=0;i<score.length;i++)
    {
     sum += score[i];  
    }
    if(score.length>0)
        average=sum/score.length;
    return average;
}
//test
var Score=[5,8,20,55,70,41,19];
//var Score=[];
console.log(Score.toString()+"average:"+avg(Score));


