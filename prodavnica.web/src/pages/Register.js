import { useState } from "react";
import Api from "../services/userApi";
import { Button } from '@mui/material';

const Register = () => {
    const [username, setUsername] = useState("");
    const [active, setActive] = useState(false);
    const [fullName, setFullName] = useState("string");
    const [email, setEmail] = useState("string");
    const [image, setImage] = useState("string");
    const [address, setAdress] = useState("string");
    const [password, setPassword] = useState("string");
    const [dateOfBirth, setDOB] = useState("string");

    const SendRegisterRequest = async () => {
        let data = {
            username,
            active,
            fullName,
            email,
            image,
            address,
            password,
            dateOfBirth
        };
        const response = await Api.RegisterUser(data);
    }

    return(
        <div>
            <label>Username</label>
            <input type="text" onChange={e=>setUsername(e.target.value)}/>
            <label>Active</label>
            <input type="text" onChange={e=>setActive(e.target.value)}/>
            <Button varient="contained" color="primary" onClick={SendRegisterRequest}>Register</Button>
        </div>
    );

}

export default Register;