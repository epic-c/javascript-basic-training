// TODO js 所有東西都是物件

// TODO 全域 var 與區域 let
var a; //全域宣告
let b; //區域宣告
const c = 10; //常數

function varAndLet(bool) {
    //區域
    let x = 10;
    // var x = 10;
    if (bool == true) {
        //區域
        let x = 20;
        // var x = 20;
        console.log(x);
    }
    console.log(x);
}

// TODO function
// TODO return 回傳值
function returnX() {
    return "x";
}
var returnResult = returnX(); // 有啟動
// var xx = returnX // 沒有啟動
console.log(returnResult);

// TODO 參數
function add(param, param2) {
    console.log(param + " + " + param2 + " = " + (param + param2));
}

let addResult = add(1, 2); // 參數剛好
// let addResult = add(1)   // 少一個參數
// let addResult = add(1, 2, 3)   // 多一個參數
console.log(addResult);

// TODO 基本型態
var thisIsNull = null; // 空
var thisIsundefined = undefined; // 未定義

var thisIsNumber = 10; // 數字，可做運算
var thisIsString = "字串"; // 字串
var thisIsBoolean = true; // 布林，只有 true 和 false

var thisIsArray = [ // 陣列
    [1,2,3],
    [4,5,6]
]

thisIsArray[0][1]

var thisIsObject = {
    // 物件
    number: 10,
    string: "attr",
};
