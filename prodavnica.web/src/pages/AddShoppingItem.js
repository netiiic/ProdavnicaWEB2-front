import {React, useState, useEffect} from "react";
import Account from "../components/Account";
import Api from "../services/sellerApi";
import { Button, Stack } from "@mui/material";
import ShoppingItem from "../components/ShoppingItem";
import { DataGrid } from '@mui/x-data-grid';
import { InputLabel } from '@mui/material';

const AddShoppingItem = () => {
    const [response, setResponse] = useState("");
    const [update, setUpdate] = useState(false);

    const jwt = Account.getAccount();
    const sId = jwt.userId;
    const sendAddNewItem = async() => {
        try{
            response.sellerId = sId;
            await Api.AddNewShoppingItem(response).then((res) => setResponse(res.data));
            setUpdate(false);
            console.log(response);
            Api.GetAllMyItems(sId).then((response) => setItems(response.data))
        }catch (error){
            console.log(error.data);
        }
    }

    const updateItem = async() => {
        try{
            await Api.UpdateItem(response);
            setUpdate(false);
            setResponse("");
            console.log(response);
            Api.GetAllMyItems(sId).then((response) => setItems(response.data))
        }catch (error){
            console.log(error.data);
        }
    }

    const [items, setItems] = useState([]);
    useEffect(() => {
        Api.GetAllMyItems(sId)
            .then((response) => setItems(response.data))
            .catch((error) => console.log(error));
    }, []);


    const columns = [
        { field: 'name', headerName: 'Item name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'description', headerName: 'Description', width: 130 },
        { field: 'image', headerName: 'Image', width: 130 },
        {
            field: 'update',
            headerName: 'Update',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const updateItem = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow);
                    setResponse(currentRow);
                    setUpdate(true);
                };
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={updateItem}>Update</Button>

                  </Stack>
                );
            },
          },
          {
            field: 'delete',
            headerName: 'Delete',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const deleteItem = (e) => {
                    const currentRow = params.row;
                    Api.DeleteItem(currentRow.id);
                    Api.GetAllMyItems(sId).then((response) => setItems(response.data))
                };
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="error" size="small" onClick={deleteItem}>Delete</Button>
                  </Stack>
                );
            },
          }
      ];

    return(
        <div>
            <InputLabel sx={{color: "blue", marginLeft: 20}}>{update ? "UPDATE ITEM" : "ADD NEW ITEM"}</InputLabel>
            <div>
                <ShoppingItem item={response} setItem={setResponse}/>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={update ? updateItem : sendAddNewItem}>
                        {update ? "Update item" : "Add Item"}
                </Button>
            </div>
            <InputLabel sx={{color: "blue", marginLeft: 20, marginTop: 2}}>ALL MY ITEMS</InputLabel>
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

export default AddShoppingItem;