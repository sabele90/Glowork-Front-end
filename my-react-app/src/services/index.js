import axios from "axios";

const api = axios.create ({
    baseURL:"https://hubwiseschool.onrender.com/api"
   
})

export default api