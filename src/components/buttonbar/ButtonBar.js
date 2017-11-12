import React, { Component } from 'react';
import Button from '../mybutton/MyButton';
import './ButtonBar.css';

class ButtonBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light">
        <form class="form-inline">
          <form class="form-inline">
            <Button
              page={'/'}
              content={<i class="fa fa-home" aria-hidden="true" />}
            />
            <Button page={'/about-me'} content={'About me'} />
            <Button
              page={'/login'}
              content={
                <i className={'fa fa-space-shuttle'} aria-hidden="true" />
              }
            />
          </form>
        </form>
      </nav>
    );
  }
}

export default ButtonBar;
