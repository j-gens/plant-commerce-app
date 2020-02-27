import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartItemsSelector } from '../../redux/cart/cart.selectors.js';

import './checkout.styles.css';


const Checkout = () => (
  <div className="checkout-bin">
    <div className="checkout-header">
      <div className="ch-header-text">
        <span>Product</span>
      </div>
      <div className="ch-header-text">
        <span>Description</span>
      </div>
      <div className="ch-header-text">
        <span>Quantity</span>
      </div>
      <div className="ch-header-text">
        <span>Price</span>
      </div>
      <div className="ch-header-text">
        <span>Remove</span>
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});


export default connect(mapStateToProps)(Checkout);
