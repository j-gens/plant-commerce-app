import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.css';


const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_TiscNZGKDRCBI5UZN244V2OB00FuezS7ND';
  const onToken = (token) => {
    console.log(token);
  }

  return (
    <StripeCheckout
      name='LOGO'
      description={`your total is $${price}`}
      image=''
      panelLabel='Pay Now'
      amount={priceForStripe}
      stripeKey={publicKey}
      shippingAddress
      billingAddress
      token={onToken}
    />
  );
};


export default StripeButton;
