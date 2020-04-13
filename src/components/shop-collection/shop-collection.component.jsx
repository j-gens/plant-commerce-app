import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '../shop-item/shop-item.component.jsx';
import { collectionSelector } from '../../redux/shop/shop.selectors.js';

import './shop-collection.styles.css';


const ShopCollection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="shop-collection-bin">
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className='shop-collection-items'>
        {
          items.map(item =>
            <ShopItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: collectionSelector(ownProps.match.params.collectionId)(state),
});


export default connect(mapStateToProps)(ShopCollection);
