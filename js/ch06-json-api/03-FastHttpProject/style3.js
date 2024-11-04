// Fetch + sync await + class
class FastHttp{
    async send(method, url, body){
        let response = await fetch(url, { 
            method: method,
            headers: {"Content-Type": "application/json"},
            body: body ? JSON.stringify(body) : null,
        })
        if(response.ok){
            return response.json();
        }else{
            throw new Error(response.statusText);
        }
    };
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
(async () =>{
    try{
        let value = await http.put(`${baseURL}/6`, {name: "Điệp 10 Ten 1"})
        console.log("Value là: ", value);
    }catch(error){
        console.log("Lỗi nè: ", error);
    }
})();











