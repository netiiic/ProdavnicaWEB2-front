import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Account from '../components/Account';
import {Link as RouterLink} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      let data = {
        email,
        password
    };
    try {
        const response = await Account.signIn(email, password);
        console.log(response.data.token);
        window.location = "/";
    } catch (error){
        console.log(error.response.data);
    }
      console.log('Login successful');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login Page
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
        <RouterLink component={Link} to="/register">Make an account</RouterLink>
      </Typography>
      <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
        <RouterLink component={Link} to="/google">Google Register</RouterLink>
      </Typography>
    </Container>
  );
};

export default Login;
