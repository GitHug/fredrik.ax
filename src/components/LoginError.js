import React, { Component } from 'react';
import './LoginError.css';

class LoginError extends Component {
  render() {
    return (
      <div className={'LoginError'}>
        <div className={'card login-card alert alert-warning'}>
          <div className={'card-block'}>
            <p>HEJ HEJ</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginError;
