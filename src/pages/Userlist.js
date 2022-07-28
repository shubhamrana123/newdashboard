import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CardView from '../components/Card';
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid';
import { set } from 'react-hook-form';
function Userlist() {
  const [active, setActive] = useState(false)
  const filter = [
    { id: 1, name: "Filter by Manager Id" },
    { id: 2, name: "Filter by Department Id" }
  ]
  let navigate = useNavigate();
  const [id, setId] = useState([])
  const [userList, setUserList] = useState([])
  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'id', headerName: 'Id', width: 170 },
    { field: 'fname', headerName: 'First name', width: 130 },
    { field: 'lname', headerName: 'Last name', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.fname || ''} ${params.row.lname || ''}`,
    },
    { field: 'email', headerName: 'Email', width: 170 },
    { field: 'address', headerName: 'Address', width: 170 },
    { field: 'phone', headerName: 'Phone', width: 170 },
    { field: 'dept', headerName: 'Department', width: 170 },
    { field: 'emp_type', headerName: 'Employee Type', width: 170 },
    { field: 'manager', headerName: 'Manager', width: 170 },

    // { field: 'password', headerName: 'Password', width: 170 },
    {
      field: 'action',
      headerName: 'Action',
      width: 170,
      sortable: false,
      renderCell: (params) => {
        const onClick = (id) => {
          console.log("Id", params);
          // e.stopPropagation(); // don't select this row after clicking
          // console.log(e.target);
          navigate('/edituser/' + params?.row?.id, { state: { editFormData: params?.row } });
          // const api: GridApi = params.api;
          // const thisRow: Record<string, GridCellValue> = {};

          // api
          //   .getAllColumns()
          //   .filter((c) => c.field !== '__check__' && !!c)
          //   .forEach(
          //     (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          //   );

          // return alert(JSON.stringify(thisRow, null, 4));
        };
        function deleteUserData() {

        }

        return (<>
          <Button onClick={(id) => onClick(id)}>Edit</Button>
          {/* <Button type ="button" onClick={deleteUserData}>Delete</Button> */}
        </>
        )

      },
    },
    // {
    //     name: "Edit",
    //     options: {
    //       filter: true,
    //       sort: false,
    //       empty: true,
    //       customBodyRender: (value, tableMeta, updateValue) => {
    //         return (
    //           <button onClick={() => window.alert(`Clicked "Edit" for row ${tableMeta.rowIndex}`)}>
    //             Edit
    //           </button>
    //         );
    //       }
    //     }
    // }
  ];
  useEffect(() => {
    const onLoad = async () => {
      const res = await axios.get('http://localhost:3001/api/admin/getAllActiveUsers')
      console.log(res?.data);
      setUserList(res?.data?.result)
    }


    onLoad();
  }, [])
  const getActiveUsers = async () => {
    alert("hi")
    const res = await axios.get('http://localhost:3001/api/admin/getAllActiveUsers')
    console.log(res);
    setActive(true)
    setUserList(res?.data?.result)

  }
  const getInActiveUsers = async () => {
    alert("hi")
    const res = await axios.get('http://localhost:3001/api/admin/getAllInactiveUsers')
    console.log(res)
    setUserList(res?.data?.result)

  }
  return (
    <>
      <div className="row">
        <br></br>
        <div className="col-md-3"></div>
        <div className="col-md-1">
          <ul class="nav nav-pills">
            <li class="nav-item">
              {/* <button className='form-control btn btn-primary'   onClick={getActiveUsers}> Active</button> */}
              {/* <a class="nav-link active btn" onClick={getActiveUsers}>Active</a> */}
            </li>



          </ul>
        </div>
        <div className="col-md-4">
          <ul class="nav nav-pills">
            <li class="nav-item">
              {/* <button className='form-control btn btn-primary'   onClick={getActiveUsers}> Active</button> */}
              <a class="nav-link active btn" onClick={getActiveUsers}>Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn" onClick={getInActiveUsers}>Inactive</a>
            </li>


          </ul>
        </div>
      </div> <br />

      <div className="row">
        <br></br>
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <select style={{width:"200px"}} className='form-control'>
            <option>Filter</option>
            {filter.map((item) => (
              <option>{item.name}</option>))}
          </select>
          <br/>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={userList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            // checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Userlist