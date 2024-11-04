// runtimeError: lỗi khi vận hành| do người dùng
// syntaxError: lỗi sai cấu trúc | do người viết code
// logicError: lỗi sai tư duy    | do người viết code 

// trycatch: dùng để xử lý lỗi phát sinh trong runtimError
// nhớ rằng trycatch không vận hành trong syntaxError

// trycatch chỉ hoạt động đồng bộ mà thôi
// try{
//     setTimeout(()=>{
//         diepPiedTeam;
//         console.log("ahihi");
//     }, 1000);
// }catch(error){
//     console.log("Có lỗi nha mày");
// } 
// =>lỗi

// cách khắc phục: nhét cả trycatch vào detTimeout
// setTimeout(() =>{
//     try{
//         diepPiedTeam;
//         console.log("ahihi");
//     }catch(error){
//         console.log("Có lỗi nha mày");
//     }
// }, 1000);

// khi phát sinh ra lỗi thì JS tạo thành 1 object chứa thông tin về lỗi đó
// có 3 prop:
// name: tên
// massage: thông báo lỗi
// stack: full thông tin
try{
    diepPiedTeam;
}catch(err){
    console.log(err);
    console.log(err.name); //ReferenceError
    console.log(err.massage); //undefined
    console.log(err.stack); //ReferenceError: diepPiedTeam is not defined
                            //at 01-try-catch.js:35:5
}

// ngoài ra có thể chủ động ném lỗi xuống catch
// throw 'lỗi'
// throw newError('lỗi')
// throw new SyntaxError('lỗi')
// throw new ReferenceError('lỗi')

// finally: dù lỗi hay không đều chạy qua finally => vô dụng

// let loading = false;
// try{
//     loading = true;
//     get(); //lỗi
//     loading = false;
// }catch(error){
//     loading = false;
// }

// dân chơi
let loading = false;
try{
    loading = true;
    get(); //lỗi
    loading = false;
}catch(error){
}finally{
    loading = false;
} 

// ngoài throw new Error() chúng ta còn có 7 hàm (contructor function) khác phục vụ cho việc
// tường minh lỗi của mình hơn
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp 
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

// chế ra một kiểu lỗi mới dựa trên Error
class CustomError1 extends Error{
    constructor(massage, student){
        super(massage)
        this.student = student;
        this.name = "CustomError"
    }
}
try{
    console.log("ahihi");
    let a = 1 + 2;
    throw new CustomError1 ("lỗi do tao thích", {name: "Điệp", age: "24"})
}catch(error){
    console.log(error);
    console.log(error.name) //CustomError
    console.log(error.massage) //undefined
    console.log(error.student) //{name: 'Điệp', age: '24'}
}
