import React, { createContext, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CardView from "../components/Card";
import Navbar from "../components/Navbar";
import UserContex from "../context/UserContext";

// import axios from 'axios';
// const data = createContext();
function Login() {
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
    console.log(res.data.result);
    const {id,fname,lname} =res.data.result
    const userData ={id,fname,lname}
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
      <div className="row">
        <br></br>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <CardView>
            <form onSubmit={handleSubmit(onLogin)}>
              <label>Email</label>
              <input
                className="form-control"
                {...register("email", { required: true })}
              ></input>
              {/* {errors.email && <p>Please Check Your Email</p>} */}
              <label>Password</label>
              <input
                className="form-control"
                {...register("password", { required: true })}
              ></input>
              {/* {errors.password && <p>Please Check Your Password</p>} */}
              <br />
              <button className="form-control btn btn-success">
                Login
              </button>{" "}
              <br></br>
            </form>{" "}
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

