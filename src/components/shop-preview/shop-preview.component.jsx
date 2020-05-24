import React from 'react';

import ShopItem from '../shop-item/shop-item.component.jsx';

import './shop-preview.styles.css';


const ShopPreview = ({ title, items }) => (
  <div className="preview-bin">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map((item) =>
          <ShopItem key={item.id} item={item} />
      )}
    </div>
  </div>
);


export default ShopPreview;
