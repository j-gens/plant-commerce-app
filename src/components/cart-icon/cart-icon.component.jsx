import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './cart-icon.styles.css';


const CartIcon = ({ toggleCartHidden, totalCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <span className="cart">CART({totalCount})</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  totalCount: cartItems.reduce((total, item) => total + item.quantity, 0),
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
