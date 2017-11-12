import React, { Component } from 'react';
import Button from '../mybutton/MyButton';
import './ButtonBar.css';

class ButtonBar extends Component {
  render() {
    return (
      <nav className={'ButtonBar btn-group'}>
        <ul>
          <li>
            <Button
              page={'/'}
              content={<i class="fa fa-home" aria-hidden="true" />}
            />
          </li>
          <li>
            <Button page={'/about-me'} content={'ABOUT ME'} />
          </li>
          <li>
            <Button
              page={'/secret'}
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
