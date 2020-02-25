import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import FormButton from '../form-button/form-button.component.jsx';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.css';


class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <FormButton type="submit">
              sign in
            </FormButton>
            <FormButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </FormButton>
          </div>
        </form>
      </div>
    );
  }
}


export default SignIn;
