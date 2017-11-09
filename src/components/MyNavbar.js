import React, { Component } from 'react';
import OnlinePresence from './onlinepresence/OnlinePresence';

class Navbar extends Component {
  render() {
    return (
      <nav className={'navbar navbar-dark justify-content-between'}>
        <a className={'navbar-brand'} href={'#'}>
          <h1>
            Fredrik Mäkilä <small>Software Engineer.</small>
          </h1>
        </a>

        <OnlinePresence />
      </nav>
    );
  }
}

export default Navbar;
