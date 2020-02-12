import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeMenu from './components/home-menu/home-menu.component.jsx';
import './App.styles.css';


const App = () => (
  <div className="homepage">
    <Switch>
      <Route exact path="/" component={HomeMenu} />
    </Switch>
  </div>
)


export default App;
