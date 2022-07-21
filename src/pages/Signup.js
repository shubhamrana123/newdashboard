import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Navigate, useNavigate } from 'react-router-dom'
function Signup(props) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [value, setValue] = useState();
  let navigate = useNavigate()
  const countryList = [
    {
      id: 1,
      name: 'India'
    },
    {
      id: 2,
      name: 'Usa'
    },
    {
      id: 3,
      name: 'Uk'
    },
    {
      id: 4,
      name: 'Australia'
    },
    {
      id: 5,
      name: 'Saudi Arabia'
    }
  ]
  const onSignup = (data) => {
    props.addUser(data);
    navigate('/dashboard')

  }
  return (
    <>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <form onSubmit={handleSubmit(onSignup)}>
            <label>FirstName</label>
            <input className='form-control' {...register('firstname', { required: true })}></input>
            {errors.firstname && <p>Please Check Your FirstName</p>}
            <label>LastName</label>
            <input className='form-control' {...register('lastname', { required: true })}></input>
            {errors.lastname && <p>Please Check Your LastName</p>}
            <label>Email</label>
            <input className='form-control' {...register('email', { required: true })}></input>
            {errors.email && <p>Please Check Your email</p>}
            <label>Password</label>
            <input className='form-control' {...register('password', { required: true })}></input>
            {errors.password && <p>Please Check Your Password</p>}

            <br />
            <select>
              <option>Please choose Country</option>
              {countryList.map((item)=>(
                  <option>{item.name}</option>
              ))}
            </select> <br /> <br></br>
            <label>Phone number</label> <br></br>

            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue} /> <br/>
            <button className='form-control btn btn-success' >Signup</button>
         
          </form>
        </div>
      </div>



    </>
  )
}

export default Signup