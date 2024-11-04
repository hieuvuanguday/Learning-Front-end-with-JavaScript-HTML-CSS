// Thuộc tính prototype sử dụng rộng rãi trong js
// mọi constructor function có sẵn trong js đều sử dụng nó

//Tổng kết các khái niệm như sau:
//-[[Prototype]] là 1 thuộc tính ẩn trong object(function).đại diện cho prototype thực tế
//-__proto__ là get/set truy cập của [[Prototype]]
//-thuộc tính 'prototype' tồn tại trong constructor function nó là 1 thuộc tính bình thường
//      không phải là [[Prototype]]. nó giúp ta kế thừa khi tạo object từ constructor function

//Object.prototype
//      object rỗng
let obj = {};  //tạo một object tên là obj
// let obj1 = new Object -> được tạo ra từ constructor là Object
console.log(obj.toString()); //[object Object]
// toString này chạy | nhưng tại sao lại chạy
// vì obj được tạo ra từ Object nên nó thừa hưởng các method của Object
// console.log(obj.__proto__ == Object.prototype); 
console.log(Object.prototype); //class Object
console.log(Object.prototype.__proto__); //null
console.log(obj.__proto__);//Object.prototype => class Object
console.log(obj.__proto__.__proto__); //null\
//
let mang = [1, 2,3];
// vậy object mảng 1 được tạo ra từ constructor Array
console.log(mang.__proto__ === Array.prototype); //true
console.log(mang.__proto__.__proto__ === Object.prototype); //true
console.log(mang.__proto__.__proto__.__proto__ === null); //true


// 
//trong class Array có method toString
// trong class Object có method toString
// mang > Array(tostring) > Object(toString) > null
// mang xài toString của ai

// mang.toString, của Array
// do override - vượt mặt


