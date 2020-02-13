import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomeMenu from './components/home-menu/home-menu.component.jsx';
import ShopMenu from './components/shop-menu/shop-menu.component.jsx';
import './App.styles.css';


const App = () => (
  <div className="homepage">
    <Header />
    <Switch>
      <Route exact path="/" component={HomeMenu} />
      <Route path="/shop" component={ShopMenu} />
    </Switch>
  </div>
)


export default App;
