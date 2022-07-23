// # 迴圈

// for
function forLoop() {
  let array = [9, 8, 7, 6, 5];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// forLoop();

// while
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

// 判斷式
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

// return 回傳
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
console.log(result)