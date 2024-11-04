// client_id: "f17c4a3f420908494ca9"
// client_secret = "87000a5f3f83935a058e1043b97e633f3a3d982d"
// tạo class chuyển xử lý api
//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}

class Api{
    constructor(){
        this.client_id = "f17c4a3f420908494ca9";
        this.client_secret = "87000a5f3f83935a058e1043b97e633f3a3d982d";
    }
    async getInfor(username){
        const [profile, repos] = await Promise.all([
            fetch(
                `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
            ).then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error(response.statusText);
                }
            }), 
            fetch(
                `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
            ).then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error(response.statusText);
                }
            }),
        ]); 

        return {
            profile,
            repos,
        }
    }
}

// test code
// let http = new Api();
// http.getInfor("lehodiep").then(value => {
//     console.log(value);
// }).catch(error => {
//     console.log(error);
// });





