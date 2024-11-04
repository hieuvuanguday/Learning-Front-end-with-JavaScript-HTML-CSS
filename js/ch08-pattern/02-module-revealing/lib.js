// lib
// function map(){
//     const toaDo = [115, 13]; //private
//     //
//     function layToaDo() { //private
//         return toaDo;
//     }
//     // 
//     return {
//         inToaDo: function () { // public
//             console.log("Tọa độ nè: " + layToaDo());
//         },
//     };
// }
// nhược điểm: giới hạn đặt tên của người dùng

// Module: FE + IIFE
// const map = (function () {
//     const toaDo = [115, 13]; //private
//     //
//     function layToaDo() { //private
//         return toaDo;
//     }
//     // 
//     return {
//         inToaDo: function () { // public
//             console.log("Tọa độ nè: " + layToaDo());
//         },
//     };
// })();

// revealing: giúp cho return trông gọn hơn
const map = (function () {
    const toaDo = [115, 13]; //private
    //
    function layToaDo() { //private
        return toaDo;
    }
    function inToaDo() { // private
        console.log("Tọa độ nè: " + layToaDo());
    }
    //public + revealing
    return {
        inToaDo, //callback: chỉ đưa tên, khi nào cần mới gọi
    };
})();
