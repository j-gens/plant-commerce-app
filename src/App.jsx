import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component.jsx';
import HomeMenu from './components/home-menu/home-menu.component.jsx';
import ShopMenu from './components/shop-menu/shop-menu.component.jsx';
import SignInSignUp from './components/signin-signup/signin-signup.component.jsx';
import { auth, createUserProfileDoc } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';

import './App.styles.css';


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthObj => {
      // if user is signed in [not null] check if user is in db
      if (userAuthObj) {
        // check if the snapshot has changed
        const userReference = await createUserProfileDoc(userAuthObj);
        // listen for document data changes -- like .onAuthStateChanged()
        userReference.onSnapshot(snapShot => {
          // expect displayName, email, and createdAt properties in .data()
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuthObj);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="homepage">
        <Header />
        <Switch>
          <Route exact path="/" component={HomeMenu} />
          <Route path="/shop" component={ShopMenu} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(null, mapDispatchToProps)(App);
