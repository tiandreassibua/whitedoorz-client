import { axiosClient } from "./axios";
import { toast } from "react-toastify";

export const getToken = () => {
    return JSON.parse(localStorage?.getItem("access_token"));
};

export const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
};

export const getUserAuth = () => {
    return JSON.parse(localStorage?.getItem("user"));
};

export const setUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};

export const getProperty = async (slug) => {
    try {
        const res = await axiosClient.get(`/properties/${slug}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const createTransaction = async (data) => {
    try {
        const res = await axiosClient.post("/transactions", data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });

        return res.data;
    } catch (error) {
        toast.warning(error.response.data.errors);
        console.log(error);
    }
};

export const getProperties = async () => {
    try {
        const res = await axiosClient.get("/properties");
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getProp = async (id) => {
    const properties = await getProperties();
    const property = properties.find((item) => item.id === id);
    return property;
};

export const getTransactionList = async () => {
    try {
        const res = await axiosClient.get("/transactions", {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });

        return res.data;
    } catch (error) {
        toast.info(error.response.data.errors);
    }
};
