import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopItem from '../shop-item/shop-item.component.jsx';
import {  } from '../../redux/shop/shop.selectors.js';

import './shop-collection.styles.css';


const ShopCollection= () => (
  <div>

  </div>
);

const mapStateToProps = createStructuredSelector({

})


export default connect(mapStateToProps)(ShopCollection);
