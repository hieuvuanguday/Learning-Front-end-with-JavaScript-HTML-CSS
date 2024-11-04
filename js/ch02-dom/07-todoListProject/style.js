document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault(); //chặn sự kiện submit làm reset trang
    let name = document.querySelector("#name").value; //lấy giá trị trong ô input có id là name
    // tạo ra 1 đối tượng có id là thời gian đã tao, name là giá trị trong ô input
    let item = {
        id: new Date().toISOString,
        name: name.trim()
    };  
    // render cái item mới tạo lên màn hình
    addItemToUI(item);
    // lưu lại item mới vào localStorage
    addItemToLS(item);
});

// getList(): viết hàm lấy 'danh sách item' (list) trong localStorage
const getList = () => {
    return JSON.parse(localStorage.getItem("list")) || []
};
// hàm nhận vào 1 item và render nó lên màn hình
const addItemToUI = item => {
    // tạo một cái card
    const newCard = document.createElement("div");
    newCard.className = "card d-flex flex-row justify-content-between align-items-center p-2 mb-3";
    newCard.innerHTML = `
    <span>${item.name}</span>
    <button type="button" class="btn btn-danger btn-sm btn-remove" data-id="${item.id}">Remove</button>
    `
    document.querySelector(".list").appendChild(newCard);
};
// hàm thêm item vào LS
const addItemToLS = item => {
    // lấy cái list từ trên LS xuống
    let list = getList();
    list.push(item);
    localStorage.setItem("list", JSON.stringify(list));
};

// hàm render tất cả các item trong list lên ui mỗi lần vào trang
const init = () => {
    let list = getList();
    list.forEach((item) => {
        addItemToUI(item)
    });
};
init();
// hàm nhận vào id của item và xóa trên LS
const removeItemFromLS = (itemId) => {
    // lấy list từ trên ls xuống
    let list = getList();
    let index = list.findIndex(item => item.id == itemId) // dựa vào itemId tìm ra vị trí 
    list.splice(index, 1) //xóa
    localStorage.setItem("list", JSON.stringify(list)) //cập nhật lại lên LS
};
// Sự kiện xóa 1 item
document.querySelector(".list").addEventListener("click", event => {
    if(event.target.classList.contains("btn-remove")){
        let nameItem = event.target.previousElementSibling.innerHTML;
        let isConfirmed = confirm(`Bạn có chắc là muốn xóa item: ${nameItem}`);
        if(isConfirmed){
            // xóa item trên UI
            let card = event.target.parentElement;
            card.remove();
            //xóa item trên LS
            removeItemFromLS(event.target.dataset.id)            
        }
    }
});
// Sự kiện xóa tất cả
document.querySelector("#btn-remove-all").addEventListener("click", event =>{
    const isConfirmed = confirm(`Bạn có chắc là muốn xóa hết item không?`);
    if(isConfirmed){
        // xóa danh sách trên ui
        document.querySelector(".list").innerHTML = ''
        // xóa danh sách trên LS
        localStorage.removeItem("list")
    }
})

// sự kiện filter
document.querySelector("#filter").addEventListener("keyup", event =>{
    const valueInput = event.target.value
    // lấy list từ ls
    let list = getList();
    let filteredList = list.filter(item => item.name.includes(valueInput))
    // xóa danh sách cũ trên UI
    document.querySelector(".list").innerHTML = ''
    // render dach sách đã lọc
    filteredList.forEach(item =>{
        addItemToUI(item);
    });
})