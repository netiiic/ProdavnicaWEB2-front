import {React, useState, useEffect} from "react";
import Account from "../components/Account";
import Api from "../services/sellerApi";
import { Button, Stack } from "@mui/material";
import ShoppingItem from "../components/ShoppingItem";

const AddShoppingItem = () => {
    //const [username, setUsername] = useState("");
    const [response, setResponse] = useState("");

    /*const jwt = Account.getAccount();
    console.log(jwt);

    const GetJwt = async() =>{
        try{
            await Api.GetProfile(jwt.username).then((res) => setResponse(res.data));
            console.log(response);
        }catch (error){
            console.log(error.data);
        }
    }*/
    const jwt = Account.getAccount();
    const sId = jwt.userId;
    const sendAddNewItem = async() => {
        try{
            response.sellerId = sId;
            await Api.AddNewShoppingItem(response).then((res) => setResponse(res.data));
            console.log(response);
        }catch (error){
            console.log(error.data);
        }
    }

    return(
        <div>
            <div>
                <ShoppingItem item={response} setItem={setResponse}/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={sendAddNewItem}>
                        Add Item
                </Button>
            </div>

    </div>
    );

}

export default AddShoppingItem;