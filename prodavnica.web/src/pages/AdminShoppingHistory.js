import { React, useState, useEffect } from 'react';
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
import Api from '../services/adminApi';

const AdminShoppingHistory = () => {
    const [history, setHistory] = useState([]);
  
    useEffect(() => {
      Api.AdminShoppingHistory()
        .then((response) => setHistory(response.data))
        .catch((error) => console.log(error));
    }, []);
    

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, margin: 2 }}>
      {history.map((entry) => (
        <Accordion key={entry.id} sx={{ backgroundColor: '#E0F2F1', color: '#1565C0', borderRadius: '8px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#1565C0' }} />}
            aria-controls="panel-content"
          >
            <Typography variant="h6" sx={{ color: '#1565C0' }}>
              Byer Full Name: {entry.byerFullName}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Paper elevation={3} sx={{ p: 2, backgroundColor: '#BBDEFB', borderRadius: '8px' }}>
              <Typography sx={{ color: '#1A237E' }}>Comment: {entry.comment}</Typography>
              <Typography sx={{ color: '#1A237E' }}>Address: {entry.address}</Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#1A237E' }}>
                  Items:
                </Typography>
                <List>
                  {entry.items.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText
                        primary={`${item.name} - Quantity: ${item.quantity} - Price: ${item.price}`}
                        sx={{ color: '#1A237E' }}
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

export default AdminShoppingHistory;