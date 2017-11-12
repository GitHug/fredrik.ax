import React, { Component } from 'react';
import ButtonBar from './buttonbar/ButtonBar';
import './Login.css';

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
              <form>
                <div className={'card login-card w-50'}>
                  <div className={'card-block'}>
                    <div className={'input-group'}>
                      <input
                        type={'password'}
                        className={'form-control'}
                        placeholder={'Password'}
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-secondary" type="button">
                          Submit
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Secret;
