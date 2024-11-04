// cookie (phải có mạng mới xài được)
// cho phép lưu trữ thông tin người dùng web vào máy tính
const date = new Date(2022,7,28).toString();
document.cookie = `username = florentino; expires = ${date}; path=/`;
console.log(document.cookie);
// cookie có hạn sử dụng
// không thể truyền cookie từ web này sang web khác được

// thường thì người ta không thao tác như này
// mà người ta sẽ sử dụng qua thư viện js.cookie

// localStorage: Lưu trữ có hiệu lực vĩnh viễn, lưu trực tiếp trên web
localStorage.setItem("name", "HiếuK17F3");
let lname = localStorage.getItem("name");
console.log(lname);

// localStorage mà lưu đối tượng | array
const profile = {
    name: "Đỗ Thế Hiếu",
    age: 24,
};
console.log(profile);
// localStorage chỉ lưu string hoặc json
const str = JSON.stringify(profile); //biến object thành string json
console.log(str);
// Lưu vào localStorage
localStorage.setItem("profile", str);

// muốn lấy về dùng
let str1 = localStorage.getItem("profile");
console.log(str1); //lấy object từ localStorage về thì chỉ nhận được json
// phải ép về object
let object1 = JSON.parse(str1);
console.log(object1);

