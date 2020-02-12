import React from 'react';

import HomeMenuItem from '../home-menu-item/home-menu-item.component.jsx'
import './home-menu.styles.css'


class HomeMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      homeMenu: [
        {id: 1, title: 'hats', imageUrl: 'pug-background.jpg' , size: '', linkUrl: 'hats'},
        {id: 2, title: 'jackets', imageUrl: 'pug-background.jpg', size: '', linkUrl: 'jackets'},
        {id: 3, title: 'sneakers', imageUrl: 'pug-background.jpg', size: '', linkUrl: 'sneakers'},
        {id: 4, title: 'womens', imageUrl: 'pug-background.jpg', size: 'large', linkUrl: 'womens'},
        {id: 5, title: 'mens', imageUrl: 'pug-background.jpg', size: 'large', linkUrl: 'mens'}
      ]
    }
  }

  render() {
    return(
      <div className="home-menu">
        {this.state.homeMenu.map(({ id, ...otherHomeMenuProps }) =>
          <HomeMenuItem key={id} {...otherHomeMenuProps} />
        )}
      </div>
    )
  }
}


export default HomeMenu
