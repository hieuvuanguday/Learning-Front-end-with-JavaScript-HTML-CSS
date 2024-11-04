// Fetch + promise + class
class FastHttp{
    send(method, url, body){
        return fetch(url, { //nhận giá trị, trả ra 1 promise, giúp xử lý những bước kế tiếp theo thủ tục bằng try, catch
            method: method,
            headers: {"Content-Type": "application/json"},
            body: body ? JSON.stringify(body) : null,
        }).then(response =>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error(response.statusText);
            }
        });
    }
    get(url){
        return this.send("GET", url, null);
    }
    post(url, body){
        return this.send("POST", url, body);
    }
    put(url, body){
        return this.send("PUT", url, body);
    }
    delete(url){
        return this.send("DELETE", url, null);
    }
}

// test
const baseURL = ("https://6336fb4c65d1e8ef26779064.mockapi.io/users");
let http = new FastHttp();
http.put(`${baseURL}/6`, {name: "Điệp 10 Ten"}).then(value =>{
        console.log("cập nhật là:", value);
    }).catch(error => {
        console.log("Cập nhật thất bại vì ", error);
    })











