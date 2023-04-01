import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";

function Register({setToken}) {
    const [login, setLogin] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [patronymic, setPatronymic] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = () => {
        setToken(login);
        return <Redirect to='/' />
    }

    return (
        <div className='card container-column center-contents'>
            <h1 className='text-primary'>Welcome!</h1>
            <form className='auth-page-form'>
                <input type='text' className='auth-page-input-text' placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)}/>
                <input type='text' className='auth-page-input-text' placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)}/>
                <input type='text' className='auth-page-input-text' placeholder='Patronymic (if any)' value={patronymic} onChange={e => setPatronymic(e.target.value)}/>

                <input type='text' className='auth-page-input-text' placeholder='E-mail' value={login} onChange={e => setLogin(e.target.value)}/>
                <input type='password' className='auth-page-input-text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

                <input type='button' className='auth-page-button' value='Sign up' onClick={handleSubmit}/>
                <span className='hint'>Already have an account? <Link to='/login'>Sign in!</Link></span>
            </form>
        </div>
    )
}

export default Register;