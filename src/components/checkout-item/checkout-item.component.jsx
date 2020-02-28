import React from 'react';
import { connect } from 'react-redux';

import { clearCartItem, removeCartItem, addCartItem } from '../../redux/cart/cart.actions.js';

import './checkout-item.styles.css';


const CheckoutItem = ({ item, clearCartItem, addCartItem, removeCartItem }) => {
  const { imageUrl, name, price, quantity } = item;
  return (
    <div className="checkout-item-bin">
      <div className="ch-item-block">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="ch-item-block">
        {name}
      </div>
      <div className="ch-item-block quantity">
        <div className="change-quantity" onClick={() => removeCartItem(item)}>&#10096;</div>
        {quantity}
        <div className="change-quantity" onClick={() => addCartItem(item)}>&#10097;</div>
      </div>
      <div className="ch-item-block">
        ${price}
      </div>
      <div className="ch-item-block remove" onClick={() => clearCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (item) => dispatch(clearCartItem(item)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});


export default connect(null, mapDispatchToProps)(CheckoutItem);
