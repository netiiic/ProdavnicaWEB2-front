import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Api from "../services/userApi";
import Account from '../components/Account';
import {useState, useEffect} from 'react';
import { Stack, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

export default function MakePurchase() {

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Available', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'image', headerName: 'Image', width: 130 },     
    ];
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false);
    useEffect(() => {
        Api.GetAllItems()
            .then((response) => setItems(response.data))
            .catch((error) => console.log(error));
    }, []);

    const addToCart = (item) => {
      // Check if the item is already in the cart
      const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
  
      if (existingItemIndex !== -1) {
        // If the item is already in the cart, update its quantity
        const updatedCart = [...cart];
        updatedCart[existingItemIndex].quantity++;
        setCart(updatedCart);
      } else {
        // If the item is not in the cart, add it with quantity 1
        setCart([...cart, { ...item, quantity: 1, id: uuidv4(), boughtId: item.id, bought: true }]);
      }
    };
  
    const removeFromCart = (itemToRemove) => {
      const updatedCart = cart.filter((item) => item.id !== itemToRemove.id);
      setCart(updatedCart);
    };

    const updateCartItemQuantity = (itemId, newQuantity) => {
      // Update the quantity of a specific item in the cart
      const updatedCart = cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    };
    const jwt = Account.getAccount();

    const handlePurchase = () => {
      // Create the purchase request object
      const purchaseRequest = {
        id: uuidv4(),
        byerId: jwt.userId,
        comment,
        address,
        items: cart,
        finalized: true,
        byerFullName: jwt.fullName, // Replace with the actual buyer's name
      };
  
      // Send the purchase request to the backend
      Api.MakePurchase(purchaseRequest)
        .then((response) => {
          // Handle success, e.g., show a success message
          console.log("Purchase successful");
          // Clear the cart after a successful purchase
          setCart([]);
          window.location("/shoppingHistory");
        })
        .catch((error) => {
          // Handle error, e.g., show an error message
          console.error("Purchase failed", error);
        });
    };
  
    const openCart = () => {
      setIsCartOpen(true);
    };
  
    const closeCart = () => {
      setIsCartOpen(false);
    };

  return (
    <div>
    <label>ALL ITEMS</label>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={items}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={(params) => addToCart(params.row)} // Add items to cart on row click
      />
    </div>
    <TextField
        label="Address"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        label="Comment"
        variant="outlined"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={openCart}>
        View Cart ({cart.length})
      </Button>
      <Dialog open={isCartOpen} onClose={closeCart}>
        <DialogTitle>Your Shopping Cart</DialogTitle>
        <DialogContent>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: $${item.price}`}
                />
                <TextField
                  label="Quantity"
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateCartItemQuantity(item.id, parseInt(e.target.value))
                  }
                  inputProps={{
                    min: 1, // Ensure quantity is at least 1
                    max: items.quantity, // Limit quantity to available quantity
                  }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => removeFromCart(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeCart} color="primary">
            Close
          </Button>
          <Button onClick={handlePurchase} color="primary">
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}