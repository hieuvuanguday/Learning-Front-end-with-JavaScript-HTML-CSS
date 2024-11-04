// 03-Async-Await  -  ES7

// Ngày xưa ngta dùng callback để xử lý bất đồng bộ, dễ callback-hell
// ES6: ngta dùng Promise
// ES7: Async-Await dùng để kết hợp Promise
// tạo ra cú pháp dễ hiểu hơn
// -------
// Async function: là 1 hàm luôn luôn return 1 promise
//      Nó là cách viết tắt của 1 hàm return 1 promise

function handle(){
    return Promise.resolve("ahihi");
}

async function handle1(){
    return "ahihi"
}
// cách xài 2 thằng giống nhau
handle().then(value =>{
    console.log("Handle có resolve là: " + value);
})

handle1().then(value =>{
    console.log("Handle có resolve là: " + value);
})

// Await: nó chỉ hoạt động trong môi trường của async mà thôi
// giúp code phải đồng bộ

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

// Dùng then-catch kiểu cũ
// getProfile().then(value => {
//     console.log(value);
//     return getArticle()
// }).then(value => {
//     console.log(value);
// })

// dùng async function + await: 5s
// let getData = async function (){
//     let profile = await getProfile();
//     let article = await getArticle();
//     console.log(profile, article);
// }


// dùng async function + await: nhưng mà mất 3s thôi
let getData = async function (){
    let [profile, article] = await Promise.all([getProfile(), getArticle()]);
    console.log(profile, article);
}
getData();

// VD2: xử lý lỗi
getStudents = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Lỗi chà bá"))
    }, 3000)
})

// dùng Promise để sử dụng, bắt lỗi bằng .catch

getStudents().then(value => {})
             .catch(error => {
                console.log("getStudents đã bị lỗi là: " + error);
             })

// dùng aysnc await thì dùng try catch
let handle3 = async () => {
    try{
        let students = await getStudents()
    }catch(error){
        console.log("getStudents đã bị lỗi là: " + error);
    }
}
handle3();

// Đừng bao giờ dùng async await với toán tử đồng bộ
// vd: 
let x = 0;
let handle4 = async ()=>{
    x += 1;
    console.log(x);
    return 5; //promise.resolve(5)
}

let handle5 = async () =>{
    let tmp = await handle4();
    x += tmp;
    console.log(x);
}
handle5();




