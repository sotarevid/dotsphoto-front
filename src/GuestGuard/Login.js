import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";

function Login({setToken}) {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        setToken(login);
        return <Redirect to='/' />
    }

    return (
        <div className='card container center-contents'>
            <h1 className='text-primary'>Welcome back!</h1>

            <form className='auth-page-form'>
                <input type='text' className='auth-page-input-text' placeholder='E-mail' value={login} onChange={e => setLogin(e.target.value)}/>
                <input type='password' className='auth-page-input-text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

                <input type='button' className='auth-page-button' value='Sign in' onClick={handleSubmit}/>
                <span className='hint'>Don't have an account? <Link to='/register'>Sign up!</Link></span>
            </form>
        </div>
    )
}

export default Login;