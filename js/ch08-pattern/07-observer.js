// idol:                        subject
// mảng những người follow:     observers
// đăng ký:                     subcribe
// hủy đăng ký:                 unsubcribe
// phát động:                   fire
// người follow:                observer (func)

class Subject{
    constructor(){
        this.observers = [];
    }
    subcibe(func){
        this.observers.push(func);
    }
    unsubcibe(func){
        this.observers = this.observers.filter((ob) => ob != func);
    }
    fire(data){
        this.observers.forEach((ob) => ob(data));
    }
}
//
let captain = new Subject();
// có 2 thằng lính
function fighter (data){
    console.log("Đã đấm " + data);
}
function eater (data){
    console.log("Đã ăn " + data);
}
captain.subcibe(fighter);
captain.subcibe(eater);
captain.fire("Khoa");



