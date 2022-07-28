import { Fragment } from "react";


const Input = (props)=>
{
    let errors = props.errors
    console.log("error",props.errors)
   return(
    <Fragment>
            <label>{props.label}</label>
            <input
              className="form-control" type={props.type}
              {...props.register(props.controller, { required: props.required, maxLength : props.maxLength, minLength : props.minLength })}
        />
        
        <br/>
        {errors[props.controller]  && <p className="text-danger">This field is required </p>}
    </Fragment>

   )
}   

export default Input;