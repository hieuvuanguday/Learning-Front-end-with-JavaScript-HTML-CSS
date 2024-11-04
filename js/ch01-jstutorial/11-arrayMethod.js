console.log("11-array-Method")
// mảng trong array khoog nhất thiết phải lưu cùng kiểu
let arr = [1, 2, "a", "mèo", {lname: "Khoa", age: 18}, [2, 5]];
console.log(arr);

// 1. Lấy độ dài: .length giống str
// 2. Lấy phần tử: 
console.log(arr[3]);
arr[2] = "Tệ"; // oke
// array là mutable: object chịu ảnh hưởng trực tiếp của method
// 3. isArray( | intanceof Array: hỏi xem 1 biến có phải là array không -> true/false
console.log(arr instanceof Array); //true
// 4. toString(): biến mảng thành chuỗi: kèm dấu ,
var value = arr.toString();
console.log(value); //1,2,Tệ,mèo,[object Object],2,5 - object không còn quay về được

// 5.Join(str) nối các phần tử trong mảng bằng một str nào đó
//      .split(str): băm chuỗi thành mảng bằng một dấu hiệu str nào đó
str = "Nhiều doanh nghiệp lớn than 'khát' lao động chất lượng cao";
str = str.split(" ").join("-");
console.log(str);

// 6. Thêm phần tử - push() thêm item vào cuối mảng | return ra độ dài mới
workerList = ["Huệ", "Trà", " Cúc"];
result = workerList.push("Lan");
console.log(workerList, result);


// 7. Xóa phần tử - pop() xóa item cuối mảng | return item bị xóa
workerList = ["Huệ", "Trà", " Cúc"];
result = workerList.pop();
console.log(workerList, result);

// 8. unshift() thêm item vào đầu mảng | return ra độ dài mới
workerList = ["Huệ", "Trà", " Cúc"];
result = workerList.unshift("Lan");
console.log(workerList, result);

// 9. shift() xóa item vào đầu mảng | return item bị xóa
workerList = ["Huệ", "Trà", " Cúc"];
result = workerList.shift();
console.log(workerList, result);

// 10. delete array[index]: xóa phần tử ở vị trị index trong array
//      để lại lổ thủng, truy cập thì bị undefined
// [1, 2, 3, 4, 5]
// delete array[3] => [1, 2, 3, , 5]
// array[3] => undefined

// 11. splice(index, số lượng cần xóa, ...phần tử muốn thêm)
//      từ vị trí index xóa số lượng phần tử và thêm số lượng phần tử
//      return mảng các item bị xóa
workerList = ["Huệ", "Lan", "Trà"];
// thêm không xóa
result = workerList.splice(1, 0, "Hùng", "Cường");
console.log(workerList, result);
// xóa không thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 1);
console.log(workerList, result);
// vừa xóa vừa thêm
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 1, "Cúc", "Hồng");
console.log(workerList, result);

// 12. slice(start, end): cắt từ start tới end - 1
// 13. concat(): nối mảng (rã ra xong nối lại hết, không bị phân cục)
workerGirl = ["Huệ", "Khoa", "Trà"];
workerBoy = ["Tùng", "Hùng", "Tân"];
workerList = workerGirl.concat(workerBoy, "Hồng", ["Tâm", "Tú"]);
console.log(workerList);
// vẫn là shallow copy
// 14. spread Operator: phân rã mảng thành từng phần nhỏ
// ...[12, 31,32] => 12, 31, 32
workerList = [...workerBoy, ...workerGirl];
console.log(workerList);

// 15. forEach(callBack function): Lặp qua từng phần tử trong mảng
// parameter cf (value, index, array)
arr = [12, 19, "mèo"];
arr.forEach((item, index, array) => {
    console.log(index, item, array);
});

// 16. map(cf): trả ra mảng mới với các phần tử đã thay đổi theo 1 công thức
arr = [3, 5, 7]; 
arr = arr.map(item => item * 3);
console.log(arr); // [9, 15, 21]

// 17. filter(cf): trả về mảng có các phần tử thỏa điều kiện
arr = [3, 5, 7]; 
arr = arr.filter(item => item > 3);
console.log(arr); // [5, 7]

