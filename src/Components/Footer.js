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
                <a href="https://github.com/Chaira-Joel">
                    <FaGithub/>

                </a>
            </div>
            <h5>Chaira Joel 2023</h5>
            <p><a href="mailto:chaira.cynthia.joel@gmail.com">E-mail</a></p>
        </div>
    )
}

export default Footer

