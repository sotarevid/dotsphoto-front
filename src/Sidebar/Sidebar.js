import React, {useState} from "react";
import './Sidebar.css'
import {Link} from "react-router-dom";
import Modal from "../Modal/Modal";

function Sidebar({logout}) {
    const [modalHidden, setModalHidden] = useState(true);

    return (
        <>
            <div className='sidebar'>
                <Link className='sidebar-item' to='/'>Home</Link>
                <Link id='a' className='sidebar-item' to='/404'>404</Link>
                <input type='button' className='sidebar-item' value='Upload' onClick={() => setModalHidden(false)}/>
                <Link className='sidebar-item logout-button' to='/' onClick={() => logout()}>Log out</Link>
            </div>
            <Modal hidden={modalHidden} callback={() => setModalHidden(true)}/>
        </>
    )
}

export default Sidebar;