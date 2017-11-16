import React, { Component } from 'react';
import Intro from './intro/Intro';
import ButtonBar from './buttonbar/ButtonBar';
import './HomePage.css';

class Home extends Component {
  render() {
    return (
      <div className={'HomePage'}>
        <div className={'row'}>
          <div className={'col-sm-12'}>
            <div className={'card page-card'}>
              <div className={'card-header'}>
                <ButtonBar />
              </div>
              <div className={'card-block'}>
                <Intro />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
