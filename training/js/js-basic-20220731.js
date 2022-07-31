// TODO 跳脫字元
let string = '"\n\t 123';

let charArray = string.split(" ");

console.log(charArray);

let ascii = "a".charCodeAt();

console.log(ascii - 32);

// TODO return
// 目的：把值往 呼叫域 拋回

function getAaddB(a, b) {
    let x = a + b;
    return x;
}

console.log(getAaddB(1,3));

function consoleAAddB() {
    console.log("h w")
}

console.log(consoleAAddB());
