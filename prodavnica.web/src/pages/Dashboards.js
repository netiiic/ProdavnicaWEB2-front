import React from "react";
import Sidebar from "../components/Sidebar";
import Account from "../components/Account";
import Header from "../components/Header";

function Dashboard() {

    //const jwt = Account.getAccount();

    //console.log(jwt.username);
    return(
        <div>
            <Header/>
            <Sidebar/>
        </div>
    );
}

export default Dashboard;