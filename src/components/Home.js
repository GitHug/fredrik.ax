import React, { Component } from 'react';
import Intro from './intro/Intro';
import ButtonBar from './buttonbar/ButtonBar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={'row'}>
        <div className={'col-sm-12'}>
          <div className={'card'}>
            <div className={'card-header'}>
              <ButtonBar />
            </div>
            <div className={'card-block'}>
              <Intro />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
