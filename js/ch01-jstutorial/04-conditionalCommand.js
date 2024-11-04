console.log("04-onditionalCommand")
// Bài 4: mệnh đề có điều kiện
// if(điều kiện){
//  do something
//}
if(true){
    console.log("do something")
}

// Cấu trúc 1: if else
let a = 8
if(a < 7){
    console.log(1)
}else{
    console.log(2)
}
//2
let b = 8
if(b < 7){
    console.log(1)
}else if(b > 7){
    console.log(2)
}else if(b == 8){
    console.log(3)
}
//2

// Cấu trúc 2: Switch-Case
var choose = 2
switch (choose){
    case 1: {
        console.log("Hello 1")
        break
    }
    case 2: {
        console.log("Hello 2")
        break
    }
    case 3: {
        console.log('Hello 3')
        break
    }
    default: {
        console.log("Order choose")
        break
    }
}
//*Thiếu break thì thường bị trôi lệnh xuống case dưới
//*Case default cũng cần có break
//Vì default và case thành phần có thể đổi chỗ cho nhau

//Nâng cao: Toán tử 3 ngôi
let c; //undefined
let res;
// if (!res){
//     console.log("Nothing to print");
// }else {
//     console.log("Having value");
// }
res ? console.log("Having") : console.log("Nothing")
//
!res && console.log("Nothing to print")