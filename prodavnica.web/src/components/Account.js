import axios from "axios";
import jwtDecode from "jwt-decode";
import Api from "../services/userApi";

const signIn = async(username, password) => {
    let data = {username, password};
    try{
        const response = await Api.Login(data);
        if(response?.data)
        {
            localStorage.setItem("jwt", response.data.token);
            return response;
        }
    }
    catch (error)
    {
        console.log(error);
        return error.response;
    }
}

const signOut = () => {
    localStorage.removeItem("jwt");
}

const getAccount = () => {
    const jwt = localStorage.getItem("jwt");
    return jwtDecode(jwt);
}

const isAuthenticated = () => {
    const token = getToken();

    if(!token) {
        return false;
    }

    return true;
}

const getToken = () => {
    return localStorage.getItem("jwt");
}

const Account = {
    signIn,
    signOut,
    getAccount,
    isAuthenticated,
    getToken
}

export default Account;