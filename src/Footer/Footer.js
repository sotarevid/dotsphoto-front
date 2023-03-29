import React from "react";
import './Footer.css'
import GithubLogo from "./GithubLogo";

function Footer() {
    return (
        <div className="footer">
            <div className='contacts'>
                <span className='contact'>Бэк на Java: <a className='link-with-logo' href='https://github.com/retsamekohC/dotsphoto'><GithubLogo/> Github</a></span>
                <span className='contact'>Фронт: <a className='link-with-logo' href='https://github.com/sotarevid/dotsphoto-front'><GithubLogo/> Github</a></span>
            </div>
        </div>
    )
}

export default Footer;