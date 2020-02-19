import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils.js';

import './header.styles.css';


const Header = ({ currentUser }) => (
  <div className="header-bin">
    <div className="header-logo">
      <Link to="/">LOGO</Link>
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
    </div>
  </div>
);


export default Header;
