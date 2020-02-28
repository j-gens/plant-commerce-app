import React from 'react';
import { connect } from 'react-redux';

import { clearCartItem } from '../../redux/cart/cart.actions.js';

import './checkout-item.styles.css';


const CheckoutItem = ({ item, clearCartItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
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
        <span>${price}</span>
      </div>
      <div className="ch-item-block">
        <span className="ch-remove" onClick={() => clearCartItem(item)}>&#10005;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
