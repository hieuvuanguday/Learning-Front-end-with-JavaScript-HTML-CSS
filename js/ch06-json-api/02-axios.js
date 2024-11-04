// Axios: là một HTTP client hoạt động trong môi trường nodejs và trình duyệt
//        là một thư viện giúp tương tác với api như get post put delete
// axios thì không có sẵn, phải cài đặt (cdn)
// demo get data từ server bằng axios
// axios({
//     method: "get",
//     url: "https://6336fb4c65d1e8ef26779064.mockapi.io/users"
// }).then((response) => {
//     if([200,201].includes(response.status)){
//         return response.data;
//     }else{
//         throw new Error(response.statusText);
//     }
// }).then(value =>{
//     console.log("Lấy data thành công rùi đó", value);
// }).catch(error =>{
//     console.log("Lấy data thất bại vì", error);
// })

// demo post 1 user lên users
// axios({
//     method: "post",
//     url: "https://6336fb4c65d1e8ef26779064.mockapi.io/users",
//     data: {
//         name: "Điệp Nguyên Tử",
//         yob: 2003
//     }
// }).then((response) => {
//     if([200,201].includes(response.status)){
//         return response.data;
//     }else{
//         throw new Error(response.statusText);
//     }
// }).then(value =>{
//     console.log("Lấy data thành công rùi đó", value);
// }).catch(error =>{
//     console.log("Lấy data thất bại vì", error);
// })

// request method aliases
// axios.post("https://6336fb4c65d1e8ef26779064.mockapi.io/users",
//     {name: "Điệp Thân Thiện", yob: 1999}
// ).then((response) =>{
//     console.log(response);
// }); // cách làm lười

// instance trong axios
// để đỡ phải lặp đi lặp lại code
// const instance = axios.create({
//     baseURL: 'https://6336fb4c65d1e8ef26779064.mockapi.io',
//     timeout: 10000, //sau 1s thì tự hủy request
//     headers: {'Content-Type': 'application/json'},
//   });

//   instance
//     .post("users",{
//         name: "Điệp Khó Ở",
//         yob: 1987,
//     }).then((response) =>{
//         console.log(response);
//     });

// class + instance + interceptors để cấu hình
class Http{
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://6336fb4c65d1e8ef26779064.mockapi.io',
            timeout: 10000, //sau 10s thì tự hủy request
            headers: {'Content-Type': 'application/json'},
        });

        // Cấu hình response bằng interceptors
        this.instance.interceptors.response.use(response =>{
            return {
                data: response.data,
                status: response.status,
            }
        }, response =>{
            return Promise.reject({
                data: response.data,
                status: response.status,
            })
        })
        // cấu hình cho request
        // nếu chưa đăng nhập(không có accessToken) thì vẫn cho request
        // nếu đã đăng nhập(có accessToken)
        this.instance.interceptors.request.use(request =>{
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken){
                request.headers.authorization = accessToken;
            }
            return request;
            },
            (request) =>{
                return Promise.reject(request, response);
            }
        );
    }
}

let http = new Http().instance;
http.post('users', {
    name: "Điệp đẹp chai",
    yob: 1999,
}).then((response) =>{
    console.log(response);
});
