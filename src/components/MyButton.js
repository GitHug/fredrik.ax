import React, { Component } from 'react';
import './MyButton.css';

class MyButton extends Component {
  render() {
    return (
      <div className={'MyButton'}>
        <button className={this.props.buttonClass}>{this.props.content}</button>
      </div>
    );
  }
}

export default MyButton;
