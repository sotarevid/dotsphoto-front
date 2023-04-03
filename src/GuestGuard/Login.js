import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";

function Login({setToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [validationErrors, setValidationErrors] = useState({
        email: false,
        password: false,

        any: function any() {
            return this.email || this.password;
        }
    });

    const validateEmail = () => {
        if (!/[\w.]+@[\w.]+.\w/.test(email)) {
            setValidationErrors({
                ...validationErrors,
                email: true
            });
            return;
        }

        setValidationErrors({
            ...validationErrors,
            email: false
        });
    }

    const handleSubmit = () => {
        if (validationErrors.any()) return;

        setToken(email);
        return <Redirect to='/' />
    }

    return (
        <div className='card container-column center-contents'>
            <h1 className='text-primary auth-header'>Welcome back!</h1>

            <form className='auth-page-form'>
                <label htmlFor='email' className='hint auth-label'>E-mail</label>
                <input name='email' type='text' className='auth-page-input-text' placeholder='name@example.com' value={email} onChange={e => setEmail(e.target.value)} onBlur={e => validateEmail()}/>

                <label htmlFor='password' className='hint auth-label'>Password</label>
                <input name='password' type='password' className='auth-page-input-text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

                <input type='button' className='auth-page-button' value='Sign in' onClick={handleSubmit}/>
                <span className='hint'>Don't have an account? <Link to='/register'>Sign up!</Link></span>
            </form>
        </div>
    )
}

export default Login;