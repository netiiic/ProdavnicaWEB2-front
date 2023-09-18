import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GoogleLogin } from '@react-oauth/google';
import Api from '../services/userApi';
import Account from '../components/Account';

const google = () => {

    return (
        <GoogleLogin
            onSuccess={credentialResponse => {
              //console.log(credentialResponse);
              //console.log(credentialResponse.credential.email);
              localStorage.setItem("jwt", credentialResponse.credential);
              const jwt = Account.getAccount();
              console.log(jwt.name);

              const data = {
                id: uuidv4(),
                username: jwt.email,
                email: jwt.email,
                password: '123',
                fullName: jwt.name,
                dateOfBirth: '1.1.1970',
                address: 'unknown',
                userType: 0,
                image: "nestp",
                verified: true,
              }
              Api.RegisterUser(data);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
    )
}

export default google;