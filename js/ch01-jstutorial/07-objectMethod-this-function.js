// 'use strict'
console.log("07-objectMethod-this-function");
// 
// object: đối tượng
//          tất cả những gì sờ được, đếm được thì đều được gọi là object
//          các đối tượng(object) có thể được miêu tả bằng props(thuộc tính)
//              các đối tượng có hành động(function)
//                  (hàm ở ngoài gọi là function)
//                      nếu hàm được viết trong object thì được gọi là method (phương thức)

// 
let promotionBoy1 = {
    nickName: "Lê Mười Điệp", //prop
    age: 24, //prop
    // hành động: method
    // FD
    sayHi() {
        console.log("Ahihi quẹo lựa quẹo lựa!");
    },
    // FE
    sayHi1: function () {
        console.log("Ahihi quẹo lựa quẹo lựa!");
    },
    // FA
    sayHi2: () => {
        console.log("Ahihi quẹo lựa quẹo lựa!");
    },
};
// Cách tạo method FE|FD về mặt lý thuyết
// có sự khác nhau trên cơ sở kế thừa
// nhưng mà nhỏ, không đáng kể
// => người ta thường chọn viết method bằng FD để đạt hiệu quả rút gọn
// Dân chơi object, xu hướng chuộng FD
// Dân viết function, xu hướng chuộng FE|FA

// ta có thể thêm prop hay method sau khi đã tạo object
console.log(promotionBoy1.money); //undefined
promotionBoy1.money = 10000; //khác java(đúc tượng)
promotionBoy1.chuiKhach = function () {
    console.log("Sao anh/chị hỏi quá chời mà hỏng có mua ?");
};

// nâng cao 1 tý
// THIS method

let promotionBoy2 = {
    nickName: "Lê Mười Điệp", 
    age: 24, 
    showName() {
        console.log("Nickname là: " + this.nickName); //undefined
    },
    // FE
    showName1: function () {
        console.log("Nickname là: " + this.nickName); //undefined
    },
    // FA
    showName2: () => {
        console.log("Nickname là: " + this.nickName); //undefined
    },
};
// this chỉ có giá trị khi runtime | khi mà hàm được gọi thì this mới có giá trị
promotionBoy2.showName();
// showwName và showName1 được ai gọi: promotionBoy2 | fd và fe
promotionBoy2.showName2();
// showwName2 được ai gọi: window => undefined | fa
// =>> Viết method thì không chơi với FA

// nâng cấp thêm 1 tý
// tại sao cần có this?
let promotionBoy3 = {
    nickName: "Lê Mười Điệp", 
    age: 24,
    // FD 
    showName() {
        console.log("Nickname là: " + this.nickName); //undefined
    },
};
promotionBoy3.showName();
let promotionBoy4 = promotionBoy3; // hai chàng trỏ một nàng
promotionBoy3 = null;
promotionBoy4.showName(); //không dùng this là lỗi
// =>> this không bị ràng buộc giá trị, ai gọi tui thì tui sẽ là người đó

// nâng thêm 1 tý nữa
// this trong function trong method (object>method>function>this)
let promotionBoy5 = {
    nickName: "Lê Mười Điệp", 
    age: 24,
    // FD 
    showName() {
        let arrow = () => {
            console.log("Nickname là: " + this.nickName); 
        };
        arrow();
    },
    // FE
    showName1() {
        let expression = function () {
            console.log("Nickname là: " + this.nickName); 
        };
        expression();
    },
};
promotionBoy5.showName();
// showName ai gọi: promotionBoy5 - FD 
// showName không thấy this vì nó nằm trong lớp hàm
//      arrow: không ai gọi - FA => không giam this
//          FA thả this, nhưng sau đó this lại bị chặn bởi showNamw
//              => FD giam, this giờ là promotionBoy5
promotionBoy5.showName1();
// showName1: promotionBoy5 - FD => giam this
//      expression: không ai gọi => FE => giam this
//      (use strict)           |       (normal)
//      undefined              |   global(window)
//mà undefined.nickName => lỗi | còn window.nickName thì undefined

//nâng lên 1 tý nữa
// this trong callback
let promotionBoy6 = {
    nickName: "Lê Mười Điệp", 
    age: 24,
    // FD 
    showName() {
        setTimeout(function () {
            console.log("nickName là: " + this.nickName);
        }, 1000);
    },
};
promotionBoy6.showName();
// showName: promotionBoy6 - FD => giam this
//      hàm vô danh: không ai gọi - FE => giam this
//      (use strict)           |       (normal)
//      undefined              |   global(window)
//mà undefined.nickName => lỗi | còn window.nickName thì undefined

//
let promotionBoy7 = {
    nickName: "Lê Mười Điệp", 
    age: 24,
    // FD 
    showName() {
        setTimeout(() => {
            console.log("nickName là: " + this.nickName);
        }, 1000);
    },
};
promotionBoy7.showName();
//showName: promotionBoy7 - FD => giam this
//      hàm vô danh: không ai gọi - FA => không giam this
//          this ra ngoài gặp ai: showName
//              showName giam this lại => this gọi bởi promotionBoy7

