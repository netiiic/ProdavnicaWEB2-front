import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from "./pages/Register";
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboards';
import Account from './components/Account';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from './pages/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="*" Component={Account.isAuthenticated() ? Dashboard : Login}/>
        <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
