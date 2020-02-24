import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component.jsx';
import HomeMenu from './components/home-menu/home-menu.component.jsx';
import ShopMenu from './components/shop-menu/shop-menu.component.jsx';
import SignInSignUp from './components/signin-signup/signin-signup.component.jsx';
import { auth, createUserProfileDoc } from './firebase/firebase.utils.js';

import './App.styles.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // if user is signed in - check if user is in db
      if (user) {
        const userReference = await createUserProfileDoc(user);
        // listen for document data changes
        userReference.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="homepage">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomeMenu} />
          <Route path="/shop" component={ShopMenu} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}


export default App;
