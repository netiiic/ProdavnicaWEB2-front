import React, { useState, useEffect } from "react";
import Api from "../services/adminApi";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Collapse,
    Box,
  } from '@mui/material';

const AdminShoppingTable = () => {
    const [openRows, setOpenRows] = useState([]);
    const [history, setHistory] = useState([]);
  
    useEffect(() => {
      Api.AdminShoppingHistory()
        .then((response) => setHistory(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    const handleRowClick = (id) => {
      if (openRows.includes(id)) {
        setOpenRows(openRows.filter((rowId) => rowId !== id));
      } else {
        setOpenRows([...openRows, id]);
      }
    };
  
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Buyer ID</TableCell>
              <TableCell>Byer Full Name</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow onClick={() => handleRowClick(row.id)}>
                  <TableCell>{row.byerId}</TableCell>
                  <TableCell>{row.byerFullName}</TableCell>
                  <TableCell>{row.comment}</TableCell>
                  <TableCell>{row.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={3}>
                    <Collapse in={openRows.includes(row.id)}>
                      <Box p={2}>
                        <Typography variant="h6">Items:</Typography>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Quantity</TableCell>
                              <TableCell>Price</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {row.items.map((item) => (
                              <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.price}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default AdminShoppingTable;
