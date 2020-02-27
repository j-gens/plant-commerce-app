import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormButton from '../form-button/form-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { cartItemsSelector } from '../../redux/cart/cart.selectors.js';

import './cart-dropdown.styles.css';


const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) =>
        <CartItem key={cartItem.id} item={cartItem} />
      )}
    </div>
    <FormButton>
      checkout
    </FormButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});


export default connect(mapStateToProps)(CartDropdown);
