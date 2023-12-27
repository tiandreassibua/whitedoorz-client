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

export const search = async (keyword) => {
    try {
        const res = await axiosClient.get("/properties", {
            params: {
                keyword,
            },
        });
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

export const getTransaction = async (transactionId) => {
    try {
        const res = await axiosClient.get(`/transactions/${transactionId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });
        return res.data;
    } catch (error) {
        toast.info(error.response.data.errors);
    }
};

export const createReview = async (data) => {
    try {
        const res = await axiosClient.post(
            `/reviews/${data.transactionId}`,
            {
                body: data.body,
                rating: data.rating,
            },
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );

        return res.data;
    } catch (error) {
        toast.info(error.response.data.errors);
        return;
    }
};

export const getWishlists = async () => {
    try {
        const res = await axiosClient.get("/wishlists", {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });

        return res.data;
    } catch (error) {
        toast.error(error.response.data.errors);
    }
};

export const removeWishlist = async (propId, id) => {
    try {
        const res = await axiosClient.delete(
            `/properties/${propId}/wishlists/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );

        return res.data;
    } catch (error) {
        toast.error(error.response.data.errors);
        return;
    }
};

export const updateProfile = async (data) => {
    try {
        const res = await axiosClient.put("/users/profile", data, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        });

        return res.data;
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.errors);
    }
};

export const addWishlist = async (propId) => {
    try {
        const res = await axiosClient.post(
            `properties/${propId}/wishlists`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                },
            }
        );
        return res.data;
    } catch (error) {
        toast.warning(error.response.data.errors);
        return;
    }
};
