import React from 'react';
import './home-menu-item.styles.css'

const HomeMenuItem = (props) => (
  <div className="home-menu-item">
    <div className="content">
      <h1 className="title">{props.menuItem}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default HomeMenuItem;
