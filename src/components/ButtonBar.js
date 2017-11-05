import React, { Component } from 'react';
import Button from './MyButton';
import './ButtonBar.css';

class ButtonBar extends Component {
  render() {
    return (
      <nav className={'ButtonBar'}>
        <ul>
          <li>
            <Button content={'ABOUT ME'} />
          </li>
          <li>
            <Button buttonClass={'hvr-icon-spin'} />
          </li>
        </ul>
      </nav>
    );
  }
}

export default ButtonBar;
