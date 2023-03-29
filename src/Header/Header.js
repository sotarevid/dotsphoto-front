import React from "react";
import './Header.css'

function Header({logout}) {
    return (
        <div className="header">
            <h1 className="header-name">МНОГОТОЧИЕ <span className="header-name-emphasis">ФОТО</span></h1>
            <input type='button' className='logout-button' value='Log out' onClick={() => logout()}/>
        </div>
    )
}

export default Header;