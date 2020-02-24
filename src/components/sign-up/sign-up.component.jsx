import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import FormButton from '../form-button/form-button.component.jsx';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils.js';

import './sign-up.styles.css';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-up">
        <h2>I need to create an account</h2>
        <span>sign up with an email and password</span>
        <FormInput
          name="displayName"
          type="name"
          value={this.state.displayName}
          handleChange={this.handleChange}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={this.state.email}
          handleChange={this.handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={this.state.password}
          handleChange={this.handleChange}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={this.state.confirmPassword}
          handleChange={this.handleChange}
          label="Confirm Password"
          required
        />
        <FormButton type="submit">
          sign up
        </FormButton>
      </div>
    );
  }
}


export default SignUp;