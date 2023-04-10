import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NotFound from "./Error/NotFound";
import Header from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";

function App({logout}) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className='flex-wrapper'>
                <Header logout={logout}/>

                <div className='container-row center-self fill'>
                    <Sidebar logout={logout}/>

                    <Switch>
                        <Route path='/' exact>
                            <Gallery/>
                        </Route>
                        <Route path='/albums' exact>
                            <Gallery/>
                        </Route>
                        <Route path='/login'>
                            <Redirect to='/'/>
                        </Route>
                        <Route path='/register'>
                            <Redirect to='/'/>
                        </Route>
                        <Route path='/*'>
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
