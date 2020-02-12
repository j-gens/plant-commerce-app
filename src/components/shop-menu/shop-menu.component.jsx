import React from 'react';

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
    return (
      <div>
        SHOP PAGE
      </div>
    )
  }
}


export default ShopMenu;