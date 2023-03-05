import {Link} from "react-router-dom";
import React from "react";

const NavBar=  ({items})=>{
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                </li>
            </ul>

        </nav>
    );
};

export default NavBar