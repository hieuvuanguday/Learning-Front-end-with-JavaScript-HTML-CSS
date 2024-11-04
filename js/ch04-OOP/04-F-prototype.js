// 04-F-prototype
// Class (khuôn)
// trong cái khuôn có constructor(cái phễu) dùng để class đúc object
// class muốn đúc ra 1 object nó sẽ dùng cái phễu
// ở trong js, constructor có thể nằm độc lập
// constructor không cần đến class
function Car(name, price){
    this.name = name;
    this.price = price;
}; //constructor
const factory = {
    date: "2021",
};
// tạo ra con xe Audi từ constructor Car
let Audi = new Car("Audi", "2 tỷ");
console.log(Audi);
Car.prototype = factory; //bản update
console.log(Audi.date); //undefined
let toyota = new Car("Toyota", "2000");
console.log(toyota.date); //2021

//F.prototype mặc định , thuộc tính constructor
// mỗi function đều có thuộc tính prototype ngay cả khi chưa gán hoặc cung cấp 
//      prototype mặc định là 1 object chứa thuộc tính là constructor trỏ ngược lại contructor function đó

function Animal(name){
    this.name = name
}

console.log(Animal.prototype) //Animal{}
console.log(Animal.prototype.constructor === Animal) //true
//nên nếu như có 1 object đc tạo ra từ constructor function này thì nó sẽ có constructor
//                                                                  của prototype
let dog = new Animal();
console.log(dog.constructor)//*Animal{}
console.log(dog.constructor === Animal)//*true

//vậy tức là mỗi 1 object đều có constructor 
//vậy ta có thể tạo ra 1 object tương tự object dog từ constructor mà dog có
let cat = new dog.constructor('kyky');
console.log(cat.constructor)//*Animal
console.log(cat)//*Animal {name: 'kyky'}


//NHƯNG: js không đảm bảo đúng constructor mà ta cần
//nếu như ta thay thế prototype thì nó k còn là constructor nữa
// Animal.prototype = {
//     jump: true
// }










