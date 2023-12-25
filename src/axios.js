import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://whitedoorz-api.andreassibua.me/api",
});
