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

var Score=[5,8,20,55,70,41,19];
console.log(Score.toString()+"average:"+avg(Score));


