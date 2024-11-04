// Tạo một mảng chứa giá trị dạng table
const VALUES = [
    {id : "scissors", value: "✌️"},
    {id : "rock", value: "✊"},
    {id : "paper", value: "🖐"}
];
// thắng khi:
//  1 - 0 = 1
//  2 - 1 = 1
//  0 - 2 = -2
// => indexPlayer - indexComputer = 1 || - 2 -> 1
// => indexPlayer - indexComputer = 0        -> 0
// => else                                   -> -1
let i = 0;
const handleChange = () =>{
    let computer = document.querySelector("#computer");
    computer.textContent = VALUES[i].value
    computer.dataset.id = VALUES[i].id //cài thêm data-id cho computer
    if(i === VALUES.length - 1){    
        i = 0;
    }else{
        i++;
    }
}
// setInterval(cf, milisecond): gọi cf mỗi miisecond
let interval = setInterval(handleChange, 100);
// lưu interval dành cho trường hợp cần nó ngưng lại

// valuePlayer: rock    |   valueComputer: scissors
// =>    index: 1       |       =>  index: 0

// Viết 1 hàm so sánh 2 giá trị valuePlayer và value Computer
//  sau đó return 1 0 -1

const compare = (valuePlayer, valueComputer) => {
    const indexPlayer = VALUES.findIndex((item) => item.id == valuePlayer);
    const indexComputer = VALUES.findIndex((item) => item.id == valueComputer);
    check = indexPlayer - indexComputer;
    if(check == 1 || check == -2){
        return 1;
    }else if(check == 0){
        return 0;
    }else{
        return -1;  
    };
};
// làm sự kiện click của người chơi
const playerItem = document.querySelectorAll(".user")
playerItem.forEach((item) => {
    item.addEventListener("click", event => {
        // khi một nút bị click thì máy sẽ ngừng chạy random
        clearInterval(interval);
        let valuePlayer = event.target.id;
        let valueComputer = computer.dataset.id;
        let result = compare(valuePlayer, valueComputer);
        // alert(result); //để xem trước
        // xóa actived trên các nót user và đặt actived lên nút vừa nhấn
        playerItem.forEach((_item) => {
            _item.classList.remove("actived");
            _item.style.pointerEvents = "none";
        });
        event.target.classList.add("actived"); //đặt actived lên nút vừa nhấn
        
        // làm thông báo (làm 1 div để thông báo kết quả)
        const alertDiv = document.createElement("div");
        alertDiv.classList.add("alert");
        let msg = '';
        if(result == 1){
            msg = "Bạn thắng";
            alertDiv.classList.add("alert-success");
        }else if(result == 0){
            msg = "Bạn hòa";
            alertDiv.classList.add("alert-warning");
        }else{
            msg = "Bạn thua";
            alertDiv.classList.add("alert-dark");
        };
        alertDiv.textContent = msg;
        document.querySelector(".notification").appendChild(alertDiv);
        document.querySelector("#play-again").classList.remove("d-none");
    });
});

document.querySelector(".btn-play-again").addEventListener("click", event => {
    interval = setInterval(handleChange, 100);
    playerItem.forEach((_item) => {
        _item.classList.remove("actived");
        _item.style.pointerEvents = "";
    });
    document.querySelector(".notification").innerHTML="";
    document.querySelector("#play-again").classList.add("d-none");
});
// Thời gian hoàn thành: 2h
