import React, { Component } from 'react';
import ButtonBar from './buttonbar/ButtonBar';
import './Login.css';
import LoginForm from './LoginForm';

class Secret extends Component {
  render() {
    return (
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <div className={'card page-card'}>
            <div className={'card-header'}>
              <ButtonBar />
            </div>
            <div className={'card-block'}>
              <div className={'card login-card'}>
                <div className={'card-block'}>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
