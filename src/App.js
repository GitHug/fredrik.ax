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
        <main className="App">
          <header>
            <OnlinePresence />
          </header>
          <section className={'App-container'}>
            <div className={'App-grid'}>
              <div className={'column-left'}>
                <Home />
              </div>
              <div className={'column-right'}>
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
