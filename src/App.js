
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [userListData, setUserListData] = useState([
    { id: 1, firstName: "shubham", lastName: "rana", email: "shubham@gmail.com", password: "Miri@123" }
  ])
  const addUserData = (data) => {
    console.log(data);
    console.log("added", JSON.stringify(data))
    setUserListData(prevState => (
      [...prevState, data]
    ))
  }
  return (
    <>

      <Navbar></Navbar>
      <br/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login  list = {userListData}/>} />
          <Route path='signup' element={<Signup list = {userListData} addUser={addUserData}></Signup>} />
          {/* <Route path='dashboard' element={<Dashboard></Dashboard>} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
