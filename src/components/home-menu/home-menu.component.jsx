import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomeMenuItem from '../home-menu-item/home-menu-item.component.jsx';
import sectionsSelector from '../../redux/home-menu/home-menu.selectors.js';

import './home-menu.styles.css';


const HomeMenu = ({ sections }) => (
  <div className="home-menu">
    {sections.map(({ id, ...otherSectionProps }) =>
      <HomeMenuItem key={id} {...otherSectionProps} />
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: sectionsSelector,
})


export default connect(mapStateToProps)(HomeMenu);
