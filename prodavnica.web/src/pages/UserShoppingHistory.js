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
import Api from '../services/userApi';
import Account from '../components/Account';

const UserShoppingHistory = () => {
  const jwt = Account.getAccount();
  console.log(jwt);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    Api.OrderHistory(jwt.userId)
      .then((response) => setHistory(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(history);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 2 }}>
      {history.map((entry) => (
        <Accordion key={entry.id} sx={{ backgroundColor: '#D1C4E9', color: '#673AB7', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#673AB7' }} />}
            aria-controls="panel-content"
          >
            <Typography variant="h6" sx={{ color: '#673AB7' }}>
              Delivered to address: {entry.address}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: '#B39DDB', borderRadius: '8px' }}>
              <Typography sx={{ color: '#311B92' }}>Buyer ID: {entry.byerId}</Typography>
              <Typography sx={{ color: '#311B92' }}>Comment: {entry.comment}</Typography>
              <Typography sx={{ color: '#311B92' }}>Address: {entry.address}</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#311B92' }}>
                  Items:
                </Typography>
                <List>
                  {entry.items.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText
                        primary={`${item.name} - Quantity: ${item.quantity} - Price: ${item.price} each`}
                        sx={{ color: '#311B92' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Typography sx={{ color: '#311B92' }}>
                Finalized: {entry.finalized ? 'Yes' : 'No'}
              </Typography>
            </Paper>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default UserShoppingHistory;
