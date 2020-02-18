import React from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import FormButton from '../form-button/form-button.component.jsx';
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

  handleSubmit = e => preventDefault();

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>

          <FormInput
            required
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          <FormInput
            required
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          <FormButton type="submit">
            sign in
          </FormButton>
        </form>

      </div>
    );
  }
}


export default SignIn;
