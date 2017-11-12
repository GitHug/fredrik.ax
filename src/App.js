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
            <div className={'row w-100'}>
              <div className={'col'}>
                <Route exact path={'/'} component={Home} />
                <Route path={'/about-me'} component={AboutMe} />
                <Route path={'/login'} component={Secret} />
              </div>
            </div>
          </section>
        </main>
      </HashRouter>
    );
  }
}

export default App;
