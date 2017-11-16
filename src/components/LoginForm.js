import React, { Component } from 'react';
import './LoginForm.css';
import axios from 'axios';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const { value } = this.state;

    axios
      .post('https://fredrikapi.herokuapp.com/login', { value })
      .then(response => {
        console.log(response, 'Login success!');
      })
      .catch(err => {
        console.log(err, 'Failed');
        this.error = true;
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
      </div>
    );
  }
}

export default LoginForm;
