import React, { Component } from 'react';
import Intro from './intro/Intro';
import ButtonBar from './buttonbar/ButtonBar';
import './HomePage.css';
import AboutMe from './AboutMe';

class Home extends Component {
  render() {
    return (
      <div className={'HomePage'}>
        <div className={'row'}>
          <div className={'col-sm-12'}>
            <div className={'card page-card'}>
              <div className={'card-header'}>
                <ButtonBar />
              </div>
              <div className={'card-block'}>
                <div className={'row'}>
                  <div className={'col-sm-6'}>
                    <Intro />
                  </div>
                  <div className={'col-sm-6'}>
                    <AboutMe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
