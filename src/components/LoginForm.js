import React, { Component } from 'react';
import './LoginForm.css';
import axios from 'axios';
import LoginError from './LoginError';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.response = { status: '', msg: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    let { value } = this.state;

    let self = this;
    axios
      .post('https://fredrikapi.herokuapp.com/login', { value })
      .then(response => {
        console.log(response, 'Login success!');
      })
      .catch(err => {
        self.response = err.response.data;
        self.setState({ response: self.response });
      });
  };

  render() {
    return (
      <div className={'LoginForm'}>
        <div className={'card login-card'}>
          <div className={'card-block'}>
            <form onSubmit={this.onSubmit}>
              <div className={'form-group'}>
                <label htmlFor={'psw'}>Password</label>
                <input
                  type="password"
                  className={'form-control'}
                  id="psw"
                  placeholder="Password"
                  value={this.state.value}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className={'btn btn-primary'}>
                Submit
              </button>
            </form>
          </div>
        </div>
        {!this.response.msg || <LoginError message={this.response} />}
      </div>
    );
  }
}

export default LoginForm;
