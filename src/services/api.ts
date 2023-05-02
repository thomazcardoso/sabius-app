import axios from "axios";

export const api = axios.create({
    baseURL: "https://sabiusapi.onrender.com",
    timeout: 8000,
})