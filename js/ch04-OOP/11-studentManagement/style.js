// constructor function và kế thừa bằng prototype
// cần quản lý sinh viên
// function Student(name, birthday){
//     this.name = name;
//     this.birthday = birthday;
//     this.id = new Date().toISOString();
// }
// Hiển thị nó lên trên table
// Lưu trữ vào trong server
// -------------------------------Store----------------------------
// function Store(){}
// // getStudents: lấy ra danh sách sinh viên(students) từ LocalStorage
// Store.prototype.getStudents = function(){
//     return JSON.parse(localStorage.getItem("students")) || []
// }
// // add new student ìto server (LocalStorage)
// Store.prototype.add = function(student){
//     // const students = new Store().getStudents()
//     const students = this.getStudents() //lấy được ds students từ LocalStorage
//     // nhét student vào students
//     students.push(student)
//     // cập nhật students lên lại localStorage
//     localStorage.setItem("students", JSON.stringify(students));
// }

// Store.prototype.getStudent = function(id){
//     let students = this.getStudents() //lấy danh sách 
//     //dựa trên id tìm trong danh sách student nào có id trùng với id thì lấy
//     return students.find(student => student.id === id);
// }

// Store.prototype.remove = function(id){
//     let students = this.getStudents()// lấy danh sách
//     //từ danh sách và id tìm vị trí của đối tượng cần xóa 
//     let indexRemove = students.findIndex(student => student.id === id)
//     students.splice(indexRemove, 1) //từ vị trí cần xóa, xóa 1
//     localStorage.setItem("students", JSON.stringify(students)) //cập nhật lên LS
// }

// ------------------------------RenderUI--------------------------
// function RenderUI(){}
// // add new student into UI 
// RenderUI.prototype.add = function(student){
//     const students = new Store().getStudents();
//     const newTr = document.createElement("tr");
//     newTr.innerHTML = `
//         <td>${students.length}</td>
//         <td>${student.name}</td>
//         <td>${student.birthday}</td>
//         <td>
//             <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">
//                 Xóa
//             </button>
//         </td>
//     `
//     document.querySelector("tbody").appendChild(newTr);
//     // sau khi thêm vào thì xóa các giá trị cũ trong input
//     document.querySelector("#name").value = "";
//     document.querySelector("#birthday").value = "";
// };
// // alert: nhận vào msg (thông điệp), và type (màu của thông báo)
// // tạo div hiển thji ra màn hình
// RenderUI.prototype.alert = function(msg, type="success"){
//     // tạo div thông báo
//     const divAlert = document.createElement("div");
//     // thêm class cho nó
//     divAlert.className= `alert alert-${type}`;
//     divAlert.innerHTML = msg;
//     document.querySelector("#notification").appendChild(divAlert);
//     // sau 2s sẽ xóa đi
//     setTimeout(() => {
//         divAlert.remove();
//     }, 2000)
// };
// // renderAll: dùng để render tất cả student trong students lên giao diện
// RenderUI.prototype.renderAll = function(){
//     const students = new Store().getStudents(); //
//     //sử dụng reduce để biên đổi từng student trong students thành chuỗi 
//     // và cộng dồn các chuỗi đó
//     const htmlContent = students.reduce((total, studentCurrent, indexStudentCurrent) => {
//         return total = total + `
//             <tr>
//                 <td>${indexStudentCurrent + 1}</td>
//                 <td>${studentCurrent.name}</td>
//                 <td>${studentCurrent.birthday}</td>
//                 <td>
//                     <button class="btn btn-danger btn-sm btn-remove" data-id="${studentCurrent.id}">
//                         Xóa
//                     </button>
//                 </td>
//             </tr>
//         `
//     }, "");
//     document.querySelector("tbody").innerHTML = htmlContent
// };
// -----------------Cách làm: Class--------------------------------
// class Student
class Student{
    constructor(name, birthday){
        this.name = name;
        this.birthday = birthday;
        this.id = new Date().toISOString();
    }
}
// class Store
class Store{
    constructor(){}
    // getStudents: lấy ra danh sách sinh viên(students) từ LocalStorage
    getStudents(){
        return JSON.parse(localStorage.getItem("students")) || []
    }
    // add new student ìto server (LocalStorage)
    add(student){
        // const students = new Store().getStudents()
        const students = this.getStudents() //lấy được ds students từ LocalStorage
        // nhét student vào students
        students.push(student)
        // cập nhật students lên lại localStorage
        localStorage.setItem("students", JSON.stringify(students));
    }
    
