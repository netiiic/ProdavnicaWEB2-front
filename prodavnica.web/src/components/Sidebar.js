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

  import { useState } from "react";
  
  const data = [
    {
      name: "Home",
      icon: <HomeOutlined />,
    },
    { name: "Profile", icon: <Person2Outlined /> },
    { name: "Add items", icon: <AddOutlined /> },
    { name: "Purchase", icon: <AddShoppingCartOutlined /> },
    { name: "Verify user", icon: <VerifiedUserOutlined /> },
    { name: "Shopping history", icon: <HistoryOutlined /> },
    { name: "outgoingc purchase", icon: < LocalShippingOutlined/>},
    { name: "Seller Shopping history", icon: <HistoryOutlined /> },
    { name: "Admin Shopping history", icon: <HistoryOutlined /> },
  ];
  
  function Sidebar() {
    const [open, setOpen] = useState(false);
  
    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </div>
    );
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Click me</Button>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default Sidebar;