import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import { auth } from '../../firebase/firebase.utils.js';
import currentUserSelector from '../../redux/user/user.selectors.js';
import { hiddenCartSelector } from '../../redux/cart/cart.selectors.js';

import './header.styles.css';


const Header = ({ currentUser, isHidden }) => (
  <div className="header-bin">
    <div className="header-logo">
      <Link to="/">Plantology</Link>
    </div>
    <div className="header-options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {isHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
  isHidden: hiddenCartSelector,
});


export default connect(mapStateToProps)(Header);
