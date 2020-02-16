import React from 'react';

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
      <div className="form">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input required name="email" type="email" value={this.state.email} onChange={this.handleChange} />
          <label>Email</label>
          <input required name="password" type="password" value={this.state.password} onChange={this.handleChange} />
          <label>Password</label>
          <input type="submit" value="submit me" />
        </form>

      </div>
    );
  }
}


export default SignIn;
