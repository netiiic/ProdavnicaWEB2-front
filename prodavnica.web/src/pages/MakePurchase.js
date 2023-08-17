import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Api from "../services/userApi";
import {useState, useEffect} from 'react';
import {Stack, Button} from "@mui/material";

export default function MakePurchase() {

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Available', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'image', headerName: 'Image', width: 130 },     
    ];
    const [items, setItems] = useState([]);
    useEffect(() => {
        Api.GetAllItems()
            .then((response) => setItems(response.data))
            .catch((error) => console.log(error));
    }, []);

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
      />
    </div>
    </div>
  );
}