import React from 'react';
import HomeMenu from './components/home-menu/home-menu.component.jsx';
import './App.styles.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeMenuList: [
        {id: 1, title: 'HATS', imageUrl: 'pug-background.jpg' , size: ''},
        {id: 2, title: 'JACKETS', imageUrl: 'pug-background.jpg', size: ''},
        {id: 3, title: 'SNEAKERS', imageUrl: 'pug-background.jpg', size: ''},
        {id: 4, title: 'WOMENS', imageUrl: 'pug-background.jpg', size: 'large'},
        {id: 5, title: 'MENS', imageUrl: 'pug-background.jpg', size: 'large'}
      ]
    }
  }

  render() {
    return (
      <div className="homepage">
        <HomeMenu homeMenuList={this.state.homeMenuList} />
      </div>
    )
  }
}

export default App;
