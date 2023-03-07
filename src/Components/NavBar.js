import {Link} from "react-router-dom";
import React from "react";
import './NavBar.css'

const NavBar=  ()=>{
    return(
        <nav className="navbar" data-testid="navbar" >
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