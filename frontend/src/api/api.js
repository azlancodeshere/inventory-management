import axios from "axios";

export const Base_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
    baseURL: Base_URL,
    withCredentials: true,
    headers:{
        "content-type": "application/json"
    }
})

export default api;
