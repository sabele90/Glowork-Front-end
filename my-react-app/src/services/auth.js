import api from "./index";

export async function login (loginData){
    console.log(loginData)
    const {data} = await api.post("/auth/login", loginData)
    console.log(data)
    return data
}
 