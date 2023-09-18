import axios from "axios";

//const API_URL = "https://localhost:7251/api";
const API_URL = process.env.REACT_APP_API_URL
const USER_PATH = "/users";

const api = axios.create({
    baseURL: API_URL + USER_PATH,
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

const RegisterUser = async(data) => {
    return apiPost("/RegisterUser", data);
}

const UpdateProfile = async(data) => {
    return apiPut("?id=" + data.id, data);
}

const GetProfile = async(data) => {
    return api.put("/GetUser?username=" + data);
}

const Login = async(data) => {
    return apiPost("/Login", data);
}

const GetUserType = async(data) => {
    return apiPut("/GetType?id=" + data);
}

const OrderHistory = async(data) => {
    return apiGet("/AllFinalizedPurchaces?userId=" + data);
}

const GetAllItems = async() => {
    return api.get("/GetAllItems");
}

const MakePurchase = async(data) => {
    return api.post("/MakeOrder", data);
}

const UserApi = {
    RegisterUser,
    UpdateProfile,
    Login,
    GetProfile,
    GetUserType,
    OrderHistory,
    GetAllItems,
    MakePurchase
}

export default UserApi;