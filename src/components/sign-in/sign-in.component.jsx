import React from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });

    console.log(event);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput type='email' name='email' id='email' value={this.state.email} handleChange={this.handleChange} label='email' required />

          <FormInput type='password' name='password' id='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
          {/* <label htmlFor='password'>Email</label> */}

          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default SignIn;
