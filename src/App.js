import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar/Sidebar";
import {useKeycloak} from "@react-keycloak/web";

function App({logout}) {

    const {keycloak} = useKeycloak();

    const [check, setCheck] = useState(false)

    const checkUser = (token) => {
        fetch(process.env.REACT_APP_RESOURCE_URL + '/user/check', {
            method: 'GET',
            headers: { 'Origin': window.location.origin.toString(), 'Authorization': 'Bearer ' + token }
        }).then(response => {
            return response.json()
        }).then(data => {
            setCheck(data !== null && data !== undefined)
        })
    }

    useEffect(() => {checkUser(keycloak.token)})


    return (check &&
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className='flex-wrapper'>
                <Header logout={logout}/>

                <div className='container-row center-self fill'>
                    <Sidebar logout={keycloak.logout}/>

                    <Switch>
                        <Route path='/' exact>
                            <Gallery/>
                        </Route>
                        <Route path='/albums' exact>
                            <Gallery/>
                        </Route>
                        {/*<Route path='/login'>*/}
                        {/*    <Redirect to='/'/>*/}
                        {/*</Route>*/}
                        {/*<Route path='/*'>*/}
                        {/*    <NotFound/>*/}
                        {/*</Route>*/}
                    </Switch>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
