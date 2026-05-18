export const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


export const logoutUser = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
};