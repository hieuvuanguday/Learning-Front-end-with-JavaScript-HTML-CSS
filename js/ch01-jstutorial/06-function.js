// 'use strict'
console.log("Bài 6: Hàm -function")
//hàm có 2 cách tạo
//Function declararion | Function expression
// 1. Function declaration: khai báo hàm - có hoisting
handle1()
function handle1(){
    console.log("Function declaration")
}
handle1() //call function
// 2. Function expression: biểu thức hàm | biến chứa hàm - không hoisting
let handle2 = function () {
    console.log("Function expression")
}
handle2()

// IIFE(immediately invokable function expression)
// Hàm tạo ra không cần đặt tên rồi dùng luôn, không tái sử dụng được

;(function () {
    let a = 10;
    let b = 20;
    console.log(a + b);
})();

// IIFE: đỡ đặt tên, gôm code lại cho dễ đọc
// IIFE rất tốt nếu xài kèm với async await

// Anonymous Function (Bản chất là FE)
// callback: gọi lại | hàm nhận vào một hàm làm đối số (Parameter)
// handle1(handle2): callback | handle2 gọi là callback function
// *handle2 là một function 

// setTimeout(handle, milisecond) : call back
           //callback function là handle
// sau milisecond thì sẽ gọi handle
var handle3 = function () {
    console.log("Ahiihii đồ ngu")
};
// setTimeout(handle3, 3000)
// ;setTimeout(function() {
//     console.log("Ahihi")
// }, 3000);
// Arrow fuction
// ;setTimeout(() => {
//     console.log("ahihi")
// }, 3000);

// Arrow function: cách viết tắt của FE
// thằng này sẽ thả this | và this sẽ đi đến được global(window)

// FD
function handle4() {
    console.log(this)
}
// FE
let handle5 = function() {
    console.log(this)
}
// FA
let handle6 = () => {
    console.log(this)
}

// chạy              (normal)              (use strict)
handle4()//FD       windowObject            undefined
handle5()//FE       windowObject            undefined
handle6()//FA       windowObject            windowObject

// this là gì? là đại diện cho object gọi nó
// FD | FE khóa this (tốt) | nếu không có ai gọi thì là undefined
//FA thì nó luôn thả this, this ra max tầm thì gặp global

// vd2
var person1 = {
    fullname: "Điệp đẹp chai",
    getNameByFD(){
        console.log(this.fullname);//undifined
    },
    getNameByFE: function(){
        console.log(this.fullname);//undifined
    },
    getNameByFA: () => {
        console.log(this.fullname);//undifined
    },
};
person1.getNameByFD(); //console.log(person1.fullname) "Điệp đẹo chai"
person1.getNameByFE(); //console.log(person1.fullname) "Điệp đẹo chai"
person1.getNameByFA(); //console.log(window.fullname)   undifined

//nếu em viết hàm mà có dùng this trong hàm thì đừng dùng FA
//vì dùng FA + this thì cần apply | call | bind

//Phân biết parameter (tham số) | argument (đối số)
function handle7(a, b = 10){
    console.log(a + b)
}//a và b là parameter | tham số | biến tham khảo giá trị
handle7(2, 3) //đối số | số cho parameter đối chiếu
handle7(2)
// tham số còn lại | đợi | nghỉ

function handle8(a, b, ...c){
    console.log(a)
    console.log(b)
    console.log(c)
}
// c mặc định sẽ là mảng rỗng
handle8(1, 4)
handle8(1, 4, 5)
handle8(1, 4, 5, 7)
//vd: viết hàm nhận vào một đống số
//tính tổng
function handle9(...numberList){
    let sum = 0; //initial value
    for (const val of numberList) {
        sum += val;
    }    
    return sum;
}
let result = handle9(1, 2, 3, 4, 5)
console.log(result)
//Bài 9: Number method
//JS không dành cho app ngân hàng
//số trong JS chỉ có number
//Số nguyên: độ chính xác 15 số
let x = 999999999999999; //999999999999999
x = 9999999999999999; //10000000000000000
console.log(x)
//số thập phân: độ chính xác là 17
x = 0.1 + 0.2; //0.3000000000000004
x = (0.1*10 + 0.2*10)/10; //0.3
x = Number((0.2 + 0.1).toFixed(1));
// toFixed trả ra String, ép về số bằng Number() - wrapper constructor

console.log(x)
// số + số = số
// số + string = string
console.log(2+2)//4
console.log(2+"2")//"22"
console.log(2+ "a")//"2a"
// số - string = số | NaN
console.log(2 - "2")//0
console.log(2 - "a")//NaN

console.log(2/0)//infinity
console.log(-2/0)//-infinity

x = 07; //không phải 7 mà là octal(8)
x = 0xff; //hệ hexa(16)
//ép số về string
//wrapper constructor
x = 1999;
x = String(1999);

//toString
x = 1999;
x.toString();
