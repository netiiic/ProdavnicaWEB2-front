import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Api from "../services/adminApi";
import {useState, useEffect} from 'react';
import {Stack, Button} from "@mui/material";

export default function GetAllUnverified() {

    const columns = [
        { field: 'fullName', headerName: 'Full Name', width: 130 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'address', headerName: 'Address', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
        {
            field: 'verify',
            headerName: 'Accept/Decline',
            width: 180,
            sortable: false,
            disableClickEventBubbling: true,
            
            renderCell: (params) => {
                const declineSeller = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow.username);
                    let data = {
                        username: currentRow.username,
                        verify: false
                    };
                    Api.VerifyUser(data);
                };
    
                const acceptSeller = (e) => {
                    const currentRow = params.row;
                    console.log(currentRow.username);
                    let data = {
                        username: currentRow.username,
                        verify: true
                    };
                    Api.VerifyUser(data);
                  };
                
                return (
                  <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="success" size="small" onClick={acceptSeller}>Accept</Button>
                    <Button variant="outlined" color="error" size="small" onClick={declineSeller}>Decline</Button>
                  </Stack>
                );
            },
          }
      ];
    const [users, setUsers] = useState([]);
    useEffect(() => {
        Api.GetAllUnverified()
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);
    console.log(users);
    const rows = [
        users
    ];
  return (
    <div>
    <label>ALL UNVERIFIED USERS</label>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
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