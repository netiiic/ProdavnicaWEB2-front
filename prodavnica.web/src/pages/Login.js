import { useState } from "react";
import Api from "../services/userApi";
import { Button } from '@mui/material';

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const SendLoginRequest = async () => {
        let data = {
            username,
            password
        };
        try {
            const response = await Api.Login(data);
            console.log(response.data.token);
        } catch (error){
            console.log(error.data);
        }
        
        
        
    }

    return(
        <div>
            <label>Username</label>
            <input type="text" onChange={e=>setUsername(e.target.value)}/>
            <label>Active</label>
            <input type="text" onChange={e=>setPassword(e.target.value)}/>
            <Button varient="contained" color="primary" onClick={SendLoginRequest}>Register</Button>
        </div>
    );

}

export default Login;