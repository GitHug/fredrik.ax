import React, { Component } from 'react';
import './MyButton.css';

class MyButton extends Component {
  render() {
    return (
      <div className={'MyButton'}>
        <button>{this.props.name}</button>
      </div>
    );
  }
}

export default MyButton;
