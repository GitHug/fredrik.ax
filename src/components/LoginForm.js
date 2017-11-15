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
    window.alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    const { value } = this.state;

    axios
      .post(
        (process.env.REACT_APP_BACKEND_HOST || 'http://localhost:8080') +
          '/login',
        { value }
      )
      .then(response => {
        console.log(response, 'Signature added!');
      })
      .catch(err => {
        console.log(err, 'Signature not added, try again');
      });
  };

  render() {
    return (
      <form className={'LoginForm'} onSubmit={this.onSubmit}>
        <div class="form-group">
          <label for="psw">Password</label>
          <input
            type="password"
            class="form-control"
            id="psw"
            placeholder="Password"
            value={this.state.value}
            onChange={this.onChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
