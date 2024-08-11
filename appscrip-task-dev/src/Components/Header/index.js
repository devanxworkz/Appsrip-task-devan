import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiBag1 } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

import './index.css'

const Header = () => {
    return(
        <div className="top-container">
            <div className="headrt-container">
            <CiMenuBurger className="menu"/>
            <img src = "https://i.ibb.co/1dW6L4f/Screenshot-2024-08-11-105928.png" alt = "logo"  className="logo-img"/>
            
            <h1 className="heading">LOGO</h1>
        <div className="lung-shop">
            <div>
            <CiSearch className="search"/>
            <CiHeart className="search"/>
            <CiBag1  className="search"/>
            <CiUser />
            </div>
        <div>
        <p className="eng">ENG <a><MdOutlineKeyboardArrowDown /></a></p>
        </div>
        </div>
        </div>
        <div className="tabs">
        <h5 className="shoping-tabe">SHOP</h5>
        <h5 className="shoping-tabe">SKILLS</h5>
        <h5 className="shoping-tabe">STORIES</h5>
        <h5 className="shoping-tabe">ABOUT</h5>
        <h5 className="shoping-tabe">CONTACT US</h5>

        </div>
        </div>
    )

}

export default Header