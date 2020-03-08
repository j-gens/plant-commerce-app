import React from 'react';
import { Route } from 'react-router-dom';

import ShopMenu from '../shop-menu/shop-menu.component.jsx';
import ShopCategory from '../shop-category/shop-category.component.jsx';

import './shop-page.styles.css';


const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ShopMenu} />
    <Route path={`${match.path}/:categoryId`} component={ShopCategory} />
  </div>
);


export default ShopPage;
