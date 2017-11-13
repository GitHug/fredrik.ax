import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    window.alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className={'LoginForm'} onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="psw">Password</label>
          <input
            type="password"
            class="form-control"
            id="psw"
            placeholder="Password"
            value={this.state.value}
            onChange={this.handleChange}
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
