import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Api from "../services/adminApi";
import {useState, useEffect} from 'react';


const columns = [
    { field: 'fullName', headerName: 'Full Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },
    { field: 'dateOfBirth', headerName: 'Date of Birth', width: 130 },
    { field: 'verify', headerName: 'Accept/Decline', width: 130 },
  ];



export default function GetAllUnverified() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        Api.GetAllUnverified()
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);

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