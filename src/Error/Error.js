import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

function Error({errorCode, errorMessage}) {
    return (
        <div className='error-container'>
            <h1 className='text-primary error-code'>{errorCode}</h1>
            <span className='error-message'>{errorMessage}</span>
            <Link className='error-message' to='/'>Return home.</Link>
        </div>
    )
}

export default Error