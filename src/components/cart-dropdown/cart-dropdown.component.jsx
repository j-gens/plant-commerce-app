import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import FormButton from '../form-button/form-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { cartItemsSelector } from '../../redux/cart/cart.selectors.js';

import './cart-dropdown.styles.css';


const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map((cartItem) =>
        <CartItem key={cartItem.id} item={cartItem} />
        )
        : (<span className="cart-empty">Your cart is empty.</span>)
      }
    </div>
    <FormButton onClick={() => history.push('/checkout')}>
      checkout
    </FormButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
});


export default withRouter(connect(mapStateToProps)(CartDropdown));
