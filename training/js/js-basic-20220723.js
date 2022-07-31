// TODO 迴圈

// TODO for
function forLoop() {
    let array = [9, 8, 7, 6, 5];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// forLoop();

// TODO while
function whileLoop() {
    let i = 1;
    while (i < 0) {
        console.log(123);
    }

    do {
        console.log(321);
    } while (i < 0);
}

// whileLoop();

// TODO break, continue, return

function breakSample() {
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
            break; // 跳出迴圈外
        }
    }
    // break ...
}

function continueSample() {
    for (let i = 1; i < 10; i++) {
        if (i === 5) {
            continue; // 跳過以下的部份
        }
        console.log(i);
    }
}

continueSample();

function returnSample() {
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
            return; // 跳出函數外
        }
    }
}
// return

// let results = breakSample()

// TODO 判斷式
// if,  else

function onlyIf(param) {
    if (param < 5) {
        console.log("a < 5");
    }

    if (param < 10) {
        console.log("a < 10");
    }

    if (param < 20) {
        console.log("a < 20");
    }
}

function ifAndElse(param) {
    if (param < 5) {
        console.log("a < 5");
    } else if (param < 10) {
        console.log("a < 10");
    } else if (param < 20) {
        console.log("a < 20");
    } else {
        console.log("a < other");
    }
}

// ifAndElse(100);

function ifAndElse2(param) {
    if (param < 5) {
        console.log("a < 5");
    } else if (param < 10) {
        console.log("a < 10");
    }

    if (param < 20) {
        console.log("a < 20");
    } else {
        console.log("a < other");
    }
}

// TODO 邏輯運算元 (great than, less than, equal, not equal, or, and, not ...)
function logic(number) {
    if (number > 10) {
        console.log("number 大於 10");
    }
    if (number >= 10) {
        console.log("number 大於等於 10");
    }
    if (number < 10) {
        console.log("number 小於 10");
    }
    if (number <= 10) {
        console.log("number 小於等於 10");
    }
    if (number == 10) {
        console.log("number 等於 10");
    }
    if (number != 10) {
        console.log("number 不等於 10");
    }
    if (number > 10 || number < 5) {
        console.log("number 大於 10 或者 number 小於 5");
    }
    if (number > 10 && number < 15) {
        console.log("number 大於 10 而且 number 小於 15");
    }
    if (!(number > 10)) {
        console.log("number 不 大於 10 (number 小於等於 9)");
    }
}

// TODO return 回傳
// 宣告
function returnNumber(param) {
    if (param < 10) {
        console.log("hello");
        return 10;
    }

    console.log("world");
    return 8;
}

// 使用
let result = returnNumber(11);
// console.log(result);
