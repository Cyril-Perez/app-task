import React, {useState} from "react"
import {Link} from "react-router-dom"
import Edit from "./ImgsNavbar/edit.svg"
import Folder from "./ImgsNavbar/folder.svg"
import Setting from "./ImgsNavbar/settings.svg"
import BurgerButton from "./ImgsNavbar/menu.svg"


import "./Navbar.css"

const Navbar = ()=>{
    //rendu conditionnel nav responsive
   const [activeNav,setActiveNav] = useState(false) 
   const toggleNav = ()=>{
       setActiveNav(!activeNav)
   }

    return(
        <React.Fragment>
        <button className="toggle-nav-btn" onClick={toggleNav}>
            <img src={BurgerButton} alt="menu"/>
        </button>
        <nav className="container-nabvbar">
            <div className={activeNav ? "navbar visible" : "navbar"}>
                <ul>
                    <Link to="/">
                        <li>
                            <img src={Folder} alt="folder"/>
                         </li>
                    </Link>
                    <Link to="/edit">
                        <li>
                            <img src={Edit} alt="edit"/>
                        </li>
                    </Link> 
                     <Link to="/">
                        <li>
                            <img src={Setting} alt="folder"/>
                        </li>
                    </Link>
                </ul>
            </div>  
        </nav>
        </React.Fragment>
        
    )
}

export default Navbar