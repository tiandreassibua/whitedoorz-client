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
