import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL
const SELLER_PATH = "/seller";

const api = axios.create({
    baseURL: API_URL + SELLER_PATH,
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

const AddNewShoppingItem = async(data) => {
    return apiPost("/AddNewItem", data)
}

const GetAllMyItems = async(data) => {
    return api.put("/GetAllMyItems?sellerId=" + data);
}

const DeleteItem = async(data) => {
    return api.put("/DeleteItem?id=" + data);
}

const UpdateItem = async(data) => {
    return api.put("/UpdateItem?id=" + data.id, data)
}

const SellerShoppingHistory = async(data) => {
    return apiGet("/GetMyOrders?sellerId=" + data);
}

const SellerApi = {
    AddNewShoppingItem,
    GetAllMyItems,
    DeleteItem,
    UpdateItem,
    SellerShoppingHistory
}

export default SellerApi;