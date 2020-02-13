import React from 'react';

import ShopPreview from '../shop-preview/shop-preview.component.jsx';
import SHOP_DATA from '../../data/shopData.js';
import './shop-menu.styles.css';


class ShopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: SHOP_DATA
    }
  }

  render() {
    const { shopData } = this.state;
    return (
      <div>
        {shopData.map(({ id, ...otherShopProps }) =>
          <ShopPreview key={id} {...otherShopProps} />
        )}
      </div>
    )
  }
}


export default ShopMenu;