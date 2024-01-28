import React from "react"
import ContactUs from "../buttons/contactUs/ContactUs"
import {HandySvg} from "handy-svg"
import cl from "./navbar.module.css"

import logo from '../../../img/Navbar/Logo.svg'


const Navbar = () => {
    return ( 
    <div className={cl.container}>
        <div className={cl.logo}>
            <HandySvg 
                src={logo}
                height={22.05}
                width={29.4}
            />
            <span>IK developers</span>
        </div>
        <ul className={cl.links}>
            <li className ={cl.link}><a href="#">Services</a></li>
            <li className ={cl.link}><a href="#">Case Studies</a></li>
            <li className ={cl.link}><a href="#">Blog</a></li>
            <li className ={cl.link}><a href="#">How it Works</a></li>
            <li className ={cl.link}><a href="#">Hire</a></li>
            <li className ={cl.link}><a href="#">About Us</a></li>
        </ul>
        <ContactUs/>
    </div> );
}
 
export default Navbar;