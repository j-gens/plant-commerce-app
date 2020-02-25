import React from 'react';

import SignIn from '../sign-in/sign-in.component.jsx';
import SignUp from '../sign-up/sign-up.component.jsx';
import './signin-signup.styles.css';


const SignInSignUp = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);


export default SignInSignUp;
