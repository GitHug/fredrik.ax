import React, { Component } from 'react';
import ButtonBar from './buttonbar/ButtonBar';

class Secret extends Component {
  render() {
    return (
      <div className={'card w-'}>
        <div className={'card-header'}>
          <ButtonBar />
        </div>
        <div className={'card-block'}>
          <div>Shhhh</div>
        </div>
      </div>
    );
  }
}

export default Secret;
