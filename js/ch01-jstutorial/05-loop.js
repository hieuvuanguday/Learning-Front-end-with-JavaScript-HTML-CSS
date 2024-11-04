console.log("Bài 5: Vòng lặp - loop")
// Phân biệt reuse (dùng lại) | repeat (lặp lại) -> loop
// while | do while | for
var student1 = {name: "Điệp", point: 10, major: "SE"}//plain object - object phẳng
//              thuộc tính | prop | entry
//              entry = key: value
var array1 = [12, 19, 17] //array là một object
// {0:12, 1:19, 2:17} - key(index)

console.log(student1.point)//10
console.log(student1["point"]);
console.log(array1[1]);

// irterable: tính khả duyệt
//for-in: duyệt key của object
for (const x in student1) {
    console.log(x)
}
// name, point, major
for (const x in array1) {
    console.log(x + " " + array1[x])
}
// 0 12
// 1 19
// 2 17

// Tập hợp Set: 1 mảng loại trùng
let setDemo = new Set(["Điệp", "Huệ", "Lan", "Huệ"])
// Set không có key -> không dùng được for-in cho set

// for-of: duyệt value -> chỉ chơi với iterable -> chê plain object
let workerList = ["Điệp", "Huệ", "Lan", "Huệ"]
for (const x of workerList) {
    console.log(x)
}

//for-each: duyệt value kèm với key(index)
["a", "b", "c"].forEach((value, key) => {
    console.log(value + " " + key)    
});

// *for-in: duyệt key, có chơi object phẳng, chê set
// *for-of: duyệt value, có chơi iterable. chê object phẳng
// *for-each: duyệt value kèm key(index)
