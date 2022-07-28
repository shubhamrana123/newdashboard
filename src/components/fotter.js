import { flexbox } from "@mui/system";
import { Fragment } from "react";


const Footer = () => {
    return (
        <Fragment>
            <footer class="bg-light text-center text-lg-start">
                
                <div class="text-center p-3" style={{ width:"100%", backgroundColor: "gray", position :"fixed" , bottom:0}}>
                    © 2020 Copyright:
                    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
               
            </footer>
        </Fragment>
    )

}
export default Footer;