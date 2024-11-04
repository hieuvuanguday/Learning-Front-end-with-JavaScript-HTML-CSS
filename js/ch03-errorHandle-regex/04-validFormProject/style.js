// rule validate 
// Email: isRequired không đc bỏ trống, đúng pattern
// Name: isRequired , đúng tên tiếng anh hay việt, không chứa số, max 50 kí tự
// Gender: isRequired
// Country: isRequired
// Password: isRequired, min 8, max 20
// Confirm Password, isRequired, min 8, max 20, is same with Password

//thực tế password cần regex nhưng trong bài này sẽ bỏ qua (có thể regex cấm '' \ )
//tạo regex cho email có thể tìm bằng regex email, hoặc regex unicode vietnamese để hỗ trọ regex có dấu việt

//regex for email
const REG_EMAIL = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-]{1,65}\.[a-zA-Z]{1,6}$/;
//regex for name mã \u00C0-\u024F\u1E00-\u1EFF là để hỗ trợ tiếng việt unicode
const REG_NAME = /^[a-zA-Z'\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z'\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/;

//viết những hàm kiểm tra value 
//hàm check rỗng: nếu khớp yêu cầu thì trả chuỗi rỗng, không khớp thì chửi
const isRequired = (value) => (value !== "" ? "" : "That field is required"); //value khác rỗng hay không
//hàm check email
const isEmail = (value) => REG_EMAIL.test(value) ? "" : "Email is not valid";
//hàm check name
const isName = (value) => REG_NAME.test(value) ? "" : "Name is not valid";
// hàm check max 50 hàm này viết theo Curryning
const max = (num) => (value) => value.length <= num ? "" : `Max is ${num}`;
// hàm check min 8
const min = (num) => (value) => value.length >= num ? "" : `Min is ${num}`;
// hàm so sánh 2 trường dữ liệu là password và confirmPassword
const isSame = (paramValue, fieldName1, fieldName2) => (value) => //currying
    paramValue == value ? "" : `${fieldName1} does not match with ${fieldName2}`; 

//khái niệm cần nắm trong bài
//value: là giá trị bên trong của Input 
//funcs: mảng chứa các hàm dùng để check value
//  giả sử cần check value của email
//  funcs: [isRequired, isEmail];
//parentNode: element cha dùng để hiển thị lỗi / element cha của control node
//controlNodes: element input

//khi mà chạy các hàm check sẽ nhận được chuỗi rỗng hoặc chuỗi chửi 
//nếu chửi phải hiện ra màn hình => cần 1 hàm báo lỗi ra màn hình

//hàm báo lỗi
const createMsg = (parentNode, controlNodes, msg) => {
    //tạo div thông báo
    const invalidDiv = document.createElement("div");
    invalidDiv.className = "invalid-feedback";
    invalidDiv.textContent = msg;
    parentNode.appendChild(invalidDiv);//chèn vào node cha
    //cho các input có thêm class is-invalid
    controlNodes.forEach((inputItem) => {
        inputItem.classList.add("is-invalid");
    });
};

//thằng gọi tổng hợp
//là 1 hàm nhận vào value và funcs để kiểm tra
//      funcs là mảng chứa các hàm
//              duyệt funcs để các hàm chạy lần lượt với value
//=>      kiểm tra value bằng các hàm trong funcs
//      trong quá trình kiểm tra từng hàm
//      nếu trả ra null thì do nothing
//      nếu trả chuỗi chửi (msg = "chửi") thì gọi hàm createMsg(parentNode, controlNode, msg)

//
const isValid = (paramObject) => {
    const { value, funcs, parentNode, controlNodes } = paramObject; //destructuring phân rã object thành các thuộc tính
    //không nên dùng forEach vì forEach chơi với tính khả lập nên tự duyệt đối tượng tiếp theo
    for (const funcCheck of funcs){ //forEach không chơi với return vì forEach k ngừng lại bất chấp return
        let msg = funcCheck(value); //duyệt lấy lỗi
        if(msg){ //viết này cho nghệ nó có value là chuỗi chửi thì nó tự là true
            createMsg(parentNode, controlNodes, msg);
            return msg; //chỉ cần lỗi 1 cái thì ngừng luôn không cần duyệt lỗi khác
        } 
    };
    return "";
};

const clearMsg = () => {
    document.querySelectorAll(".is-invalid").forEach((inputNode)=>{
        inputNode.classList.remove("is-invalid");
    });
    document.querySelectorAll(".invalid-feedback").forEach((divMsg)=>{
        divMsg.remove();
    });
};
//sự kiện chính : khi mình bấm submit nó mới check
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault(); //ngăn việc reset khi mình bấm submit
    clearMsg();
    // dom tới các ControlNodes
    const emailNode = document.querySelector("#email"); //lấy control node là nút input email
    const nameNode = document.querySelector("#name");
    const genderNode = document.querySelector("#gender");
    const countryNode = document.querySelector("input[name='country']:checked"); //lấy ra thẻ input nào có tên country và check là bị bấm vào
    const passwordNode = document.querySelector("#password");
    const passwordConfirmedNode = document.querySelector("#confirmedPassword");
    const agreeNode = document.querySelector("input#agree:checked"); //tưởng tự country 

    const errorForm = [
        //check email
        isValid({  //viết dưới dạng truyền vào 1 object
            value: emailNode.value, 
            funcs: [isRequired, isEmail], 
            parentNode: emailNode.parentElement,
            controlNodes: [emailNode],
        }),
        //check name
        isValid({  //viết dưới dạng truyền vào 1 object
            value: nameNode.value, 
            funcs: [isRequired, isName, max(50)], //currying hàm max sẽ tự nhận vào 50 và trả ra 1 hàm nhận value, hàm nhận value sẽ cùng giá trị mà những hàm khác cần 
            parentNode: nameNode.parentElement,
            controlNodes: [nameNode],
        }),
        //check gender
        isValid({  //viết dưới dạng truyền vào 1 object
            value: genderNode.value, 
            funcs: [isRequired],
            parentNode: genderNode.parentElement,
            controlNodes: [genderNode],
        }),
        //check country
        isValid({  //viết dưới dạng truyền vào 1 object
            value: countryNode ? countryNode.value : "",
            funcs: [isRequired],
            // parentNode: countryNode.parentElement, không viết kiểu này vì có khả năng user k chọn thì k có parentNode
            parentNode: document.querySelector(".form-check-country").parentElement,
            controlNodes: document.querySelectorAll("input[name='country']"), //dùng all thì k cần dạng [] nên bỏ []
        }),
        //check password
        isValid({  //viết dưới dạng truyền vào 1 object
            value: passwordNode.value, 
            funcs: [isRequired, min(8), max(20)],
            parentNode: passwordNode.parentElement,
            controlNodes: [passwordNode],
        }),
        //check confirmedPassword
        isValid({  //viết dưới dạng truyền vào 1 object
            value: passwordConfirmedNode.value, 
            funcs: [isRequired, min(8), max(20), isSame(passwordNode.value, "Confirm Password", "Password")],
            parentNode: passwordConfirmedNode.parentElement,
            controlNodes: [passwordConfirmedNode],
        }),
        //agree
        isValid({  //viết dưới dạng truyền vào 1 object
            value: agreeNode ? agreeNode.value : "", 
            funcs: [isRequired],
            parentNode: document.querySelector("#agree").parentElement,
            controlNodes: [document.querySelector("#agree")],
        }),
    ];
    let isValidForm = errorForm.every((item) => !item);
    // every là hàm kiểm tra tất cả các item, nếu rỗng hết thì trả ra true
    if(isValidForm){
        alert("Form is valid");
        clearMsg();
    };
});