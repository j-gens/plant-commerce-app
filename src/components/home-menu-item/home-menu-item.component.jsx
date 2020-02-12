import React from 'react';
import { withRouter } from 'react-router-dom';

import './home-menu-item.styles.css'

const HomeMenuItem = ({ title, size, imageUrl, linkUrl, match }) => (
  <div className={`home-menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default withRouter(HomeMenuItem);
