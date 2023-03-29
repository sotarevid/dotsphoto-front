import React from 'react'
import Error from "./Error";

function NotFound() {
    return (
        <Error errorCode='404' errorMessage='The page you were looking for could not be found.'/>
    )
}

export default NotFound