import React from "react"
import {FaLinkedin,FaGithub} from "react-icons/fa"
import './Footer.css'
function Footer(){
    return(
        <div className="footer" data-testid="footer">
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/chairajoel">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Chaira-Joel>">
                    <FaGithub/>
                </a>
            </div>
            <h4>Chaira Joel 2023</h4>
            <p>chaira.cynthia.joel@gmail.com</p>
        </div>
    )
}

export default Footer

