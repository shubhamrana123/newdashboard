import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { createContext } from "react";
import UserContextProvider from "./context/userContextProvider";
// import Login from './pages/Login';
const datas = createContext(Login);
function App() {
  

  return (
    <>
      <br />

        <Navbar></Navbar>
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
        </Routes>

    </>
  );
}

export default App;
