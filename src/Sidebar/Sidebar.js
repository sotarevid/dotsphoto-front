import React from "react";
import './Sidebar.css'
import {Link} from "react-router-dom";

function Sidebar({logout}) {
    return (
        <div className='sidebar'>
            <Link className='sidebar-item' to='/'>Home</Link>
            <Link id='a' className='sidebar-item' to='/404'>404</Link>
            <Link className='sidebar-item logout-button' to='/' onClick={() => logout()}>Log out</Link>
        </div>
    )
}

export default Sidebar;