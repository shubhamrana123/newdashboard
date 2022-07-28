import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CardView from "../components/Card";
import Navbar from "../components/Navbar";
import UserContex from "../context/UserContext";
import Dashboard from "./Dashboard";
import Input from "../components/layout/form-fields/Input";

// import axios from 'axios';
const datas = createContext();
function Login() {
  const [adminDatas, setAdminData] = useState({})
  let userCtx = useContext(UserContex)
  console.log(userCtx);

  // console.log(props.newData);
  const axios = require("axios").default;


  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onLogin = async data => {



    const res = await axios.post("http://localhost:3001/api/admin/login", data);
    console.log(data);

    console.log(res.data.result);
    const { id, fname, lname, email, phone,country } = res.data.result
    const userData = { id, fname, lname, email, phone,country }
    // console.log(userData);
    setAdminData(res.data.result)
    console.log(adminDatas);
    userCtx.loginHandler(userData)
    // const {id,UserName} = {res.data.result.id,res.data.result.id,res.data.result.id}
    if (res.data.statusCode == 200) {
      if (res.data.result?.ErrorMessage) {
        alert(res.data.result?.ErrorMessage);
      } else {
        navigate('/dashboard')
      }
    }

    // navigate('dashboard')
  };
  const redirectToSignup = () => {
    navigate("../signup");
  };
  return (
    <>
      <datas.Provider value={adminDatas}>


        {/* <Dashboard></Dashboard> */}


      </datas.Provider>
      <div className="row">
        <br></br>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <CardView>
            <form onSubmit={handleSubmit(onLogin)}>
              
              <Input controller="email" label="Email" type="email" register = {register} errors={errors} required={true} maxLength={100} minLength={1}/>
              <Input controller="password" label="Password" type="password" register = {register} errors={errors} required={true} maxLength={100} minLength={1}/>
              <br/>
              <button className="form-control btn btn-success">
                Login
              </button>
              <br></br>
            </form>
            <br />
          </CardView>

          <li className="btn" id="redirectToSignup" onClick={redirectToSignup}>
            New Around Here? Then Signup
          </li>
        </div>

      </div>
    </>
  );
}

export default Login;
export { datas }

