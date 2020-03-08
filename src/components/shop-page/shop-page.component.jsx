import React from 'react';
import { Route } from 'react-router-dom';

import ShopMenu from '../shop-menu/shop-menu.component.jsx';
import ShopCollection from '../shop-collection/shop-collection.component.jsx';

import './shop-page.styles.css';


const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ShopMenu} />
    <Route path={`${match.path}/:collectionId`} component={ShopCollection} />
  </div>
);


export default ShopPage;
