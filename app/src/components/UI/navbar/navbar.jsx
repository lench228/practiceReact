import React from "react"
import ContactUs from "../buttons/contactUs/ContactUs"
import {HandySvg} from "handy-svg"

import logo from '../../../img/Navbar/Logo.svg'


const Navbar = () => {
    console.log(logo)
    return ( 
    <div className="">
        <div className="">
            
            <HandySvg src={logo}/>

            <span>IK developers</span>
        </div>
        <ul className="">
            <li className =""><a href="#">About Us</a></li>
            <li className =""><a href="#">Services</a></li>
            <li className =""><a href="#">Case Studies</a></li>
            <li className =""><a href="#">Blog</a></li>
            <li className =""><a href="#">How it Works</a></li>
            <li className =""><a href="#">Hire</a></li>
        </ul>
        <ContactUs/>
    </div> );
}
 
export default Navbar;