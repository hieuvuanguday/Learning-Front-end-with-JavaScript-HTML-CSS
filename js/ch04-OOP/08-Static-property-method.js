class User{
    name = "Điệp";
    static name2 = "Điệp2";
    //
    show(){
        console.log("ahihi");
    }
    static show2(){
        console.log(ahihi2);
    }
}

class VIP extends User{};
// static: tĩnh (đứng yên một chỗ không di chuyển)
// ám chỉ những method hay prop thuộc về class
// nên các object không thể sở hữu, nhân bản mà phải xài chung

let diep = new User();
console.log(diep.name); //Điệp

console.log(diep.name2); //undefined
console.log(User.name2); //Điệp2
// class truy cập vào static được (các lập trình viên ưu tiên truy cập cách này)
// object thì không được (nhưng trong Java thì được)

class Article{
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(articleA, articleB){
        return articleA.date - articleB.date;
    }
}
//tạo mảng chứa các bài báo
let articleList = [
    new Article("Anna lấy xe của quý nhân bỏ chại", new Date(2022, 8, 21)),
    new Article("Bí quyết chạy Grab chỉ với 1 tỷ", new Date(2022, 0, 11)),
    new Article("60 người Việt trốn về từ nhà tuyển dụng Cam", new Date(2022, 12, 12)),
]
// muốn sắp xếp danh sách các bài báo theo ngày tăng dần
// c1: dùng comparator: đưa người trọng tài bài báo a và b, sau đó sẽ sắp xếp
// c2: comparable: tính đố kỵ, mỗi một bài báo sẽ tự đố kỵ lẫn nhau
//          phân định ai lớn hơn, rồi sắp xếp
articleList.sort(Article.compare);
console.log(articleList);






