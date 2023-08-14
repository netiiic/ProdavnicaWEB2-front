import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";

export default function User({ user, setUser }) {
    const FULL_NAME = "Full Name";
    const USER_NAME = "Username";
    const ADDRESS = "Address";
    const EMAIL = "Email";
    const PASSWORD = "Password";
    const DATEOFBIRTH = "Date of birth";


    if (setUser) {
        var setFullName = (event) => setUser({ ...user, fullName: event.target.value });
        var setUserName = (event) => setUser({ ...user, username: event.target.value });
        var setAddress = (event) => setUser({ ...user, address: event.target.value })
        var setEmail = (event) => setUser({ ...user, email: event.target.value })
        var setPassword = (event) => setUser({ ...user, password: event.target.value })
        var setDateOfBirth = (event) => setUser({ ...user, dateOfBirth: event.target.value })
        var setIdentificationNumber = (event) => setUser({ ...user, identificationNumber: event.target.value });
        var setActivate = (event) => setUser({ ...user, activate: event.target.checked });
    }

    return (
        <Grid container spacing={3} marginTop={1}>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setUser}
                    fullWidth
                    label={FULL_NAME}
                    value={user?.fullName ?? ""}
                    onChange={setFullName}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setUser}
                    fullWidth
                    label={USER_NAME}
                    value={user?.username ?? ""}
                    onChange={setUserName}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setUser}
                    fullWidth
                    label={ADDRESS}
                    value={user?.address ?? ""}
                    onChange={setAddress}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setUser}
                    fullWidth
                    label={EMAIL}
                    value={user?.email ?? ""}
                    onChange={setEmail}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setUser}
                    fullWidth
                    label={DATEOFBIRTH}
                    value={user?.dateOfBirth ?? ""}
                    onChange={setDateOfBirth}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <TextField
                    disabled={!setUser}
                    fullWidth
                    label={PASSWORD}
                    value={user?.password ?? ""}
                    onChange={setPassword}
                />
            </Grid>
        </Grid>
    );
}