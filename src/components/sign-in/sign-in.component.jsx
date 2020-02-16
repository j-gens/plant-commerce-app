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

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="form">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <input required name="email" value={this.state.email} onChange={this.handleChange}></input>
          <label>Email</label>
          <input required name="password" value={this.state.password} onChange={this.handleChange}></input>
          <label>Password</label>
        </form>
      </div>
    );
  }
}


export default SignIn;
