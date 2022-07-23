// js 所有東西都是物件
var a;  //全域宣告
let b;  //區域宣告
const c = 10;   //常數

function func(bool) {
    let x = 10;
    if (bool == true) {
        let x = 20
        console.log(x)
    }
    console.log(x)
}

function returnX(){
    return 'x';
}
var xx = returnX()

console.log(xx)

function add(param, param2){
    console.log(param + param2)
    // return "string"
}

document.getElementById("cbox1").click()
let yy = add()
console.log(yy)

var nuLL = null;
var undefineD = undefined
var number = 10;
var string = "字串";
var boolean = true;
var array = [1, 2, 3, 4]
var object = {
    number: 10,
    string: "sss",
}

console.log(object)