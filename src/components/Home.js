import React, { Component } from 'react';
import Intro from './intro/Intro';
import ButtonBar from './buttonbar/ButtonBar';

class Home extends Component {
  render() {
    return (
      <div className={'Home-container'}>
        <Intro />
        <ButtonBar />
      </div>
    );
  }
}

export default Home;
