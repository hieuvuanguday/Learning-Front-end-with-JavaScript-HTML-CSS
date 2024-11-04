// Liên kết (DOM) | móc một biến vào một đối tướng trong DOM
// nếu muốn lấy một đối tướng:
// document.getElementById("..."); //chỉ được điền tên của ID thôi: live
// document.querySelector("..."); //cách select của nó giống CSS: non-live
let input = document.getElementById("name");
input = document.querySelector("#name");
console.log(input);

// Nếu muốn lấy một danh sách các đối tượng thỏa
// document.querySelectorAll("....");
let cardList = document.querySelectorAll(".card"); //NodeList
// cardList = document.getElementsByClassName("card"); //HTML Collection
console.log(cardList);
// HTML Collection: giống array nhưng không có các method hỗ trợ nhiều
// cụ thể: forEach
// cách xử lý: em phải phân rã HTML Collection rồi bỏ vào mảng

// NodeList: giống array, có các method của array
// cardList = [document.getElementsByClassName("card")];
cardList.forEach((item) => {
    console.log(item);
});

//
console.log("Demo Method");
let a = document.querySelector(".card");
console.log(a);
console.log(a.children); //h2 và p nhưng dưới dạng HTML Collection
console.log(a.childNodes); //NodeList(5) [text, h2, text, p, text]
console.log(a.parentElement); //element cha chứa nó
console.log(a.nextElementSibling); //tìm ra thằng giống nó nhưng ở dưới
console.log(a.firstChild); //phần tử con đầu tiên: text
console.log(a.lastChild); //phần tử con cuối cùng: text

// tạo mới một element
let newCard = document.createElement("div");
// newCard.className = "card p-2 mb-3"; cách 1: thay thế hoàn toàn class cũ bằng class mới
newCard.classList.add("card", "p-2", "mb-3"); //cách 2: chỉ thêm class mới
newCard.innerHTML = "<h1>Tôi là phần tử được tạo bằng DOM</h1><p>Xin chào mọi người</p>";
let cardGroup = document.querySelector(".card-group");
// cardGroup.appendChild(newCard); //nhét newCard vào cuối của cardGroup
cardGroup.replaceChild(newCard, cardGroup.children[1]);



