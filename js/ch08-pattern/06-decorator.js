// Decorator pattern: sử dụng để mở rộng chức năng của 1 object mà
// không làm thay đổi constructor function hiện tại
function Car(name){
    this.name = name;
    this.color = "white";
}
// tạo 1 chiếc xe từ class Car
let tesla = new Car("tesla model 3");
// muốn thêm giá cho chiếc tesla
// Car.prototype.price = 6000; //không nên vì bị đổ domino
// tesla.__proto__.price = 6000; //không nên
tesla.price = 6000;
console.log(tesla);
//
class Bike{
    constructor(){
        this.cost = function(){
            return 600;
        };
    }
}
// decorator
function bikeWithAC(bike){
    bike.hasAC = true;
    const prevCost = bike.cost();
    bike.cost = function(){
        return prevCost + 120;
    }
}
function bikeWithAT(bike){
    bike.hasAT = true;
    const prevCost = bike.cost();
    bike.cost = function(){
        return prevCost + 80;
    }
}

let hd48 = new Bike();
bikeWithAC(hd48);
console.log(hd48.cost());