//Nâng cao: HOF
//Higher Order Function: có 3 khái niệm
// 1. callBack: hàm nhận vào một hàm làm parameter
// 2. closure:
// 3. currying:

//Viết hàm nhận vào 2 số, trả ra tổng của hai số đó
let sumDemo = (a, b) => {
    return a+b;
};
//HOF
sumDemo = (a) => {
    return (b) => {
        return a + b;
    };
};
//rút ngắn
sumDemo1 = (a) => (b) => a + b;
// console.log(sumDemo(2, 5)); //7
console.log(sumDemo(2)); //trả lại nguyên hàm nhận b
console.log(sumDemo(2)(5));
console.log(sumDemo1(2)(5));
// VD cho callBack
const array1 = [1, 2, 3, 4, 5];
array1.forEach((item) => {
    console.log(item);
});
// 2. Closure
//  2.1 Lexical scoping: hàm con dùng biến của hàm cha
//  2.2 Closure: là một function return 1 function
//Ứng dụng: tạo ra một hàm chuyên render id (máy tạo key tự tăng)
const initIdentity = () => {
    let newID = 0;
    return () => ++newID;
};

console.log(initIdentity()); //() => ++newID; | kèm theo tạo newID = 0
console.log(initIdentity()()); //1
console.log(initIdentity()()); //cũng ra 1 => xài sai
// tại vì trong quá trình gọi thì cũng đã gọi lại 1 lần initIdentity
// nó khởi tạo lại newID = 0
// xài đúng nè !!!
let demoClosure = initIdentity();
console.log(demoClosure()); //1
console.log(demoClosure()); //2
console.log(demoClosure()); //3
console.log(demoClosure()); //4
console.log(demoClosure()); //5

// 3. currying:: kỹ thuật chuyển đổi từ 1 function nhận vào nhiều parameter
//          thành những function lên tiếp có tham số

// Viết một hàm xử lý 3 bài toán
// 1 hàm có thể sử dụng để giải quyết cả 3 bài toán cùng một lúc
//      Tìm các số từ 0 - 10 là số lẻ
//      Tìm các số từ 0 - 20 là số chẵn
//      Tìm các số từ 0 - 30 là số chia 3 dư 2
// => callback | callback + currying
// Làm 1 hàm nhận vào 1 số number, và 1 hàm check theo yêu cầu
function handle3(number, funct){
    let result = [];
    for(let i = 0; i <= number; i++){
        if(funct(i)) result.push(i);
    };
    return result;
};
console.log(handle3(10, (number) => number % 2 == 1));
console.log(handle3(20, (number) => number % 2 == 0));
console.log(handle3(30, (number) => number % 3 == 2));

// currying
const handle4 = (number) => (funct) => {
    let result = [];
    for(let i = 0; i <= number; i++){
        if(funct(i)) result.push(i);
    };
    return result;
};
console.log(handle4(30)((number) => number % 3 == 2));
// currying không có tác dụng, làm code khó đọc
// trong react + angular thì mới ngon

// ------------------
// Call Apply Bind
const people = {
    print(age, location){
        console.log(this.fullname + " " + age + " " + location);
    },
};
people.print(10, "TP.HCM"); //this là people => undefined 10 TP.HCM

//ta có thể bẻ cong đường dẫn của this Call Apply Bind
const diep = {fullname: "Lê Mười Điệp"};
//1.call(object, ...parameter cũ)
people.print.call(diep, 10 , "TP.HCM"); // Lê Mười Điệp 10 TP.HCM
//2.apply(object, [...parameter cũ])
people.print.apply(diep, [10 , "TP.HCM"]); // Lê Mười Điệp 10 TP.HCM
// khác mỗi cách xài
//3.bind(object, ...parameter cũ)() => closure
//3.bind(object)(...parameter cũ) => currying
people.print.bind(diep, 10 , "TP.HCM")();
people.print.bind(diep)(10 , "TP.HCM");

let promotionBoy8 = {
    nickName: "Lê Mười Điệp", 
    age: 24,
    // FD 
    showName() {
        setTimeout(function () {
            console.log("nickName là: " + this.nickName);
        }.bind(this), 1000);
    },
};
promotionBoy8.showName(); //ra bình thường

// datetime
// thời gian trong JS là object | dựa vào milisecond
// được tính từ 1/1/1970 theo chuẩn UTC
// có 4 cách khởi tạo
let a = new Date(); //Wed Aug 17 2022 21:07:28 GMT+0700 (Indochina Time)
a = new Date(1660745304269); //Wed Aug 17 2022 21:07:28 GMT+0700 (Indochina Time)
a = new Date(2022-8-17); //Wed Aug 17 2022 00:00:00 GMT+0700 
// không phải trình duyệt cũng hỗ trợ dạng dateString
a = new Date(2022, 7, 17, 21, 10, 32, 100); //Wed Aug 17 2022 21:10:32 GMT+0700 (Indochina Time)

//y/m-1/d/h/m/s/ms
// getDate()        : lấy ngày trong tháng //16
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn
//dùng để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được

console.log(a.toISOString()); //2022-08-17T14:10:32.100Z
//=> dùng để chuyển thành dạng dữ liệu dùng cho DB

