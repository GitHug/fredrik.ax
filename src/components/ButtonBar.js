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
            <Button
              content={
                <i className={'fa fa-space-shuttle'} aria-hidden="true" />
              }
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default ButtonBar;
