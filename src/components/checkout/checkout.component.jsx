import React from 'react';

import './checkout.styles.css';


const Checkout = () => (
  <div className="checkout-bin">
    <div className="checkout-header">
      <div className="header-text">
        <span>Product</span>
      </div>
      <div className="header-text">
        <span>Description</span>
      </div>
      <div className="header-text">
        <span>Quantity</span>
      </div>
      <div className="header-text">
        <span>Price</span>
      </div>
      <div className="header-text">
        <span>Remove</span>
      </div>
    </div>
  </div>
);


export default Checkout;
