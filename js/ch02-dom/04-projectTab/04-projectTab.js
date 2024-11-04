let btnList = document.querySelectorAll(".navtab-btn");
let tabContent = document.querySelectorAll(".tab-content-item");
btnList.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // duyệt lại danh sách các button và xóa hết active
        btnList.forEach((_btn) => {
            _btn.classList.remove("actived");
        });
        // thêm actived cho thằng vừa nhấn
        event.target.classList.add("actived");
        // duyệt danh sách các tabContent và xóa actived
        tabContent.forEach((content) => {
            content.classList.remove("actived");
        });
        // thêm actived cho các tabContent có data-id trung với id của btn vừa nhấn
        let id = event.target.id; //lấy ra id nut vừa nhấn
        document.querySelector(`.tab-content-item[data-id='${id}']`).classList.add("actived");
    });
});