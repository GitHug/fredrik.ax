import React, { Component } from 'react';
import Intro from './intro/Intro';
import ButtonBar from './buttonbar/ButtonBar';

class Home extends Component {
  render() {
    return (
      <div>
        <div className={'row'}>
          <Intro />
        </div>
        <div className={'row'}>
          <ButtonBar />
        </div>
      </div>
    );
  }
}

export default Home;
