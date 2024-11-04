// 03-Prototypal-inherictance.js
// Prototypal-inherictance: kế thừa nguyên mẫu
// kế thừa nguyên mẫu xảy ra với Object cụ thể

// Trong mỗi Object đều có [[Prototype]]
// trong js 1 số thuộc tính ẩn trong obj được gọi là [[Prototype]]
//          dù bị ẫn nhưng có nhiều cách sử dụng nó 
//          một trong những cách dùng là thông qua getter và setter là proto
//          vd: tạo object rabbit kế thừa object animal
// chúng ta có thể cho 2 object kế thừa nguyên mẫu bằng [[Prototype]] (bằng cách sử dụng __proto__)

let congido = {
    eats: true,
    walk(){
        console.log("Tao đang chạy bộ nè");
    },
};

let yellowRabbit = {
    jumps: true,
};

let longEar = {
    ear: "long",
    __proto__: yellowRabbit,
};
// set longEar.[[Prototype]] = yellowRabbit
// longEar kế thừa nguyên mẫu của yellowRabbit
yellowRabbit.__proto__ = congido; //
// set yellowRabbit.[[Prototype]] = congido
// yellowRabbit kế thừa nguyên mẫu của congido
console.log(longEar.jumps); //true
console.log(longEar.eats); //true
congido.eats = false;
console.log(longEar.eats); //false
//nếu có cập nhật 1 đối tượng trong dây phả hệ
// thì các thằng số lớn (những thằng sinh sau đẻ muộn) sẽ bị ảnh hưởng
student = {
    lastName : 'Điệp',//value properties
    firstName: 'Lê',  //value properties
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
       ;[this.firstName, this.lastName] = value.split(' ')
    }
}

let user = {
    __proto__: student,
    isUser: true
}
user.fullName = 'Khủng Long' //tạo ra 2 thuộc tính mới là firstName và lastName cho user chứ không ghi đè lên prop của student




