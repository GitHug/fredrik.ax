import React, { Component } from 'react';
import ButtonBar from './buttonbar/ButtonBar';
import './LoginPage.css';
import LoginForm from './LoginForm';
import LoginError from './LoginError';

class Secret extends Component {
  render() {
    return (
      <div className={'LoginPage'}>
        <div className={'row'}>
          <div className={'col-sm-12'}>
            <div className={'card page-card'}>
              <div className={'card-header'}>
                <ButtonBar />
              </div>
              <div className={'card-block'}>
                <LoginForm />
                <LoginError />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
