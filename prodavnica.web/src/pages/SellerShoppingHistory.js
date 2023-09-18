import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Api from '../services/sellerApi';
import Account from '../components/Account';

const SellerShoppingHistory = () => {
  const [history, setHistory] = useState([]);
  const jwt = Account.getAccount();

  useEffect(() => {
    Api.SellerShoppingHistory(jwt.userId)
      .then((response) => setHistory(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 2 }}>
      {history.map((entry) => (
        <Accordion key={entry.id} sx={{ backgroundColor: '#9c27b0', color: '#fff', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
            aria-controls="panel-content"
          >
            <Typography variant="h6" sx={{ color: '#fff' }}>
              Buyer Full Name: {entry.byerFullName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: '#7b1fa2', borderRadius: '8px' }}>
              <Typography sx={{ color: '#fff' }}>Comment: {entry.comment}</Typography>
              <Typography sx={{ color: '#fff' }}>Address: {entry.address}</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                  Items:
                </Typography>
                <List>
                  {entry.items.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText
                        primary={`${item.name} - Quantity: ${item.quantity} - Price: ${item.price} each`}
                        sx={{ color: '#fff' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SellerShoppingHistory;
