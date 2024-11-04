console.log("10-stringMethod");
// Chuỗi trong Js bỏ trong "" or '' đều được
// Mehthod trong String
// 1. Length - return độ dài của chuỗi
let str = "ahihi";
console.log(str.length);

// 2. indexOf() - vị trí đầu tiên cửa từ hoặc chuỗi trong chuỗi
console.log(str.indexOf("ih"));
console.log(str.indexOf("hi"));
console.log(str.indexOf("s"));

// Tách chuỗi
// 1. slice(start, end): return ra chuỗi từ start đến end - 1
var x = "Xin chào PiedTeam, Mình là Điệp";
// Strig là immutable: không có gì có thể tác động vào str
// là những object có những method tạo ra object mới
console.log(x.slice(9, 17));
// cắt theo chiều ngược
console.log(x.slice(-12, -8)); //biểu diễn
// cắt một parameter
console.log(x.slice(9)); 

// 2. subString(start, end): cũng cắt y chang thằng slice - nhưng không cắt ngược được
// 3. substr(start, length): return ra chuỗi cắt từ start với độ dài length
console.log(x.substr(9, 8)); //cùi vãi 

// Các method phổ biến:
// 1. replace("<thay thế>", "<bị thay thế>"): thay thế chuỗi tìm được bằng chuỗi khác
str = "Học viên PiedTeam, nhiều bạn có rất nhiều tiền";
console.log(str.replace("nhiều", "ít")); //Học viên PiedTeam, ít bạn có rất nhiều tiền
// nếu muốn sửa hết
console.log(str.replaceAll("nhiều", "ít")); //Học viên PiedTeam, ít bạn có rất ít tiền
// regex
console.log(str.replace(/nhiều/g, "ít")); //Học viên PiedTeam, ít bạn có rất ít tiền

// 2. chuyển đổi hoa thường toUpperCase - toLowerCase
// 3. concat() - nối chuỗi
let str1 = "Xin chào";
let str2 = "PiedTeam";
let str3 = str1.concat(" ", "mừng bạn đến", " ", str2);
console.log(str3);
// cùi vì mình nối bằng +
str3 = str1 + " mừng bạn đến " + str2;
console.log(str3);
// 4. trim(): xóa khoảng cách 2 đầu
str1 = "   Xin   chào   bạn   ";
str1 = str1.trim();
console.log(str1);
// Xóa hết space thừa = replace_regex + trim
str1 = "   Xin   chào   bạn   ";
str1 = str1.replace(/\s+/g, " ");
str1 = str1.trim();
console.log(str1);
// Xịn hơn nè = split (băm theo dấu hiệu) + filter (lọc theo điều kiện) + join (nối bằng kí tự)
str1 = "   Xin   chào   bạn   ";
str1 = str1.split(" ").filter((item) => item != "").join(" ");
console.log(str1);

// 5. so sánh == | ===
// 6. charAt(index): lấy ra kí tự ở vị trí index trong string
str1 = "Điệp đẹp chai";
console.log(str1.charAt(2));
console.log(str1[2]);
str1[2] = "e"; //không lỗi nhưng cũng không chạy được
// không tác động được string đâu, vì nó là immutable
str1 = "Điệp đẹp trai"; // => "Điệp Đẹp Trai" - btvn







