import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createContext } from "react";
import UserContextProvider from "./context/userContextProvider";
import AddEmployeeForm from "./pages/AddEmployeeForm";
import Userlist from "./pages/Userlist";
import Footer from "./components/fotter";
import Edit from "./pages/Edit";
// import Login from './pages/Login';
const datas = createContext(Login);
function App() {
  

  return (
    <>
        <Navbar></Navbar>
        <br/>
        {/* <UserContextProvider></UserContextProvider> */}
        <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/login" element={<Login  />} />
          <Route
            path="signup"
            element={
              <Signup  ></Signup>
            }
          />
          <Route path="dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/addEmployee" element={<AddEmployeeForm></AddEmployeeForm>} />
          <Route path="/userList" element={<Userlist></Userlist>} />
          <Route path="/editUser/:id" element={<Edit></Edit>} />
        </Routes>
          <br/>
    </>
  );
}

export default App;
