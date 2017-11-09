import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Secret from './components/Secret';
import MyNavbar from './components/MyNavbar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main className={'App container-fluid'}>
          <header>
            <MyNavbar />
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
