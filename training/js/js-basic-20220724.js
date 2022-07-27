// cd cd .. dir mkdir tab
// node js+tab 即可執行指令

// lambda funciton

// ------ 等價 --------
function func(param) {
    console.log(param);
}

const func2 = (param) => {
    console.log(param);
};
// -------------------

const obj = {
    // 屬性
    one: "",
    two: 0,
    // 方法
    three: () => {
        console.log("three");
    },
};

// array.push(element)  新增 element 進入 array
let array = ["element1", "element2"];
let count = array.push("element3");

array[1] = "a"; // 強迫修改陣列元素內容
// console.log(array)
// console.log(count)

// array.pop() 拿出最尾端的元素，並砍掉
let popElement = array.pop();
// console.log(array)
// console.log(popElement)

// array.length 取得陣列長度
// array.length
// console.log(array.length)

// array.forEach
array.forEach((e,i) => {
    console.log(e);
    console.log(i);
});

// array.filter

// array.sort

// string.toUpperCase

let thisIsString = "lower-case";
let thisIsString2 = thisIsString.toUpperCase();
