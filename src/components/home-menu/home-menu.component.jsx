import React from 'react';
import HomeMenuItem from '../home-menu-item/home-menu-item.component.jsx'
import './home-menu.styles.css'

const HomeMenu = ({ homeMenuList }) => (
  <div className="home-menu">
    {homeMenuList.map(({ id, title, size, imageUrl }) =>
      <HomeMenuItem key={id} title={title} size={size} imageUrl={imageUrl} />
    )}
  </div>
)

export default HomeMenu
