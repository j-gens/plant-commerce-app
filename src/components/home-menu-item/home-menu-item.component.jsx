import React from 'react';
import './home-menu-item.styles.css'

const HomeMenuItem = ({ title, size, imageUrl }) => (
  <div className={`home-menu-item ${size}`}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default HomeMenuItem;
