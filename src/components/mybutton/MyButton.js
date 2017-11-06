import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MyButton.css';

class MyButton extends Component {
  render() {
    return (
      <div className={'MyButton'}>
        <NavLink to={this.props.page}>{this.props.content}</NavLink>
      </div>
    );
  }
}

export default MyButton;
