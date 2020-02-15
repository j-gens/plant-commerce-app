import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomeMenu from './components/home-menu/home-menu.component.jsx';
import ShopMenu from './components/shop-menu/shop-menu.component.jsx';
import SignInSignUp from './components/signin-signup/signin-signup.component.jsx';
import './App.styles.css';


const App = () => (
  <div className="homepage">
    <Header />
    <Switch>
      <Route exact path="/" component={HomeMenu} />
      <Route path="/shop" component={ShopMenu} />
      <Route path="/signin" component={SignInSignUp} />
    </Switch>
  </div>
)


export default App;
