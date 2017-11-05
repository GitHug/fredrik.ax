import React, { Component } from 'react';
import GitHubLogo from './external_logos/GitHubLogo';
import HackerRankLogo from './external_logos/HackerRankLogo';
import TwitterLogo from './external_logos/TwitterLogo';
import LinkedInLogo from './external_logos/LinkedInLogo';
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
