import { useState } from "react";
import Api from "../services/userApi";
import Account from "../components/Account";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const SendLoginRequest = async () => {
        let data = {
            username,
            password
        };
        try {
            //const response = await Api.Login(data);
            const response = await Account.signIn(username, password);
            console.log(response.data.token);
            window.location = "/";
        } catch (error){
            console.log(error.data);
        }
        
        
        
    }

   /* return(

        <div>
            <label>Username</label>
            <input type="text" onChange={e=>setUsername(e.target.value)}/>
            <label>Active</label>
            <input type="text" onChange={e=>setPassword(e.target.value)}/>
            <Button varient="contained" color="primary" onClick={SendLoginRequest}>Register</Button>
        </div>
    );*/

    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch', marginTop: 30, marginLeft: 30},
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Username" variant="outlined" onChange={e=>setUsername(e.target.value)}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" onChange={e=>setPassword(e.target.value)}/>
          <Button varient="outlined" color="primary" onClick={SendLoginRequest}>Login</Button>
        </Box>
      );

}

export default Login;