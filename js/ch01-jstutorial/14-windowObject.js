console.log("Bài 14-Window Object");
// windowObject(wo): là đại diện cho cửa sổ trình duyệt 
// tất cả các global object, tất cả các function, biến mà tạo bằng var
// đều được xem là method|props của window object
// (let và const thì không phải)

// ngay cả DOM (Document Object Model) cũng là thuộc tính của windowObject

// I-Prop và method
// 1.1 window.innerHeight: return ra chiều cao của trang web
console.log(window.innerHeight);

// 1.2 window.innerWidth: return ra chiều rộng của trang web
console.log(window.innerWidth);

// 1.3 window.open(url, target, fieldter)

// setTimeout(() => {
//     window.open("https://www.facebook.com/", "blank", "width = 500", "height = 500");
// }, 3000);

// 1.4 window.close(): tab sẽ bị đóng
// window.close();

// 1.5 window.resizeTo(w,h)

// let mytab = window.open("https://www.facebook.com/", 
//                         "blank", "width = 500", 
//                         "height = 500");
// mytab.resizeTo(7, 10);

// II-Window Location
// 2.1 
console.log(location);
console.log(location.href); //url hiện tại
console.log(location.hostname) //domain hiện tại
console.log(location.pathname); //
console.log(location.protocol); //http
//href = protocol + hostname | pathname
// assign(url): chuyển hướng về trang mới
// window.assign("https://gearvn.com/");
// location.href = "https://gearvn.com/";

// navigator: thuộc tính của người dùng trình duyệt
// console.log(navigator);
// history: Lịch sử trình duyệt đối với webtab đó thôi
// history.back: lùi 1 trang
// history.forward: tiến lên 1 trang

// trình duyệt cung cấp 3 loại popup
// alert
// alert("ahihi đồ chó");
// confirm: trả ra true|false
// let result = confirm("Bạn có phải là sinh viên FPT không?");
// if(result) {
//     console.log("Đáy xã hội rồi");
// }else{
//     console.log("Đừng có học FPT :]]");
// }

// prompt
result = prompt("Nhập tên của bạn đi", "Đỗ Thế Hiếu");
console.log(result);