// 18. find(cf): trả về item đầu tiên thỏa điều kiện
arr = [3, 5, 7]; 
arr = arr.find(item => item > 3);
console.log(arr); // 5

// 19. findIndex(cf): trả về vị trí của item đầu tiên thỏa điều kiện
arr = [3, 5, 7]; 
arr = arr.findIndex(item => item > 3);
console.log(arr); // 1

// 20. indexOf(value => từ value tìm vị trí đầu tiên)

// 21. every(cf) giống ALL trong DBI
//      tất cả các phần tử thỏa điều kiện thì true
//      chỉ cần một phần tử không thỏa thì false
arr = [3, 5, 7, 9, 10]; 
arr = arr.every(item => item > 3);
console.log(arr); // false
//vì 3 không lớn hơn 3

// 22. some(cf) giống In trong DBI
//      chỉ cần 1 phần tử thỏa điều kiện thì true
//      tất cả phần tử không thỏa thì false
arr = [3, 5, 7, 9, 10]; 
arr = arr.some(item => item > 3);
console.log(arr); //true

// 23. includes(value): tìm xem value có tồn tại trong mảng không -> true/false
arr = [3, 5, 7, 9, 10]; 
arr = arr.includes(8);
console.log(arr); //false

// 24. reverse() đảo ngược
arr = [3, 5, 7, 9, 10]; 
arr = arr.reverse(8);
console.log(arr); 

// 25. sort() sắp xếp
//  1.string
arr = ["Điệp", "An", "Bảo"];
arr.sort();
console.log(arr);

//  2. số
arr = [1, 3, 100, 20];
arr.sort();
console.log(arr);
// vì JS coi số như string
// cách xử lý: em truyền vào 1 cf giống như một comparator(trọng tài)
// để giúp nó xử lý
arr.sort((a, b) => a - b);
console.log(arr);

// 26. reduce()
//      nếu map là thay đổi từng phần tử theo 1 công thức
//      thì reduce là dồn từng phần tử vào 1 biến theo 1 công thức

arr = [1, 3, 100, 20];
arr = arr.reduce((total, current, currentIndex) => {
    return total + current;
}, 0)//initial Value: giá trị khởi tạo
console.log(arr);//124
// nếu thiếu return là undefined
// ----------------------
console.log("12-Object - method");

// Object
// entry của object được cấu tạo từ key: value
// key luôn luôn là string hoặc number
// value thì có thể là bất cứ kiểu gì, kể cả function
var worker1 = {
    lname: "Điệp đẹp chai",
    age: 25,
    showInfor(){
        console.log(this.lname + " " + this.age);
    },
};
// thêm thuộc tính:
worker1.score = 10;
// thay đổi giá trị
worker1.lname = "Điệp PiedTeam"
// xóa thuộc tính age
delete worker1.age;
worker1.showInfor();
//  1. Object.assign(object bị ghi đè, object tham chiếu)
//      merge Object
//      có rồi thì ghi đè, chưa có thì ghi vô

var person1 = {
    lname: "Điệp",
    age: 24,
    job: ["yangho", "coder", "người yêu mèo"],
};
// 
var person2 = {
    lname: "Lan",
    age: 24,
    company: "PiedTeam",
};
person3 = Object.assign(person1, person2); //person3 xài chung vùng nhớ với person1
console.log(person1);
console.log(person1 == person3); //true
// shallow Copy: copy nông - sao chép nhưng bị dính dây mơ rễ má

// spread operator
person1 = {
    lname: "Điệp",
    age: 24,
    job: ["yangho", "coder", "người yêu mèo"],
};
// 
person2 = {
    lname: "Lan",
    age: 24,
    company: "PiedTeam",
};
person3 = {...person1, ...person2};
console.log(person3);
console.log(person1 == person3); //false
person3.job.push("Đua xe");
console.log(person1);
person3.job = [...person3.job];
person3.job.push("Đua xe trái phép");
console.log(person1);
console.log(person3);
// Deep copy

// Object.keys(object) Lấy mảng các key của object
// Objects.values(object) Lấy ra mảng cá value của object
// Lặp object thì dùng for-in


