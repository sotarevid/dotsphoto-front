import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function AuthPage({setToken}) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login'>
                    <Login setToken={setToken}/>
                </Route>
                <Route path='/register'>
                    <Register setToken={setToken}/>
                </Route>
                <Route path='/*'>
                    <Redirect to='/login' />
                </Route>
            </Switch>
        </BrowserRouter>
)
}

export default AuthPage;