var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

class Point{
    constructor(_row,_col){
        this.row=_row;
        this.col=_col;
    }
}

var start=new Point(1,1);
var end=new Point(8,10);
var Stack=[];

var CP=start;
do{
    MAZE[CP.row][CP.col]=2;
    //up
    if(MAZE[CP.row-1][CP.col]==0){
        Stack.push(CP);
        CP=new Point(CP.row-1,CP.col);
    }else if(MAZE[CP.row][CP.col-1]==0){//left
        Stack.push(CP);
        CP=new Point(CP.row,CP.col-1);
    }else if(MAZE[CP.row+1][CP.col]==0){//down
        Stack.push(CP);
        CP=new Point(CP.row+1,CP.col);
    }else if(MAZE[CP.row][CP.col+1]==0){//right
        Stack.push(CP);
        CP=new Point(CP.row,CP.col+1);
    }else{
        if(Stack.length>0){
            //pop

        }
        else{
            //no solution
        }
    }
//}while(!(CP.row==end.row && CP.col==end.col));
}while(CP.row!=end.row || CP.col!=end.col);