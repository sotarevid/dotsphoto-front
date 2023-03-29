import React from 'react'
import useStorage from './useStorage';
import AuthPage from "./AuthPage";
import './GuestGuard.css'

function GuestGuard({children}) {
    const [token, setToken, resetToken] = useStorage('token')

    if (token !== null) {
        return React.cloneElement(children, {logout: resetToken});
    }

    return (
        <div className='flex-wrapper center-contents'>
            <AuthPage setToken={setToken}/>
        </div>
    )
}

export default GuestGuard;