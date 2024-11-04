// Factory pattern: là một pattern sử dụng phương thức Factory để tạo object
//      mà không cần chỉ định chính xác class hay constructor
// => tạo object mà không lô Logic khởi tạo
// => tạo object dựa trên các chỉ thị cho trước

// vd: tôi đi mua xe
// option: {vehicleType: "car", color: "red", door: 2}
class Car{
    constructor(options){
        this.door = options.door || 4;
        this.state = options.state || "Brand new";
        this.color = options.color || "White";
    }
}
class Truck{
    constructor(options){
        this.door = options.door || 2;
        this.state = options.state || "Used";
        this.color = options.color || "Black";
    }
}
class vehicleFactory{
    createVehicle(options){
        if(options.vehicleType == "car") return new Car(options);
        if(options.vehicleType == "truck") return new Truck(options);
    }
}

let factory = new vehicleFactory();
let mec = factory.createVehicle({
    vehicleType: "car",
    color: "blue",
})




