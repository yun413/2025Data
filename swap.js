//1.bubble sort
function swap(a, b){
    var temp=a;
    a=b;
    b=temp;
    return;
}

var t=6, y=1;
console.log("t="+t+", y="+y);
swap(t,y);
console.log("t="+t+", y="+y);


//w15 bubble sort 要看懂程式碼



// 2.insertion sort
function insertionSort(arr) {
    // 從第二個元素（索引 1）開始，因為第一個元素預設為已排序
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // 當前要處理的牌（元素）
        let j = i - 1;

        // 向左比較，如果左邊的元素比當前元素大，就往右移一位
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // 找到正確位置後，把牌放進去
        arr[j + 1] = current;
    }
    return arr;
}

// 測試
let numbers = [6, 1, 8, 5, 2];
console.log("排序前:", numbers);
insertionSort(numbers);
console.log("排序後:", numbers);