// project này mình sẽ thao tác với api của github
// B1: Đăng ký quyền sử dụng API với github
// client_id: "f17c4a3f420908494ca9"
// client_secret = "87000a5f3f83935a058e1043b97e633f3a3d982d"
window.addEventListener("DOMContentLoaded", () =>{
    document
        .querySelector("#form-search")
        .addEventListener("submit", async (event) => {
            event.preventDefault();
            const username = document.querySelector("#username").value;
            let http = new Api();
            let ui = new Ui();
            try{
                const {profile, repos} = await http.getInfor(username);
                ui.render(profile, repos);
                ui.alert("Thành công dòi");
            }catch(error){
                ui.alert("User không tồn tại", "danger");
            }
        });
})














