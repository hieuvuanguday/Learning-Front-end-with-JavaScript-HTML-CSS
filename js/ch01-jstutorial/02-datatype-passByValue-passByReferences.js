console.log('Bài 2: Kiểu dữ liệu, truyền tham trị và truyền tham chiếu')
// I.1 primitive datatype: kiểu nguyên thủy
//      number: 1 10 10.5
//      string: 'ahiihii' '10'
//      boolean: true/false
//      null: (rỗng: biết kiểu nhưng không biết giá trị)
//      undefined: (rỗng: không biết kiểu lẫn giá trị)
//      Symbol (ES6) 
// null và undefined khác nhau chỗ nào
console.log(typeof null) //OBJECT nhưng mà không xếp vào object 
                         //xếp là primitive
console.log(typeof undefined) //UNDEFINED
console.log(null == undefined) //true
// '==' là so sánh giá trị
// '===' là so sánh về giá trị và cả về kiểu
console.log(2 == '2') //true
console.log(2 === '2') //false

// undefined trong thuộc tính của object
let tung = {name:'Tùng', height: 170}
console.log(tung.nguoiyeu)

// undefined trong parameter của function
function handle1(a, b) {
    return b
}
let c = handle1(2)
console.log(c) //undefined

// function mà không return thì nó sẽ trả ra undefined
// *NULL: biết kiểu dữ liệu nhưng không biết giá trị
let str = '' //gọi là chuỗi rỗng
str = null //này gọi là rỗng (Object) nhưng lại là primitive

// Null và undefined thì không có thuộc tính
// let object1 = undefined
// object1.name => lỗi, không có gì để đọc hết
// I.2 Object datatype: dữ liệu khác primitive
// Plain Object: object phẳng
let student = {name:'Tùng', point:10} //Chỉ có một lớp/tầng duy nhất
//              thuộc tính/property/ENTRY
//              key: value

// Array: là cách khai báo nhiều biến, cùng tên, cùng thời điểm
//        liền kề san sát nhau
var hoa = ['cúc', 'huệ', 'lan', 10]
// array là object

// regular expression: regex là object
var regex1 = /ab+c/

// function typeOf lafunction nhưng nó thuộc object
console.log(typeof handle1) 
//*function có typeOf là function, nhưng được coi là object
//*null có typeOf là object nhưng kiểu là primitive
//*NaN (not a number) có typeOf là number
console.log(typeof NaN) //number

// Tất cả các cách khai báo biến primitive đều dùng constructor
// wrapper class: class trai bao
var str1 = 'ahihi' //khai báo chuỗi
console.log(str1) //ahihi
var str1 = new String('ahihi') //khai báo chuỗi nhưng bỏ vào hộp
                               //kèm theo 1 số hàm để xử lý
console.log(str1)//String
console.log(str1 === 'ahihi')//false
console.log(str1.valueOf() === 'ahihi')//true => auto-unboxing
//valueOf: lấy cái core trong cái hộp
console.log(str1 == 'ahihi')
//'==' so sánh châm trước
//'===' so sánh khắt khe

//dùng wrapper constructor để ép kiểu
let year = String(1999);
console.log(typeof year) //ép kiểu từ number => string
//
year = Number('1999')
console.log(typeof year) //ép kiểu từ string => number

// bàn riêng về boolean
var isFind = Boolean(0)
console.log(isFind)//Ngoại trừ 0 (-0) khi ép về boolean là false
                   //còn lại đều là true
isFind = Boolean('0') // kí tự 0
console.log(isFind) //true
isFind = Boolean('')//chuỗi rỗng
console.log(isFind)//false
isFind = Boolean(null)//false
console.log(isFind)//vì trên ASCII, null = 0
isFind = Boolean({})//true
console.log(isFind)//vẫn tồn tại object, dù nó rỗng
isFind = Boolean([])//true
console.log(isFind)//vẫn có mảng, dù nó rỗng
isFind = Boolean(10/'D')//NaN
console.log(isFind)//false
isFind = Boolean(false)//false
console.log(isFind)
isFind = Boolean(true)//true
console.log(isFind)
//Falsy: đối với JS, những gì không chứa giá trị thì đều là false
//-> Null, undefined, -+0, '', [], false, NaN

//Truthy: ngược lại với falsy
//-> chuỗi khác rỗng, số khác 0, object đều là true

// 1. Pass by value: truyền tham trị
let a = 1
b = a
b = 2
console.log(a)
console.log(b)
// VD2
let point = 4
function updatePoint(pointCurrent) {
    pointCurrent = 10
}
//dùng hàm
updatePoint(point)
console.log(point)

// 2. Pass by references: truyền tham chiếu/phép chiếu pi
var boyFriend = {name: 'hot girl', size: 'H cub'}
var boyFriend2 = boyFriend
boyFriend2.size = 'E cub'
console.log(boyFriend) //tham khảo lẫn nhau, đều có khả năng tác động thay đổi

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán
2  Comparison            so sánh
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
// 
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
// 

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)
console.log(2 !== '2') //có khác về kiểu và giá trị không
console.log(2 != '2')//có khác về giá trị không

var diep = 'đẹp chai'
var isDepTrai = diep == 'đẹp chai' ? true : false
console.log(isDepTrai)
console.log('b' + 'a' + +'a' + 'a')

//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true && false false
//  true && true  true
//  false&& false false
//  true || false true
//  true || true  true
//  false|| false false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false 
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true 
//                                    thấy 1 là đừng trả ra 1
console.log(0 && 1)//o
console.log(0||0||4)//4
console.log(0)//0
console.log(!0)//true
console.log('')//ra rỗng
console.log(!'')//true

console.log(!'' && 0 && 1)
