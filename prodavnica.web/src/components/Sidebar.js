import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
  } from "@mui/material";
  import {
    HomeOutlined,
    Person2Outlined,
    AddOutlined,
    AddShoppingCartOutlined,
    VerifiedUserOutlined,
    HistoryOutlined,
    LocalShippingOutlined,
  } from "@mui/icons-material";

  import { useEffect, useState } from "react";
  import {Link} from "react-router-dom";
  import Profile from "../pages/Profile";
  import {Route, Routes} from "react-router-dom";
  import Account from "../components/Account";
  import Api from "../services/userApi";
  import GetAllUnverified from "../pages/GetAllUnverified";
  import AddShoppingItem from "../pages/AddShoppingItem";
  import UserShoppingHistory from "../pages/UserShoppingHistory";
  import SellerShoppingHistory from "../pages/SellerShoppingHistory";
  import AdminShoppingHistory from "../pages/AdminShoppingHistory";
  import MakePurchase from "../pages/MakePurchase";

  const userOptions = [
    { name: "Profile", icon: <Person2Outlined />, link: "/profile" },
    { name: "Purchase", icon: <AddShoppingCartOutlined />, link: "/purchase" },
    { name: "Shopping history", icon: <HistoryOutlined />, link: "/shoppingHistory" },
  ];

  const sellerOptions = [
    { name: "Profile", icon: <Person2Outlined />, link: "/profile" },
    { name: "Add items", icon: <AddOutlined />, link: "/addItems" },
    { name: "Outgoing purchase", icon: < LocalShippingOutlined/>, link: "/outgoingPurchase"},
    { name: "Seller Shopping history", icon: <HistoryOutlined />, link: "/sShoppingHistory" },
  ];

  const adminOptions = [
    { name: "Profile", icon: <Person2Outlined />, link: "/profile" },
    { name: "Verify user", icon: <VerifiedUserOutlined />, link: "/verifyUser" },
    { name: "Admin Shopping history", icon: <HistoryOutlined />, link: "/aShoppingHistory" },
  ]


  
  function Sidebar() {
    const [open, setOpen] = useState(false);
    const [userType, setUserType] = useState();

    const jwt = Account.getAccount();
    const userId = jwt.userId;
  
    const getUserType = async() => {
      await Api.GetUserType(userId)
      .then((res) => setUserType(res.data))
      .catch((error) => console.log(error));
    }
  
    const getUserList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {userOptions.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link to={item.link}><ListItemText primary={item.name} /></Link>
          </ListItem>
        ))}
      </div>
    );

    const getSellerList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {sellerOptions.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link to={item.link}><ListItemText primary={item.name} /></Link>
          </ListItem>
        ))}
      </div>
    );

    const getAdminList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {adminOptions.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link to={item.link}><ListItemText primary={item.name} /></Link>
          </ListItem>
        ))}
      </div>
    );

    //usertype 0 - user
    //usertype 1 - seller
    //usertype 2 - admin
    return (
      <div>
      <div>
        <Button onClick={() => [setOpen(true), getUserType()]} color="primary">Click me</Button>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {userType === 0 ? getUserList() : userType === 1 ? getSellerList() : getAdminList()}         
        </Drawer>

      </div>
      <div>
            <Routes>
              <Route exact path="/profile" Component={Profile}/>
              <Route exact path="/verifyUser" Component={GetAllUnverified}/>
              <Route exact path="/addItems" Component={AddShoppingItem} />
              <Route exact path="/shoppingHistory" Component={UserShoppingHistory} />
              <Route exact path="/sShoppingHistory" Component={SellerShoppingHistory} />
              <Route exact path="/aShoppingHistory" Component={AdminShoppingHistory} />
              <Route exact path="/purchase" Component={MakePurchase} />
            </Routes>
      </div>
      </div>
      

    );
  }
  
  export default Sidebar;