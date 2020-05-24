import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../checkout-item/checkout-item.component.jsx';
import StripeButton from '../stripe-button/stripe-button.component.jsx';
import { cartItemsSelector, cartTotalCostSelector } from '../../redux/cart/cart.selectors.js';

import './checkout.styles.css';


const Checkout = ({ cartItems, totalCost }) => (
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
    {
      cartItems.map((item) =>
        <CheckoutItem key={item.id} item={item} />
      )
    }
    <div className="total-cost">
      <span>total: ${totalCost}</span>
    </div>
    <div className='test-warning'>
      **Please use the following test credit card for payments**
      <br />
      4242 4242 4242 4242
      <br />
      Exp: 01/21 - CVV: 123
    </div>
    <StripeButton price={totalCost} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector,
  totalCost: cartTotalCostSelector,
});


export default connect(mapStateToProps)(Checkout);
