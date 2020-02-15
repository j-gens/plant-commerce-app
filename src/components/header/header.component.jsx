import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';


const Header = () => (
  <div className="header-bin">
    <div className="header-logo">
      <Link to="/">LOGO</Link>
    </div>
    <div className="header-text">
      <Link to="/shop">SHOP</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  </div>
);


export default Header;
