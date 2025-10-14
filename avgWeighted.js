function avgWeight(score, weight){
    var sum=0;//1
    var sumWeight=0;
    for(var i=0;i<score.length;i++){
        sum += score[i]*weight[i];  //n
        sumWeihgt += weight[i];
    }
    return (score.length>0) ? sum/sumWeight : 0;
}


//Test
//var Score=[50,20,30,15,16,21,33,11,-9,27];
var Score=[];
var Weight=[6,5,5,3,3]
const num=5;
//input
var readline=require("readline-sync");
for (let i =0; i<num; i++){
    Score[i]=readline.questionInt("Input"+(i+1)+"'s score?");
}
console.log(Score.toString()+" average:"+ avgWeight(Score,Weight))