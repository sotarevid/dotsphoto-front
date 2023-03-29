import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import NotFound from "./Error/NotFound";
import Header from "./Header/Header";
import Gallery from "./Gallery/Gallery";
import Footer from "./Footer/Footer";

function App({logout}) {
  return (
      <div className='flex-wrapper'>
          <Header logout={logout}/>

          <div className='container center-self fill'>
              <BrowserRouter>
                  <Switch>
                      <Route path='/' exact>
                          <Gallery />
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
              </BrowserRouter>
          </div>

          <Footer />
      </div>



  );
}

export default App;
