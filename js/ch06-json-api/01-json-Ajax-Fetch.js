// // JSON: js object notation
// //       là 1 chuỗi được viết dưới dạng js object
// //       dùng để lưu trữ và trao đổi dữ liệu
// //              lưu: string, number, boolean, array, object, null
// //       dễ dàng sử dụng ở tất cả các ngôn ngữ
// //          có 2 thao tác chính JSON.parse | JSON.stringify

// const obj1 = {
//     name: "Điệp đẹp chai",
//     age: 22,
//     status: "Hay giận dỗi",
//     sayHi: function(){
//         console.log("hello");
//     }
// }

// let myJson = JSON.stringify(obj1)
// console.log(obj1);
// console.log(myJson);
// //'{"name":"Điệp đẹp chai","age":22,"status":"Hay giận dỗi"}'
// //cú pháp json
// //  -với object thì data là cặp name:value
// //  -data được ngăn cách bởi dấu phẩy(,)
// //  -ngoặc nhọn mô tả object
// //  -ngoặc vuông mô tả mảng
// //  -Json dùng dấu nháy "" để phân với dấu nháy '' ở ngoài cùng string
// //  -trường name phải bọc trong nháy kép ""
// //value của json phải là 1 trong những kiểu dữ liệu dưới đây
// //  -string
// //  -number
// //  -object
// //  -array
// //  -boolean
// //  -null
// // không lưu trữ hàm hay method

// // đoán thử đáp án
// let arr = ["Cam", "Chuối", "Ổi"]; //'["Cam", "Chuối", "Ổi"]'
// //number
// let a = 1; // '1'
// //string
// let str = "ahihi" // '"ahihi"'
// //boolean
// let bool = true; // 'true'

// //AJAX: Asynchronous javaScript and XML
// //      không phải ngôn ngữ lập trình (rất nhiều người mới bị lậm)
// //      AJAX chỉ là 1 sự kết hợp của 
//             // XMLHttpRequest object có sẳn trên trình duyệt
//             //          (dùng để gữi và nhận data từ web server)
// //          // Js và HTML DOM (để sử dụng hoặc hiển thị data)

// /*
//         cái tên ajax bị lầm là ứng dụng dùng ajax sẽ sử dụng XML(một kiểu data như json nhưng
//         để gữi và nhận dữ liệu                                   (phức tạp hơn)
//         nhưng trên thực tế chúng ta dùng text và json để trao đổi dữ liệu
// */

// //      AJAX giúp chúng ta đọc dữ liệu từ server trả vể
// //                         gữi dữ liệu lên server ở chế độ ngầm
// //                         cập nhật trang web mà không cần reload lại trang
// //                         là nền tảng phát triển của React, Angular, Vue



// //-----
// //cách AJAX hoạt động
// //xem hình ajax.gif

// //
// //XMLHttpRequest(XHR): là constructor function: 
// //                dùng để giao tiếp với server
// //                XHR là 1 webAPIs nên chỉ có trên môi trường trình duyệt
// //                không xuất hiện ở Node.js

// //tạo 1 XHR object
// const xhr = new XMLHttpRequest();
// // xhr: thằng này có thể trao đổi với server thông qua các method

// //xhr.onreadystatechange sẽ chạy khi readystate thay đổi
// //readystate: là 1 trạng thái khi mà ta kết nối với server thì trạng thái này thay đổi(0,1,2,3,4)
// //0:request chưa khởi tạo
// //1:kết nối với server đã được thiết lập
// //2:request được server tiếp nhận
// //3:đang xử lý request
// //4:request kết thúc và response đã sẵn sáng để dùng

// xhr.onreadystatechange = function (){
//     console.log("readystate đang là: " + this.readyState);
// }

// // lấy data về
// // xhr.open(method, api, StatusOfAsync)
// // method: get, post, put, delete
// // StatusOfAsync: có chạy bất đồng bộ hay không (true/false)
// // xhr.open("GET", "https://6336fb4c65d1e8ef26779064.mockapi.io/users", true);
// // xhr.send();

// // anh muốn thêm 1 users vào server
// xhr.open("POST", "https://6336fb4c65d1e8ef26779064.mockapi.io/users", true)
// // Header
// xhr.setRequestHeader('Content-Type', 'application/json')
// // Body
// const body = {name: "Điệp hóa học", yob: 1999}
// // send
// xhr.send(JSON.stringify(body))
// //---------------
// //dùng XMLHttpRequest để xử lý AJAX được coi là cách cổ xưa nhất và rườm rà nhất
// //ngày nay chúng ta có rất nhiều lựa chọn mạnh mẽ để xử lý AJAX như:
// //  JQUERY: cung cấp hàm gọi Ajax tiện lợi như load,ajax,get,getJSON
// //  FetchAPI: Những trình duyệt ngày nay cũng có: FetchAPI với nhiều tính năng nâng cao
// //              và cú pháp dể sử dụng hơn XHR
// //  Phổ biến nhất là AXIOS: thư viện chuyên dụng cho việc xử lý Ajax cũng như gọi API
// //      cung cấp nhiều tính năng hay,dùng cho cả môi trường trình duyệt và Node.js
// //                                  (nếu trình duyệt nó sẽ dựa trên XHR| node sẽ là HTTP Interface)

// //đối với mình, thì mình k xài jquery :)) nói đúng hơn là nó cùi chết mẹ
// //nên mình sẽ dùng fetchAPI và Axios

// Cách xài FetchAPI
// FetchAPI: cung cấp cho mình khả năng gửi và nhận request thông qua trình duyệt
// xhr: function
// Fetch thì dùng công nghệ promise
// => tiện lợi thao tác xử lý bất đồng bộ
// demo get data từ server bằng fetch
// server khoonng bao giờ mang về reject
// server sau khi tiếp nhận request|xử lý|luôn luôn trả ra một gói hàng 
// response(status|data)
// fetch('https://6336fb4c65d1e8ef26779064.mockapi.io/users').then((response) => {
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error(response.statusText);
//     }
// }).then(value => {
//     console.log("Lấy thành công data", value);
// }).catch(error => {
//     console.log("Lấy data thất bại vì", error);
// });
//biến thành lời hứa lấy dữ liệu từ server
// demo thêm một đối tượng vào users: method: POST - server vẫn trả response là đối tượng vừa gửi
fetch('https://6336fb4c65d1e8ef26779064.mockapi.io/users', {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name: "Điệp Đệ Quy", yob: 2004}),
}).then((response) => {
    if(response.ok){
        return response.json();
    }else{
        throw new Error(response.statusText);
    }
}).then(value => {
    console.log("Thêm thành công data", value);
}).catch(error => {
    console.log("Thêm data thất bại vì", error);
});



