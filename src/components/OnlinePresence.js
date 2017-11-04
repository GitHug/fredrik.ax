import React, { Component } from 'react';
import github_logo from './external_logos/github-icon.svg';
import twitter_logo from './external_logos/Twitter_Logo_WhiteOnImage.svg';
import linkedin_logo from './external_logos/linkedin-logo.svg';
import hackerrank_logo from './external_logos/HackerRank_logo.svg';
import ImageLink from './ImageLink';
import './OnlinePresence.css';

class OnlinePresence extends Component {
  render() {
    return (
      <div className={'AppHeader-container'}>
        <ImageLink
          url={'https://github.com/GitHug'}
          image={github_logo}
          alt={'GitHub'}
        />
        <ImageLink
          url={'https://twitter.com/FredrikMakila'}
          image={twitter_logo}
          alt={'Twitter'}
        />
        <ImageLink
          url={'https://www.linkedin.com/in/fredrikmakila'}
          image={linkedin_logo}
          alt={'LinkedIn'}
        />
        <ImageLink
          url={'https://www.hackerrank.com/fredrik_makila'}
          image={hackerrank_logo}
          alt={'HackerRank'}
        />
      </div>
    );
  }
}

export default OnlinePresence;
