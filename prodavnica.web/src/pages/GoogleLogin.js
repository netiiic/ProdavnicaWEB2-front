import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './Google';
import Typography from '@mui/material/Typography';
import {Link as RouterLink} from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

// Define the custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#9933FF', // Your desired shade of blue
    },
  },
});

function GoogleLogin() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img className="App-logo" alt="Google login" />

          <GoogleOAuthProvider clientId="502057459470-lhshlu45palj53t2ku16f19rf6ku9va6.apps.googleusercontent.com">
            <Google />
          </GoogleOAuthProvider>
          <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                Back to login? <RouterLink component={Link} to="/">Login</RouterLink>
        </Typography>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default GoogleLogin;
