import React from 'react';

import FormButton from '../form-button/form-button.component.jsx';
import './cart-dropdown.styles.css';


const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items">

    </div>
    <FormButton>
      checkout
    </FormButton>
  </div>
);


export default CartDropdown;
