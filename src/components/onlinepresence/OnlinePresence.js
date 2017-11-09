import React, { Component } from 'react';
import GitHubLogo from './logos/GitHubLogo';
import HackerRankLogo from './logos/HackerRankLogo';
import TwitterLogo from './logos/TwitterLogo';
import LinkedInLogo from './logos/LinkedInLogo';
import './OnlinePresence.css';

class OnlinePresence extends Component {
  render() {
    return (
      <div className={'OnlinePresence-container'}>
        <LinkedInLogo />
        <GitHubLogo />
        <HackerRankLogo />
        <TwitterLogo />
      </div>
    );
  }
}

export default OnlinePresence;