    getStudent(id){
        let students = this.getStudents() //lấy danh sách 
        //dựa trên id tìm trong danh sách student nào có id trùng với id thì lấy
        return students.find(student => student.id === id);
    }
    
    remove(id){
        let students = this.getStudents()// lấy danh sách
        //từ danh sách và id tìm vị trí của đối tượng cần xóa 
        let indexRemove = students.findIndex(student => student.id === id)
        students.splice(indexRemove, 1) //từ vị trí cần xóa, xóa 1
        localStorage.setItem("students", JSON.stringify(students)) //cập nhật lên LS
    }
}

// class RenderUI
class RenderUI{
    constructor(){}
    // add new student into UI 
    add(student){
        const students = new Store().getStudents();
        const newTr = document.createElement("tr");
        newTr.innerHTML = `
            <td>${students.length}</td>
            <td>${student.name}</td>
            <td>${student.birthday}</td>
            <td>
                <button class="btn btn-danger btn-sm btn-remove" data-id="${student.id}">
                    Xóa
                </button>
            </td>
        `
        document.querySelector("tbody").appendChild(newTr);
        // sau khi thêm vào thì xóa các giá trị cũ trong input
        document.querySelector("#name").value = "";
        document.querySelector("#birthday").value = "";
    };
    // alert: nhận vào msg (thông điệp), và type (màu của thông báo)
    // tạo div hiển thji ra màn hình
    alert(msg, type="success"){
        // tạo div thông báo
        const divAlert = document.createElement("div");
        // thêm class cho nó
        divAlert.className= `alert alert-${type}`;
        divAlert.innerHTML = msg;
        document.querySelector("#notification").appendChild(divAlert);
        // sau 2s sẽ xóa đi
        setTimeout(() => {
            divAlert.remove();
        }, 2000)
    };
    // renderAll: dùng để render tất cả student trong students lên giao diện
    renderAll(){
        const students = new Store().getStudents(); //
        //sử dụng reduce để biên đổi từng student trong students thành chuỗi 
        // và cộng dồn các chuỗi đó
        const htmlContent = students.reduce((total, studentCurrent, indexStudentCurrent) => {
            return total = total + `
                <tr>
                    <td>${indexStudentCurrent + 1}</td>
                    <td>${studentCurrent.name}</td>
                    <td>${studentCurrent.birthday}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-remove" data-id="${studentCurrent.id}">
                            Xóa
                        </button>
                    </td>
                </tr>
            `
        }, "");
        document.querySelector("tbody").innerHTML = htmlContent
    };
}



// -------------------------------Event----------------------------
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault(); //chặn reset trang
    // lấy giá trị từ input
    const store = new Store();
    const ui = new RenderUI();
    const name = document.querySelector("#name").value;
    const birthday = document.querySelector("#birthday").value;
    // từ giá tị đã lấy tạo ra student
    const newStudent = new Student(name, birthday);
    // khi mà có studetn rồi thì làm gì?
    // phải thêm student vào server: Store.add
    store.add(newStudent);
    // phải thêm student vào giao diện: RenderUI.add
    ui.add(newStudent);
    // thông báo rằng mình thêm thành công: RenderUI.alert
    ui.alert(`Bạn vừa thêm thành công ${name}`);
});

document.addEventListener("DOMContentLoaded", event =>{
    const ui = new RenderUI();
    ui.renderAll();
});

//sự kiện xóa student
document.querySelector("tbody").addEventListener("click", event =>{
    //không được dom vào những thứ mình tạo ra bằng JS
    //xử lý bằng cách dom tới cha nó - những cái tạo ra bên HTML
    //sau đó dùng contains
    if(event.target.classList.contains("btn-remove")){
        const idRemove = event.target.dataset.id //id của student đã cài vào btn-remove
        //từ id đó đi tìm student, viết 1 hàm nhận id tìm student trong LocalStorage
        //khi mà mình có đối tượng student đó thì mình sẽ có thể thông báo
        const store = new Store();
        const ui = new RenderUI();
        const student = store.getStudent(idRemove);
        const isConfirmed = confirm(`Bạn có chắc là muốn xóa ${student.name}`);
        //dựa vào id xóa đối tượng khỏi LocalStorage
        store.remove(idRemove);
        //render lại giao điện
        ui.renderAll();
        //thông báo đã xóa thành công
        ui.alert(`Bạn đã xóa thành công ${student.name}`);
    }
});
