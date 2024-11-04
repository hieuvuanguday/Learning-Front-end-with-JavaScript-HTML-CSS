// 01-propertyFlag-descriptorObject
// ngoài các property, trong object còn các các thuộc tính cờ
// Khái niệm: Property flag
// value        : giá trị của props
// writable     : nếu true thì value có thể thay đổi, false thì read-only (khả năng ghi đè)
// enumerable   : nếu true thì property được liệt kê khi lặp, false thì không được liệt kê (tính hiển thị khả lập, nếu false là không duyệt được)
// configurable : nếu true thì property có thể bị xóa writable và enumerable có thể bị thay đổi, (khả năng chỉnh sửa cờ)
                    //false thì không thể 

// 1 thuộc tính có đủ 3 cờ và value(tính là 1),bộ 4 cờ này người ta gọi đó 
//                                              là bộ mô tả thuộc tính (property descriptor)
let profile = {
    name: "Anh Điệp", 
    age: 18,
};

// 1. Object.getOwnPropertyDescriptors(obj, "propName")
// -> giúp lấy ra tất cả các bộ cờ của prop trong obj
console.log(Object.getOwnPropertyDescriptors(profile, "age"));
// {value: 18, writable: true, enumerable: true, configurable: true}

// 2. Thay đổi|thêm mới một prop và cờ bằng Object.defineProperty(obj, "propName", {})
Object.defineProperty(profile, "name", {
    writable: false
});
// Vậy lúc này name không còn có thể bị ghi đè
profile.name = "Huệ";
console.log(profile);

// tạo mới prop cho profile
 Object.defineProperty(profile, "job", {
    value: "zhangho",
    writable: true,
    configurable: true,
 });
// trong quá trình tạo mới prop
// flag nào không được nhắc đến sẽ có giá trị là false
 console.log(profile);

 for(const key in profile){
    console.log(key);
 };
// bởi vì forin lúc này chỉ chạy qua name và age
// bởi vì enumerable đang bị giá trị là false


//* một khi đã set configurable: false thì k thể dùng defineProperty để set lại thành true
// configurable: false thì sẽ có những hạn chế sau
// 1. không thể thay đổi configurable
// 2. không thể thay đổi enumerable
// 3. không thể thay đổi writable: false -> true(nhưng ngược lại true -> false thì đc)
// 4. không thể thay đổi getter/setter


//Object.defineProperties(obj,{
        // key : {value:' ',descriptor}
        // key : {value:' ',descriptor}
// })
// giúp định nghĩa nhiều thuộc tính cùng lúc

// Object.getOwnPropertyDescriptors(obj,'PI')
// giúp return nhiều thuộc tính cùng lúc
// nếu kết hợp definesProperties có thể clone một object có full bộ cờ

// xem tất cả các cờ của tất cả các prop trong obj
console.log(Object.getOwnPropertyDescriptors(profile));


// clone Object kèm bộ cờ của prop
// anh muốn tọa ra object giống y chang thằng profile
let cloneObj = {
    ...profile //dùng spread
};
console.log(Object.getOwnPropertyDescriptors(cloneObj));
// nó chỉ clone được prop có enumerable: true và không clone được bộ cờ

// cách clone thứ 2 là thông qua method của Object
let cloneObj2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(profile));
console.log(Object.getOwnPropertyDescriptors(cloneObj2));

// có 2 loại thuộc tính trong Object:
//      thuộc tính dữ liệu: value property
// thuộc tính bộ truy cập: accessor property

let student = {
    lastName: "Điệp", //value property
    firstName: "Lê", //value property
    // accessor propperty: get/set
    // get: lấy giá trị
    get fullName(){
        return this.lastName + " " + this.firstName;
    },
    // set: chỉnh sửa giá trị
    set fullName(newName){
        [this.lastName, this.firstName] = newName.split(" ");
    },
};
console.log(student.fullName); //Điệp Lê
student.fullName = "Trà Long";
console.log(student.fullName);
console.log(student); //

//Sealing an object globally - niêm phong toàn bộ 1 object
//      những thằng này rất ít dùng trong dự án nhưng cũng rất là nhanh tiện
// Object.preventExtensions(obj)
//      Ngăn cấm thêm thuộc tính mới vào object
//      muốn biết 1 object có đang preventExtensions không  ta dùng Object.isExtensible(object)

// Object.seal(obj) 
//      Ngăn cấm thêm mới/xóa thuộc tính object
//      set configurable : false cho tất cả các pro
//      muốn biết 1 object có đang seal không  ta dùng Object.isSealed(object)

// Object.freeze(obj) 
//      Ngăn cấm thêm mới/xóa/thay đổi thuộc tính object
//      set configurable : false và writable: false cho tất cả các pro
//      muốn biết 1 object có đang freeze không  ta dùng Obje

//------------------
//Bộ mô tả (descriptor) của bộ accessor properties sẽ 
//          không có writable và value như value properties
//          nhưng có thêm get và set function
//get: 1 function không có tham số, hoạt động khi thuộc tính được đọc(gọi)
//set: 1 function có tham số,       hoạt động khi thuộc tính được set
//enumerable:
//configurable:




//có thể tạo thêm getter và setter cho object được tạo sẳn
//           thông qua defineProperty
console.log(Object.getOwnPropertyDescriptors(student));
// value property: value, writable, enumerable, configurable
// accessor property: set, get, enumerable, configurable





