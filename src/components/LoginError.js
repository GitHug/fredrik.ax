import React, { Component } from 'react';
import './LoginError.css';

class LoginError extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentWillReceiveProps(message) {
    this.setState({ message: message });
  }

  render() {
    return (
      <div className={'LoginError'}>
        <div className={'card alert alert-danger'} role={'alert'}>
          <div className={'card-block'}>
            <p>{this.props.message.msg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginError;
