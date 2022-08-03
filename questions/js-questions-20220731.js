// 接收使用者輸入的身高和體重,將判斷結果輸出
// 過輕：低於18.5
// 正常：18.5 ~ 22.9
// 偏胖：23 ~ 24.9
// 肥胖：25 ~ 29.9
// 重度肥胖：高於30
// 極度肥胖：高於40


function q1(height, weight) {
    let result = "";
    let BMI =weight/(height/100)/(height/100)
    if(BMI<18.5){
        result="過輕"
    }    
//這行也可以寫成return "過輕"(以下類推) 而且也因為都return掉，就不用寫return result
// 而且也因為return就中止，所以就也不用寫else if 
// 參數是讓人傳值用的，所以盡量不要修改他的值；變數則是自行宣告使用

//     else if(BMI>18.5&&BMI<22.9){
//         result="正常"
//     }
//     else if(BMI>23&&BMI<24.9){
//         result="偏胖"
//     }
//     else if(BMI>25&&BMI<29.9){
//         result="肥胖"
//     }
//     else if(BMI>30&&BMI<39){
//         result="重度肥胖"
//     }
//     else if(BMI>40){
//         result="極度肥胖"
//     }
//     // ...
//     return result;
//     let BMI =weight/(height/100)/(height/100)

//     weight = 10
//     if(BMI<18.5){
//        return "過輕"
//     }    
//     if(BMI>18.5&&BMI<22.9){
//         return "正常"
//     }
//     if(BMI>23&&BMI<24.9){
//         return "偏胖"
//     }
//     if(BMI>25&&BMI<29.9){
//         return "肥胖"
//     }
//     if(BMI>30&&BMI<39){
//         return "重度肥胖"
//     }
//     if(BMI>40){
//         return "極度肥胖"
//     }
}

//X<15 && X>10 且的概念
//X<15 || X>10 或的概念
// X!=15 代表X不等於15
// !X<15 代表後面指令的相反，也就是X要大於等於15
console.log(q1(180,60))


// 手機選號:根據使用者輸入的手機號來確認使用者實際支付的價格
// 如果尾數為8，需支付辦卡費50元
// 如果尾數為4，需支付辦卡費用0元
// 如果是其他尾號,需支付辦卡費用20員

function q2(phoneNumber) {
    let cost;

    // ...
    return cost;
}

// 需求:接收使用者輸入的數位,計算該數位的階乘結果
// 已知:負數不可以有階乘,0的階乘結果是1, 5!=54321
function q3(number) {
    let result = 1;
    for(let i=1; i<=number;i++){


    }
    




    // ...
    return result;
}

console.log(q3(3))
//進去看參數；出去看回傳

// 100以內除了尾數為3,5,7的所有數
function q4() {
    let result = [];
    for(let i=1;i<=100;i++){
        if(i%10!=3&&i%10!=5&&i%10!=7){
            result.push(i);
        }
    }
    // ...
    return result;
}
console.log(q4())

// 泡沫排序法
function q5() {
    let array = [8, 2, 4, 81, 18, 9, 45, 29, 10, 56];

    return array;
}
