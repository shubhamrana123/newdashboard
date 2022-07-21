import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import CardView from '../components/Card';

function Login(props) {
  const axios = require('axios').default;
  
  let navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const onLogin = async(data) => {
     const res = await axios.post('http://localhost:3001/api/admin/login', {
        "email" : "isha@12",
        "password" : "1234"
    })
    if(res.data.statusCode == 200)
    {
      if(res.data.result?.ErrorMessage)
      {
        alert(res.data.result?.ErrorMessage);
      } 
      else
      {
        navigate('/dashboard')
      }

    }
     
    
    

    
    // navigate('dashboard')
  }
  const redirectToSignup = () => {
    navigate('signup')

  }
  return (
    <>
      <div className='row'>
        <br></br>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <CardView>
            <form onSubmit={handleSubmit(onLogin)}>
              <label>Email</label>
              <input className='form-control' {...register('email', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}></input>
              {/* {errors.email && <p>Please Check Your Email</p>} */}
              <label>Password</label>
              <input className='form-control' {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/ })}></input>
              {/* {errors.password && <p>Please Check Your Password</p>} */}
              <br />
              <button className='form-control btn btn-success' >Login</button> <br></br>

            </form> <br />
          </CardView>

          <li className='btn' id="redirectToSignup" onClick={redirectToSignup}>New Around Here? Then Signup</li>
        </div>

      </div>

    </>
  )
}

export default Login