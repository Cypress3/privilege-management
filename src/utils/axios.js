import axios from "axios";

const service = axios.create({
    baseURL: "//127.0.0.1:4000",
    timeout: 30000,
});

export default service;