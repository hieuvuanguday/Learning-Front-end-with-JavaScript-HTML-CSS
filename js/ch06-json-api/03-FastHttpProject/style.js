//xây dựng 1 ứng dụng getAPI

//trước tiên mình tìm hiểu về RESTful API
// API(Application Programming interface): là tập hợp các quy tắc cơ chế mà theo đó
//      một ứng dụng(thành phần) tương tác với với ứng dụng(thành phần) khác
//      trả về những dữ liệu mình cần dưới dạng phổ biến như json/XML

// REST :một dạng chuyển đổi cấu trúc dữ liệu,một kiểu kiến trúc để viết API 
//      sử dụng phương thức HTTP đơn giản để tạo giao tiếp giữa các máy, thay vì dùng
//      1 url để xử lý 1 số thông tin người dùng thì "REST gữi 1 yêu cầu HTTP như GET/POST/DELETE
//      đến 1 url để xử lý dữ liệu"

// RESTful API: hoạt động dựa trên giao thức HTTP,các hoạt động CRUD sẽ dùng phương thức http riêng
//      -GET    (SELECT):trả về (danh sách)resource 
//      -POST   (CREATE):tạo mới một resource
//      -PUT    (UPDATE):cập nhật thông tin cho resource
//      -DELETE (DELETE):xóa một resource

// các lập trình viên hiện nay đều xây dựng RESTful API theo các method CRUD
//--CREATE      READ        UPDATE      DELETE
// <!-- callback + xhr + constructor function + prototype -->
// chuẩn bị api
const baseURL = "https://6336fb4c65d1e8ef26779064.mockapi.io/users";

// tạo 1 constroctor quản lý xhr
function FastHttp(){
    this.xhr = new XMLHttpRequest();
}
// với promise thì ta có then catch dùng để xử lý bất động bộ
// dùng callback: thì phải setup môi trường

// tạo 1 hàm get(url, callback(error, data))
// hàm get sẽ truy xuất dữ liệu từ url
// đợi đến khi readyState == 4 thì kiểm tra response
// nếu mà response có status == 200|201
//          thì cho callback(null, data)
// nếu response có status khác
//          thì cho callback(thhiss.responseText, null)
// FastHttp.prototype.get = function(url, callback){
//     this.xhr.onreadystatechange = function(){
//         if(this.readyState == 4){ //khi có response mới làm
//             if(this.status == 200 || this.status == 201){
//                 callback(null, JSON.parse(this.responseText));
//             }else{
//                 callback(this.responseText, null);
//             }
//         }
//     };
//     this.xhr.open("GET", url, true);
//     this.xhr.send();
// };

// const http = new FastHttp()
// http.get(baseURL, (error, data)=>{
//     if(error){
//         console.log("Error nè", error);
//     }else{
//         console.log("Data nè", data);
//     }
// });

// xây dựng hàm post: thêm 1 đối tượng
// FastHttp.prototype.post = function(url, body, callback){
//     this.xhr.onreadystatechange = function(){
//         console.log(this.readyState);
//         if(this.readyState == 4){ //khi có response mới làm
//             if(this.status == 200 || this.status == 201){
//                 callback(null, JSON.parse(this.responseText));
//             }else{
//                 callback(this.responseText, null);
//             }
//         }
//     };
//     this.xhr.open("POST", url, true);
//     this.xhr.setRequestHeader("Content-Type", "application/json");
//     this.xhr.send(JSON.stringify(body));
// };

//dùng thử post
// const http = new FastHttp()
// http.post(baseURL, {name: "Điệp nguyên tử khối, yob: 2001"}, (error, data)=>{
//     if(error){
//         console.log("Thêm thất bại vì: ", error);
//     }else{
//         console.log("Đã thêm thành công đối tượng là: ", data);
//     }
// });

// tạo một hàm send đa nhiệm có thể thay thế cả get, post, put, delete
FastHttp.prototype.send = function(method, url, body, callback){
    this.xhr.onreadystatechange = function(){
        console.log(this.readyState);
        if(this.readyState == 4){ //khi có response mới làm
            if(this.status == 200 || this.status == 201){
                callback(null, JSON.parse(this.responseText));
            }else{
                callback(this.responseText, null);
            }
        }
    };
    this.xhr.open(method, url, true);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.send(body ? JSON.stringify(body) : null);
};

// xây dựng get dựa trên send
FastHttp.prototype.get = function(url, callback){
    this.send("GET", url, null, callback);
}

// test get
// const http = new FastHttp()
// http.get(baseURL, (error, data)=>{
//     if(error){
//         console.log("Error nè", error);
//     }else{
//         console.log("Data nè", data);
//     }
// });

// xây dựng post dựa trên send
FastHttp.prototype.post = function(url, body, callback){
    this.send("POST", url, body, callback);
}

// test post

// const http = new FastHttp()
// http.post(baseURL, {name: "Điệp nguyên tử khối 1, yob: 2001"}, (error, data)=>{
//     if(error){
//         console.log("Thêm thất bại vì: ", error);
//     }else{
//         console.log("Đã thêm thành công đối tượng là: ", data);
//     }
// });

// xây dựng put dựa trên send: tìm và cập nhật đối tượng
FastHttp.prototype.put = function(url, body, callback){
    this.send("put", url, body, callback);
}

// test put
// const http = new FastHttp()
// http.put(`${baseURL}/5`, {name: "ahihi"}, (error, data)=>{
//     if(error){
//         console.log("Cập nhật thất bại vì: ", error);
//     }else{
//         console.log("Cập nhật thành công đối tượng là: ", data);
//     }
// });

//xây dựng deleta trên send
FastHttp.prototype.delete = function(url, callback){
    this.send("DELETE", url, null, callback);
}

// test delete
const http = new FastHttp()
http.delete(`${baseURL}/5`, (error, data)=>{
    if(error){
        console.log("Xóa thất bại vì: ", error);
    }else{
        console.log("Xóa thành công đối tượng là: ", data);
    }
});


