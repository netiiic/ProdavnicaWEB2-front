import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL
const ADMIN_PATH = "/admin";

const api = axios.create({
    baseURL: API_URL + ADMIN_PATH,
});

const apiPost = async (operation, data) => {
    return api.post(operation, data);
};

const apiGet = async (operation, data) => {
    return api.get(operation, data);
};

const apiPut = async (operation, data) => {
    return api.put(operation, data);
};

const GetAllUnverified = async() => {
    return api.get("/GetAllUnverified");
}

const VerifyUser = async(data) => {
    return api.put("/VerifyUser?username=" + data.username + "&verify=" + data.verify);
}

const AdminShoppingHistory = async() => {
    return api.get("/GetAllOrders");
}

const AdminApi = {
    GetAllUnverified,
    VerifyUser,
    AdminShoppingHistory
}

export default AdminApi;