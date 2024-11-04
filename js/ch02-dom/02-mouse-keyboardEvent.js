let btnAdd = document.querySelector("#btn-add"); 
//nếu là class thì . trước, id thì # trước
btnAdd.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.clientX, event.clientY);
    // clientX, clientY: là tọa độ có hệ quy chiếu là mand hình của trang web
    console.log(event.offsetX, event.offsetY);
    // offsetX, offsetY: là tọa độ có hệ quy chiếu là element
    console.log(event.target);
    // target: ám chỉ element phát sinh sự kiện
    let inputName = document.querySelector("#name").value;
    let newCard = document.createElement("li");
    newCard.classList.add("card", "mb-3", "p-2");
    newCard.innerHTML = `<p>${inputName}</p>`; 
    //dấu huyền này giúp lấy giá trị trong thẻ 
    document.querySelector("#list").appendChild(newCard);
});
// mouse event:
// dblclick: bấm 2 lần mới thực thi 
// mouseover: đưa chuột vào là thực thi
// mouseout: đưa chuột ra mới thực thi

// keyBoard event:
// keydown: nhận tất cả các phím khi nhấn 1 phím bất kì
    //bị trễ 1 nhịp, không ngon
// keypress: nhận tất cả các phím khi nhấn 1 phím bất kì
    // trừ alt, esc, shift, ctrl -> cũng cùi
// keyup: nhận tất cả các phím khi nhả 1 phím bất kì
    // trừ alt, esc, shift, ctrl -> ngon nghẻ
// input: thực thi khi có thay đổi
    // giống keyup, gồm số, kí tự, kí tự đặc biệt
// change: thực thi khi bỏ focus và có thay đổi
let inputNode = document.querySelector("#name");
inputNode.addEventListener("change", (event) => {
    console.log(inputNode.value); 
});








