import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import './App.css';

function App() {
  const API =
    'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD';

  let [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log('dadad', responseData);

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "XGrid", col2: "is Awesome" },
    { id: 3, col1: "Material-UI", col2: "is Amazing" },
    { id: 4, col1: "Hello", col2: "World" },
    { id: 5, col1: "XGrid", col2: "is Awesome" },
    { id: 6, col1: "Material-UI", col2: "is Amazing" }
  ];

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  // const sortModel = [
  //   {
  //     field: 'username',
  //     sort: 'asc',
  //   },
  // ];

  return (
    <div className="App">
      <header className="App-header">
        Crypto Currencies
      </header>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid  rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default App;
