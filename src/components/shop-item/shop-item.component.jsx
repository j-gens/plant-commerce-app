import React from 'react';

import './shop-item.styles.css';


const ShopItem = ({ id, name, imageUrl, price }) => (
  <div className="shop-item-bin">
    <div className="shop-item-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="shop-item-text">
      <span className="item-name">{name}</span>
      <span className="item-price">${price}</span>
    </div>
  </div>
);


export default ShopItem;
