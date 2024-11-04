// // 02-promise.js

// // promise: lời hứa rằng trong tương lai anh sẽ làm gì đó hoặc không làm
// // ES6
// // một promise sẽ có 3 trạng thái
// // pending: đang chờ kết quả
// // fulfilled: đã có kết quả tốt (giữ lời hứa)
// // reject: lỗi trong pending(thất hứa)

// // cú pháp tạo promise
// new Promise (function(resolve, reject){

// })
// //viết tắt
// new Promise ((resolve, reject) =>{

// })

// //  1 promise sẽ nhận vào 1 function có param là resolve và reject
// const p1 = new Promise((resolve, reject)=>{
//     resolve(1)
//     reject(new Error("xin lỗi"))
// })

// // vd: anh ny hứa rằng cuối tuần mang tiền về 5000
// let wallet  = prompt("Nhập giá trị trong ví đi")
// const p2 = new Promise((resolve, reject)=>{
//     if(wallet >= 5000){
//         resolve("Anh không phải là Jack")
//     }   
//     reject("Anh là Jack thật sự") 
// })
// // kiểm tra kết quả lời hứa
// // c1
// p2.then(value => {
//     console.log(value);
// }).catch(error=>{
//     console.log(error);
// })
// // c2
// p2.then(value=>{
//     console.log(value);
// }, error => {
//     console.log(error);
// })

// // Ta thử chuyển 1 async callback thành promise
// // callback
// // setTimeout(()=> {
// //     console.log(hello);
// // }, 1000)

// // chuyển thành promise
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hello");
//     }, 1000)
// })

// p3.then(value =>{
//     console.log(value);
// })

// // giai đoạn từ 0-1s ngta gọi là pending
// // giai đoạn mà resolve chạy ngta gọi là fulfilled

// // lưu ý: Promise are eager not lazy: Promise sẽ chạy code bên trong ngay
// // khi khai báo, không cần đến luc catch

// let a = 1;
// // cách cùi
// let p4 = new Promise((resolve, reject) => {
//     a++;
// })

// console.log(a); //2

// // khác phục bằng cách bỏ vào hàm c1
// let b = 1;
// function handle1(){
//     p5 = new Promise((resolve, reject) => {
//         b++;
//     })
//     return p3;
// }
// handle1();
// console.log(b); //1
// // cách dùng hàm bọc c2
// let c = 1;
// p6 = ()=> {
//     new Promise((resolve, reject) => {
//     c++;
//     })
// }
// p6().then
// console.log(c);

// //-------
// // 1 promise thì sẽ chỉ có thể rơi vào 1 trong 3 trạng thái
// // (pending | fulfill | reject)
// //            resolve   reject
// // res => then và rej => catch, thì khá giống return: ném giá trị ra
// // resolve và reject không làm cho code bị dừng lại
// p4 = new Promise((resolve, reject) => {
//     resolve("ahihi"); // dòng này và p4 thành fulfilled
//     reject("Lỗi rồi"); // vì đã fulfilled nên không chạy dòng này
//     console.log("Xin chào mọi người"); // vẫn chạy dòng này
// })

// p4.then(value => {
//     console.log("Giá trị của resolve là:" + value);
// }).catch(error => {
//     console.log("Giá trị của reject là:" + error);
// })

// // 1. nếu ta return trong then|catch 
// // thì ta sẽ vô tình đưa lời hứa thành on fulfilled


// p4 = new Promise((resolve, reject) => {
//     reject("Lỗi chà bá");
// })

// p4.then(value => {})
//   .catch(error => {
//     console.log("p4 thất hứa trả reject là: " + error);
//     return "Lê Hồ Điệp"
//     // return Promise.resolve("Lê Hồ Điệp")
//   }).then(value => {
//     console.log("Lời hứa trước lấy từ return có resolve là: " + value);
//   })

// // 2. Nếu ta throw trong then|catch thì ta sẽ vô tình đưa lời hứa về on reject

// p4 = new Promise((resolve, reject) => {
//     reject("Lỗi chà bá");
// })

// p4.then(value => {})
//   .catch(error => {
//     console.log("p4 thất hứa trả reject là: " + error);
//     throw "Lê Hồ Điệp"
//     // return Promise.reject("Lê Hồ Điệp")
//   }).catch(error => {
//     console.log("Lời hứa trước lấy từ throw có reject là: " + error);
//   })

// dùng Promise để xử lý bất đồng bộ
// 2 việc cần làm
// lấy data Profile từ server (3)
let data
// lấy data Article từ server (2)
// const getProfile  = () => {
//     setTimeout(() => {
//         return {name: "Điệp đẹp chai", age: 22}
//     }, 3000)
// }
// data = getProfile();
// console.log(data); //=> không lấy được data

// dùng promise cách 1:
// let getProfile  = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({name: "Điệp đẹp chai", age: 22})
//     }, 3000)
// })

// getProfile().then(value => {
//     data = value;
//     console.log(data);
// })

// dùng promise cách 2:
getProfile  = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Điệp đẹp chai", age: 22})
    }, 3000)
})

getArticle = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Sách văn học", "Tiểu thuyết"])
    }, 2000)
})
// nếu code như này mất 3s vì bất đồng bộ

// getProfile().then(value => {
//     console.log(value);
// })

// getArticle().then(value => {
//     console.log(value);
// })

// nếu code chạy tuần tự: 5s
getProfile().then(value => {
    console.log(value);
    getArticle().then(value => {
        console.log(value);
    })
})
// không viết như này tại nó tạo ra Promise Hell


getProfile().then(value => {
    console.log(value);
    return getArticle()
}).then(value => {
    console.log(value);
})



