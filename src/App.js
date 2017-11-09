import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import OnlinePresence from './components/onlinepresence/OnlinePresence';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Secret from './components/Secret';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main className={'App container-fluid'}>
          <header>
            <OnlinePresence />
          </header>
          <section className={'App-container container'}>
            <div className={'row'}>
              <div className={'col'}>
                <Home />
              </div>
              <div className={'col'}>
                <Route path={'/about-me'} component={AboutMe} />
                <Route path={'/secret'} component={Secret} />
              </div>
            </div>
          </section>
        </main>
      </HashRouter>
    );
  }
}

export default App;
