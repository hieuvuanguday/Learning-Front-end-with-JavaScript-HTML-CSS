// singleTon pattern: 
//      một object chỉ được khởi tạo một lần duy nhất trong suốt quá trình chạy
//      dù bạn có yêu cầu khởi tạo bao nhiêu lần thì nó vẫn chỉ đưa obj cũ mà không tạo mới

// tránh lãng phí bộ nhớ, giải thiếu khởi tạo obj trùng giá trị
// chiếm ít ram

// -----
// vd:
const car = {
    name: "audi",
    price: 9000,
};
const xeHop = car;
xeHop.name = "BWM";
console.log(car);

// vd: module

// const user = (function(){
//     // private
//     function init (){
//         return{
//             name: "Điệp",
//             yob: 1999,
//         };
//     }
//     // public
//     return{
//         getIntance(){
//             return init();
//         },
//     };
// })();
// let user1 = user.getIntance();
// let user2 = user.getIntance();
// console.log(user1 == user2); -> false


const user = (function(){
    // private
    let intance;
    function init (){
        return{
            name: "Điệp",
            yob: 1999,
        };
    }
    // public
    return{
        getIntance(){
            if(!intance){
                intance = init();
            }
            return intance;
        },
    };
})();

let user1 = user.getIntance();
let user2 = user.getIntance();
console.log(user1 == user2); // ->true









