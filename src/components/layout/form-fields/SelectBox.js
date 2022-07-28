import { Fragment } from "react"
const SelectBox = (props) => {
    return (
        <Fragment>
            <select className="form-control" {...props.register(props.controller, { required: props.required })}>
                <option selected={true} value="0">Please Choose Country Name</option>
             
                {props.country.map(item => (
                    <option value={item.name}>{item.name}</option>
                ))}
            </select>
            </Fragment>
    )
}
export default SelectBox