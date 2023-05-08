import axios from "axios";

export const api = axios.create({
    baseURL: "https://sabiusapi-0-1-1.onrender.com/",
    timeout: 8000,
})