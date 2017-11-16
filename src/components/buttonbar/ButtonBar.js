import React, { Component } from 'react';
import Button from '../mybutton/MyButton';

class ButtonBar extends Component {
  render() {
    return (
      <nav className={'navbar navbar-light'}>
        <form className={'form-inline'}>
          <div className={'pr-2'}>
            <Button
              page={'/'}
              content={<i className={'fa fa-home'} aria-hidden="true" />}
            />
          </div>
          <div className={'pr-2'}>
            <Button page={'/about-me'} content={'About me'} />
          </div>
          <div>
            <Button
              page={'/login'}
              content={
                <i className={'fa fa-space-shuttle'} aria-hidden="true" />
              }
            />
          </div>
        </form>
      </nav>
    );
  }
}

export default ButtonBar;
