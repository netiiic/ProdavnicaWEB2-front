import {React, useState, useEffect} from "react";
import Account from "../components/Account";
import Api from "../services/userApi";
import { Button, Stack } from "@mui/material";
import User from "../components/User";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [response, setResponse] = useState("");

    const jwt = Account.getAccount();
    console.log(jwt);

    const GetJwt = async() =>{
        try{
            await Api.GetProfile(jwt.username).then((res) => setResponse(res.data));
            console.log(response);
        }catch (error){
            console.log(error.data);
        }
    }

    const sendChangeRequest = async() => {
        try{
            await Api.UpdateProfile(response).then((res) => setResponse(res.data));
            console.log(response);
        }catch (error){
            console.log(error.data);
        }
    }

    return(
        <div>
            <div>
                <Button variant="contained" color="primary" onClick={GetJwt}>
                    Get your information
                </Button>
            </div>
            <div>
                <User user={response} setUser={setResponse}/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={sendChangeRequest}>
                        Change profile
                </Button>
            </div>

    </div>
    );

}

export default Profile;