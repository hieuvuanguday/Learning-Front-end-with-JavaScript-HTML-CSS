// ch05-asyschronous
// bản thân JS là đơn luồng
// PHP hay Java là ngôn ngữ đa luồng

// vd: có 2 lệnh L1(3p) L2(1p)
// theo mình nghĩ thì L1 chạy xong mới tới L2 - đồng bộ - 4p

// nếu như anh bất đồng bộ thì sao? L1 chạy, không đợi xong thì L2 cũng chạy (3p)

// CALL Stack (xếp chồng): là một cấu trúc dữ liệu dạng ngăn xếp (stack) dùng để lưu trữ
// trong quá trình code thực thi
// Call Stack là LIFO: Vào sau ra trước

// vd
function a(x){
    console.log(x);
}
function b(y){
    a(y + 2);
}
function c(z){
    b(z + 1);
}

// c(5) = ? 

// Event Loop và CallBack Queue (Kiu)
//trong môi trường chạy js (js runtime) còn 1 thứ quan trong khác không kém callstack

//Tống thể Js có gì
//về vùng nhớ : memory heap                 callstack

//Event Loop: liên tục lập đi lập lại chờ 1 sự kiện "click, load, submit"
//              Event Loop                   sự kiện này là CallBack Queue

//WebApis: DOM | AJAX(XMLhttpRequest)| timeOut(setTimeout)

function handle(){
    console.log("command1");
    setTimeout(function ahihi(){
        console.log("command2");
    }, 3000)

    console.log("command3");
}
handle();

// ASYNC CALLBACK: -bất đồng bộ callback:
// callback là hàm có parameter là 1 function
// xử lý bất đồng bộ bằng callback

// ưu điểm: dể hiểu
// nhược điểm: rất khó xử lý lỗi, code bị lồng vào nhau(=> callback hell)

// lắng nghe sự kiện click, click thì mới chạy callback function

// bất đồng bộ có quan trọng không => có

// vd2: đọc file
// dòng code 1: đọc file, biến file thành mảng student
// dòng code 2: in ra danh sách các student trong mảng student

// Callback gây khó khắn trong việc xử lý lỗi

try{
    setTimeout(function ahihi1(){
        throw new Error("Lỗi nè");
    })
}catch(error){
    console.log(error);
}

// thế là ngta không thích dùng callback nữa mà ngta dùng promise ES6 dùng để thay thế cho cách viết của callback

// callback không giúp xử lý bất đồng bộ
// promise dùng để thay thế callback => 
// promise này nè nó có 1 thằng anh tên asyn await sẽ xử lý bất đồng bộ đc






