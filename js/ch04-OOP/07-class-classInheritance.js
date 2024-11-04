// Class là gì?
// class là một cái khuôn chuyên đúc ra các object(bức tượng)
// trong class sẽ có constructor function(phễu) và các method
// Class dùng phễu để tạo các object
// tạo ra 1 class User chuyên dùng để đúc các object User
class User{
    constructor(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
    // method show
    show(){
        console.log(
            `FirstName là ${this.firstName}, lastName là ${this.lastName}`
        );
    }
}
let diep = new User("Lê Điệp");
console.log(diep);

// trong User diep có:
//      thuộc tính: firstName, lastName
//      [[Prototype]]: User.protype => Class User
// trong class User có gì?
//      constructor
//      method: show()

// thực tế khi gọi User, bạn đang đề cập tới Constructor function
console.log(typeof User); //function
console.log(User.prototype); //Class User (constructor, method show)
console.log(User.prototype.constructor == User); //true

//class còn được gọi với 1 cái tên nữa là 'syntactic sugar'
//'syntactic sugar': cú pháp kẹo đường -> ý chỉ sự thay đổi về mặt syntax cho để tiếp cận
//      nhưng không làm thay đổi hay thêm tính năng mới gì cả
// bởi vì ngay từ đầu chúng ta có thể tạo ra class mà không hề dùng đến từ khóa class
//      như các bài trước đã học

// constructor tạo Student
function Student(fullName){
    [this.firstName, this.lastName] = fullName.split(" ");
    // method viết như này thì mỗi object tạo ra sẽ có 1 method show riêng
    // điều này làm tăng bộ nhớ những phần trùng nhau
    // this.show = function(){
    //     console.log(
    //         `FirstName là ${this.firstName}, lastName là ${this.lastName}`
    //     );
    // };
}
// xài như này vừa dễ thêm, các object tạo ra đucợ xài chung show
Student.prototype.show = console.log(`FirstName là ${this.firstName}, lastName là ${this.lastName}`);
// tạo 1 Student
let hue = new Student("Nguyễn Huệ");
console.log(hue);

// 1/ Nếu dùng constructor thì tạo object không cần toán tử new
hue = Student("Nguyễn Huệ");
// 2/ Hiển thị
// 3/ Class thì phải luôn trong chế độ useStrict

// Class Expression
// cách viết ở trên là class declaration
let user2 = class User{
    constructor(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
    // method show
    show(){
        console.log(
            `FirstName là ${this.firstName}, lastName là ${this.lastName}`
        );
    }
}

// *computedName[...]
class User5 {
    firstName = "Nguyễn";
    ["show" + "Infor"](){
        console.log("Hello");
    }
}
let hue1 = new User5();
hue1.showInfor();

// cảnh giác với this trong class
class Button{
    constructor(value){
        this.value = value;
    }
    click(){
        console.log("giá trị là " + this.value);
    }
}

// 
let btn = new Button("Hello");
btn.click();// giá trị là Hello

// cẩn thận this trong callback
setTimeout(btn.click(), 1000);//giá trị là undefined, vì nó cbi hàm trước, sau đó chỉ thực thi click

// c1: wrapper class function: tạo 1 ham khác bọc đó lại 
// setTimeout(() => {
//     btn.click();
// }, 1000); //giá trị là hello

// c2: bind(): đem 1 giá trị vào hàm và tạo ra hàm mới

class Button2{
    constructor(value){
        this.value = value;
        this.click = this.click.bind(this); //định danh chính xác this
        // nhưng không tốt vì nó can thiệp vào trong class
    }
    click(){
        console.log("giá trị là " + this.value);
    }
}
let btn2 = new Button2("Huhu");
setTimeout(btn2.click(), 1000); //undefined, sau khi chỉnh thì được

// c3: dùng arrow thay thế cho method
class Button3{
    constructor(value){
        this.value = value;
    }
    click = () => {
        console.log("giá trị là " + this.value);
        // nhưng vẫn can thiệp vào class, chê
    }
}
let btn3 = new Button2("Hihi");
setTimeout(btn3.click(), 1000); //undefined, sau khi chỉnh thì được

// class inheritance: kế thừa thông qua class
// Lịch sử: khi mà giống loài lập tình viên vừa mới được hình thành
// Ngài JS toàn năng không tạo ra class, ổng chỉ tạo ra constructor
// dùng để tạo ra object, và kế thừa thông qua prototype
// ---
// Về sau vì cú pháp code khó đọc, khó hiểu, ổng phát triển ra
// cú pháp kẹo đường để thay thế (nhưng không thay thế được)

// class có trước hay constructor có trước -> constructor
// trước khi có class ngta có kế thừa được không?
// Có! Vậy thời điểm đó họ kế thừa bằng gì? -> prototype của constructor

// về sau có class rồi, ta có cách viết kế thừa để dễ đọc hơn
// chỉ cần dùng từ khóa "extends"

// 
class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    };
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    };
    stop(){
        console.log(`${this.name} stand still`);
    };
}

let ani = new Animal("My Animal");

// trong ani có gì?
//      name: "My Animal"
//      speed: 0
//      [[Prototype]]: Animal.prototype => class Animal
//           constructor
//           run(speed)
//           stop()
//           [[Prototype]]: Object
//               constructor: Object()
//               ...
//               [[Prototype]]: null

// Rabbit kế thừa Animal
// Rabbit có tất cả những gì Animal có
// những method riêng của Rabbit thì Animal không có
class Rabbit extends Animal {
    constructor(name){
        super(name); //super: new Animal(name)
    }
    hide(){
        console.log(`${this.name} hide!!!`);
    }
    stop(){
        setTimeout(()=>{
            super.stop();
        }, 1000);   
    }
}
let rb = new Rabbit("white Rabbit");

// trong rb có gì?
//      name: "white Rabbit"
//      speed: 0 
//      [[Prototype]]: Rabbit.prototype => class Rabbit
//          constructor, hide(), stop()
//          [[Prototype]]: Animal.prototype => class Animal
//              constructor
//              run(speed)
//              stop()
//              [[Prototype]]: Object
//                  constructor: Object()
//                  ...
//                  [[Prototype]]: null 
rb.run(5);
rb.hide();
// nếu ani dùng method stop thì nó dùng method của Animal
// rb thì dùng của Rabbit (nhưng vẫn có stop của Animal)
class Animal1{
    name = "isAnimal"; //class field
    constructor(){
        console.log(this.name);
    }
}

class Rabbit1 extends Animal1{
    name = "isRabbit"; //class field
}
let ani1 = new Animal1();
let rb1 = new Rabbit1(); // đều in ra isRabbit
// class field: nếu constructor đề cập tới 
// thì nó mặc đinh dùng class field của nó

// khi tạo rb1 thì nó chạy của Animal trước, sau đó mới đổi giá trị 
// thành giá trị riêng




