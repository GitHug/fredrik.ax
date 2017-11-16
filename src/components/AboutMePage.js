import React, { Component } from 'react';
import ButtonBar from './buttonbar/ButtonBar';
import './AboutMePage.css';

class AboutMe extends Component {
  render() {
    return (
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <div className={'card page-card'}>
            <div className={'card-header'}>
              <ButtonBar />
            </div>
            <div className={'card-block'}>
              <h2>About me</h2>
              <p>♥ Java ♥ JavaScript ♥ React ♥ Node.JS ♥</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
