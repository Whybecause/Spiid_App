import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavMenu from './components/NavMenu';
import Home from './components/Home';
import Vehicule from './components/Vehicule';
import Login from './components/Login';
import Profile from './components/User';
import Welcome from './components/Welcome';



function App() {
  return (
    <BrowserRouter>
    <NavMenu component={NavMenu} />
    <Switch>
      <Home exact path ="/" component={Home}/>
      <Login exact path="/login" component={Login}/>
      <Route path="/vehicule/:id" component={Vehicule} />
      <Route path="/user/:id" component={Profile}/>
      <Route exact patch ="/welcome" component={Welcome} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
