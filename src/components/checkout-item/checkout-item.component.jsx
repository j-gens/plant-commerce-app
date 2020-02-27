import React from 'react';

import './checkout-item.styles.css';


const CheckoutItem = ({ item: { imageUrl, name, price, quantity }}) => (
  <div className="checkout-item-bin">
    <div className="ch-item-block">
      <img src={imageUrl} alt={name} />
    </div>
    <div className="ch-item-block">
      <span>{name}</span>
    </div>
    <div className="ch-item-block">
      <span>{quantity}</span>
    </div>
    <div className="ch-item-block">
      <span>${price * quantity}</span>
    </div>
    <div className="ch-item-block">
      <span>&#10005;</span>
    </div>
  </div>
);


export default CheckoutItem;
