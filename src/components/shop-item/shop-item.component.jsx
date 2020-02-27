import React from 'react';
import { connect } from 'react-redux';

import FormButton from '../form-button/form-button.component.jsx';
import { addCartItem } from '../../redux/cart/cart.actions.js';

import './shop-item.styles.css';


const ShopItem = ({ item, addCartItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="shop-item-bin">
      <div className="shop-item-image" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="shop-item-text">
        <span className="item-name">{name.toUpperCase()}</span>
        <span className="item-price">${price}</span>
      </div>
      <FormButton inverted onClick={() => addCartItem(item)}>add to cart</FormButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});


export default connect(null, mapDispatchToProps)(ShopItem);
