import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import FormButton from '../form-button/form-button.component.jsx';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils.js';

import './sign-up.styles.css';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}


export default SignUp;