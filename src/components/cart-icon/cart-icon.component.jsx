import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { cartItemCountSelector } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-icon.styles.css';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <span className="cart">CART({itemCount})</span>
  </div>
);

const mapStateToProps = (state) => createStructuredSelector({
  itemCount: cartItemCountSelector,
})

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
