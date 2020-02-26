import React from 'react';

import FormButton from '../form-button/form-button.component.jsx';
import './shop-item.styles.css';


const ShopItem = ({ id, name, imageUrl, price }) => (
  <div className="shop-item-bin">
    <div className="shop-item-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
    <div className="shop-item-text">
      <span className="item-name">{name.toUpperCase()}</span>
      <span className="item-price">${price}</span>
    </div>
    <FormButton inverted>add to cart</FormButton>
  </div>
);


export default ShopItem;
