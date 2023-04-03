import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom";

function Register({setToken}) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [password, setPassword] = useState('');

    const [validationErrors, setValidationErrors] = useState({
       firstName: false,
       lastName: false,
       patronymic: false,
       email: false,
       password: false,

       any: function any() {
           return this.firstName || this.lastName || this.patronymic || this.email || this.password;
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
            <h1 className='text-primary auth-header'>Welcome!</h1>
            <form className='auth-page-form'>
                <label htmlFor='first' className='hint auth-label'>First name</label>
                <input name='first' type='text' className='auth-page-input-text' placeholder='Egor' value={firstName} onChange={e => setFirstName(e.target.value)}/>

                <label htmlFor='last' className='hint auth-label'>Last name</label>
                <input name='last' type='text' className='auth-page-input-text' placeholder='Egorov' value={lastName} onChange={e => setLastName(e.target.value)}/>

                <label htmlFor='patronymic' className='hint auth-label'>Patronymic (if you have one)</label>
                <input name='patronymic' type='text' className='auth-page-input-text' placeholder='Egorovich' value={patronymic} onChange={e => setPatronymic(e.target.value)}/>


                <label htmlFor='email' className='hint auth-label'>E-mail</label>
                <input name='email' type='text' className='auth-page-input-text' placeholder='name@example.com' value={email} onChange={e => setEmail(e.target.value)} onBlur={e => validateEmail()}/>

                <label htmlFor='password' className='hint auth-label'>Password</label>
                <input name='password' type='password' className='auth-page-input-text' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>

                <input type='button' className='auth-page-button' value='Sign up' onClick={handleSubmit}/>
                <span className='hint'>Already have an account? <Link to='/login'>Sign in!</Link></span>
            </form>
        </div>
    )
}

export default Register;