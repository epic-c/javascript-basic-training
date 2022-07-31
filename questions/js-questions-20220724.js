// https://nbpblog.pixnet.net/blog/post/23148304-%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88001-050-%E9%A1%8C%EF%BD%9E%E5%85%A5%E9%96%80%E7%AF%87-by-xlinx

// 輸入四個數字，找出最大與最小值。
function q1(p1, p2, p3, p4) {
    let max = 0;
    let min = 0;

    if (p1 < p2) {
        max = p2;
        min = p1;
    } else {
        max = p1;
        min = p2;
    }
    if (p3 < p4) {
        if (max < p4) {
            max = p4;
        }
        if (min > p3) {
            min = p3;
        }
    } else {
        if (max < p3) {
            max = p3;
        }
        if (min > p4) {
            min = p4;
        }
    }

    return {
        max: max,
        min: min,
    };
}

console.log(q1(33,4,5,66).max)


// 計算 1 + 2 + ... + n = ﹖
function q2(n) {
    let total = 0;

    // ...
    return total;
}

// 以迴圈顯示所有大小寫的英文字母。
function q3() {
    let upperCases = [];
    let lowerCases = [];

    // ...
    return {
        upperCases: upperCases,
        lowerCases: lowerCases,
    };
}

// 印出由 1 到 n (n >= 1) 中，所有能被 13 所整除的整數。
function q4(n) {
    let result = [];

    // ...
    return result;
}

// 列出九九乘法表
function q5() {
    for (let i = 2; i < 10; i++) {
        q52(i);
    }
    // only need console
}
function q52(i) {
    for (let j = 1; j < 10; j++) {
        console.log(i + "*" + j + "=" + i * j);
    }
}

q5();

// 將輸入字串之英文字母大小寫互換。
function q6(inputString) {
    let convert = "";

    // ...
    return convert;
}

// 字串反轉。如：輸入 abcdef，則輸出 fedcba。
function q7(inputString) {
    let reverse = "";

    // ...
    return reverse;
}

// 計算輸入英文文字檔案中，各「英文字母」出現的次數。(區分大小寫)
function q8(inputString) {
    let result = {};

    // ...
    return result;
}
