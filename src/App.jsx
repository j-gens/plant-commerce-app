import React from 'react';
import HomeMenu from './components/home-menu/home-menu.component.jsx';
import './App.styles.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeMenuList: ['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS']
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
