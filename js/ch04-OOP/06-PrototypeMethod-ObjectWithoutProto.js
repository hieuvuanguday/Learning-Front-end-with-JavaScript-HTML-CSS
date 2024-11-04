//các phương thức của prototype và nếu object k có prototype thì sẽ như thế nào
//mình đang code ở thời đại 2021 rồi, mình biết _proto_ là gì, xài như nào, nhưng
//  hãy xem như nó đã bị loại bỏ rồi, giờ mình dùng các method khác 
//Object.create(proto, [descriptor]) - tạo 1 object rỗng với việc cung cấp proto như một [[Prototype]]
//                                          và tùy chọn các bộ mô tả thuộc tính property descriptor
//Object.getPrototypeOf(obj)         - return về [[Prototype]] của object
//Object.setPrototypeOf(obj,proto)   - set [[Prototype]] của object thành proto

let animal = {
    eats: true,
};

console.log(animal.__proto__); //Object.prototype => Class Object
// tạo ra con rabbitYellow và cho có nó kế thừa animal
rabbitYellow = Object.create(animal);
// tạo ra rabbityellow có  __proto__ là animal
rabbitYellow.jumps = true; //thêm prop cho rabbitYellow
console.log(rabbitYellow);
console.log(rabbitYellow.__proto__ === animal);
console.log(Object.getPrototypeOf(rabbitYellow) === animal);

// giả sử giờ anh không cho rabbitYellow không kế thừa object animal nữa
// mà anh muốn cho nó kế thừa 1 object rỗng
rabbitYellow.__proto__ = {};
Object.setPrototypeOf(rabbitYellow, {});


// console.log(rabbitYellow);

// ta có thể tạo nhanh như sau
rabbitYellow = Object.create(animal, {
    jumps: {
        value: true,
        writable: true,
        enumerable: false,
        configurable: true,
    },
});
console.log(rabbitYellow);
// dài nhma nó chi tiết
// đặt trường hợp là bây giờ anh cần clone rabbitYellow

// spread ...
let objClone = {...rabbitYellow};
console.log(objClone);
// không clone được thuộc tính ẩn, không clone được bộ cờ
// không clone được cả [[Prototype]]

// dùng define
objClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(rabbitYellow));
console.log(objClone);
// có clone được thuộc tính ẩn, clone được bộ cờ
// không clone được [[Prototype]]

// cách đầy đủ nhất
objClone = Object.create(
    Object.getPrototypeOf(rabbitYellow), 
    Object.getOwnPropertyDescriptors(rabbitYellow))
console.log(objClone);

//đây là cách clone chính xác nhất, đầy đủ nhất

/*
Như đã thấy thì chúng ta có nhiều cách để quản lý [[Prototype]]. 
Nhiều cách để làm cùng 1 thứ. Tại sao? Sau đây là nguyên nhân lịch sử

Thuộc tính prototype của constructor function đã có từ xa xưa
Sau đó, vào năm 2012, Object.create xuất hiện trong JS tiêu chuẩn. 
Nó cung cấp khả năng tạo một object với một prototype được cung cấp, 
nhưng không cung cấp khả năng get/set nó. 
Vì thế các trình duyệt thêm một thuộc tính "không thuộc JS tiêu chuẩn" 
là _proto_ để cho phép người dùng có thể get/set một prototype bất cứ lúc nào.
Sau đó, vào năm 2015, Object.setPrototypeOf và Object.getProtypeOf 
được thêm vào JS tiêu chuẩn, để thực hiện chức năng tương tự như__proto__.
Tại sao _proto_ bị thay thế bởi các hàm getPrototypeOf/setPrototypeOf? 
Đây là một câu hỏi thú vị, đòi hỏi chúng ta phải hiểu tại sao _proto_ khá tệ. 
Đọc thêm để biết câu trả lời. "very plain Object" để hiểu rỏ tại sao nó tệ

Đừng thay đổi [[Prototype]] trên các object đang tồn tại 
nếu quan tâm đến vấn đề tốc độ Về mặt kỹ thuật, 
chúng ta có thể get/set [[Prototype]] bất kỳ lúc nào. 
Nhưng thường thì chúng ta chỉ set một lần khi object khởi tạo và 
không thay đổi nó nữa: rabbit kế thừa từ animal, và nó sẽ không thay đổi.

Và các Javascript engine được tối ưu hóa cao cho việc này. 
Thay đổi một prototype "đang hoạt động" với Object.setPrototypeOf 
hoặc obj.__proto__= là một phép tất rất chậm 
bởi vì nó phá vỡ sự tối ưu hóa nội bộ 
cho các hoạt động truy cập đến thuộc tính object. 
Vì thế tránh sử dụng nó nếu bạn không biết nó làm gì, 
hoặc tốc độ Javasript không phải là vấn đề bạn quan tâm.
*/

// String không thể trở thành [[Prototype]] của một object
// [[Prototype]] sẽ chứa giá trị là null, 1 object, 1 class chứ kbh là String

obj = {};
let key = prompt("Nhập vào Key đi");
obj[key] = "giá trị bất kỳ nào đó";
console.log(obj);
// nếu như obj đã có [[Prototype]] trước đó rồi
// thì [[Prototype]] chỉ có thể là object hoặc class chứ không được là chuỗi

// Very plain object: object siêu phẳng
obj = Object.create(null); //tạo được một object siêu phẳng
// không thuộc tính và cũng không [[Prototype]]
key = prompt("Nhập vào Key đi");
obj[key] = "giá trị bất kỳ nào đó";
console.log(obj);






