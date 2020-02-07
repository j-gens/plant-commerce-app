import React from 'react';
import HomeMenuItem from '../home-menu-item/home-menu-item.component.jsx'
import './home-menu.styles.css'

const HomeMenu = (props) => (
  <div className="home-menu">
    {props.homeMenuList.map(menuItem =>
      <HomeMenuItem menuItem={menuItem} key={menuItem} />
    )}
  </div>
)

export default HomeMenu
