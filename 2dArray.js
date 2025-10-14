var Score=[
    [70,80,90,60,80],
    [80,90,70,75,85],
    [85,85,80,90,80]
]
console.log("Score[0]="+Score[0]);

//avg for every element
for(var i=0;i<Score.length;i++)
{
    var sum=0;
    for(var j=0;j<Score[i].length;j++)
    {
        sum+=Score[i][j];
    }
    console.log("學生 "+(i+1)+" 分數平均值="+(sum/Score[i].length));
}

