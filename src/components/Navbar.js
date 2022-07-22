import React ,{useContext, useEffect, useState}from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
// import { data } from "../pages/Login";

import UserContex from "../context/UserContext";
function Navbar() 
{ 
  let usrContx = useContext(UserContex);
  const [userName,setUserName] = useState('')
  // const newData = useContext(data);
  // console.log("contextdata", newData);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  let navigate = useNavigate();


  const onLogout = ()=>
  {
    usrContx.logoutHandler();

  }
  useEffect(()=>{
    console.log("effect",usrContx?.userInfo)
    setUserName(`${usrContx?.userInfo?.fname}  ${usrContx?.userInfo?.lname}`);
  },[usrContx?.userInfo?.fname])
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex" >
          
          {usrContx.isUserLoggedIn && <div >
            <span>{userName.toUpperCase()}</span>&nbsp; &nbsp;
            <button class="btn btn-outline-danger" type="submit" onClick={onLogout}>
              Logout
            </button> </div>}
            
        </form>
        {/* {newData} */}
      </div>
    </nav>
  );
}

export default Navbar;
