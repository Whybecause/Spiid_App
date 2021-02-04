import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavMenu from './components/NavMenu'
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <NavMenu component={NavMenu} />
    <Switch>
      <Home exact path ="/" component={Home}/>
      {/* <Login exact path="/login" component={Login}/>
      <Route path="/vehicule/:id" component={Vehicule} />
    <Route path="/user/:id" component={Profile}/> */}
    </Switch>
    <Footer component={Footer} />
    </BrowserRouter>
  );
}

export default App;
