/*import React from "react";
import Account from "./Account";
import { Link } from "react-router-dom";

const Header = () => {

    const handleSignout = () => {
        Account.signOut();
        window.location = "/";
    }

    return (
        <div id="header" className="header fixed-top d-flex align-items-center">
            <div className="header-nav ms-auto">
                <div className="d-flex align-items-center">
                    <div className="nav-item">
                        <Link to="" onClick={handleSignout}>
                            Sign out 
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;*/

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Account from "./Account";
import Sidebar from './Sidebar';

export default function ButtonAppBar() {

    const handleSignout = () => {
        Account.signOut();
        window.location = "/";
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={Sidebar}
          >
            <MenuIcon  />
          </IconButton>
          <Button color="inherit" onClick={handleSignout}>Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}