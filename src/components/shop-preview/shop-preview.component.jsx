import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import ShopItem from '../shop-item/shop-item.component.jsx';

import './shop-preview.styles.css';


const ShopPreview = ({ title, items }) => {
  const { url } = useRouteMatch();
  return (
    <div className="preview-bin">
      <Link to={`${url}/${title.toLowerCase()}`}>
        <h1 className="title">
          {title.toUpperCase()}
        </h1>
      </Link>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) =>
            <ShopItem key={item.id} item={item} />
        )}
      </div>
    </div>
  );
}


export default ShopPreview;
