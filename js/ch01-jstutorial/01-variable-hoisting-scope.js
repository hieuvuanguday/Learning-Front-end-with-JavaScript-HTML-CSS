// 'use strict' : nếu mở lên thì sẽ không được cẩu thả
console.log("Bài 1: Variable-hoisting-scope")
// Khai báo biến: var / let / const
// + var: xuất hiện từ bảng ES (tên cũ của JS) đầu tiên
// re-assigning: gán biến
// Khai báo và gắn biến
var name1 = 'Điệp đẹp chai'
console.log(name1)
name1 = 'Điệp 10 điểm'
console.log(name1)
// Khai báo nhưng không gán biến
var age
console.log(age) //Undefined do không kiểu biến là gì
age =10
console.log(age)
// Quy tắc đặt tên:
// - Không bắt đầu bằng số => bắt đầu bằng chữ cái
// - Nguyên tắc camelCase(theHieu), underscore (the_hieu)
//              Pascal case/UpperCamelCase(TheHieu)
// - Được phép dùng '_': private và '$': protected ở đầu

// Hoisting với var: (Hoisting: móc ngược lên) 
// Là tính năng, không phải bug, chỉ được với var, còn lại bị chửi
// var msg
console.log(msg) //undefined: tự động đặt việc tạo biến lên đầu
var msg = 'Hello'
console.log(msg)

// NormalMode / use strict mode
message = 'Thông Báo' //Tự tạo cho mình dưới dạng var nếu ở NormalMode
console.log(message) //Thông Báo

// Let: có từ ES6 trở lên (2015)/ Const: hằng số
// Let thì giống var nhưng không có Hoisting

const profile = {name:'Toàn', height: '160'}
profile.name = 'Toàn lùn' //vẫn được
// profile = {name:'Toàn lùn', height: '160'}

//const với array
const array1 = [1, 2, 3, 4, 5] //thường dùng để nâng bảo mật
array1.push(6) //vẫn được
// array1 = [1, 2, 3, 4, 5, 6]

// Scope: trong js có 3 loại scope
// Global scope: toàn cục
// Function scope: trong hàm
// Block scope: cục bộ

// var sẽ không bị can thiệp bới block scope, đi muôn nơi
if(true){
    var son = 'Toàn'
}
console.log(son)
// Let/const: không có hoisting | var: có hoisting (use strict)
//            có blockscope     | out blockscope 

