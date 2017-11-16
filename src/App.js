import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import AboutMe from './components/AboutMePage';
import Home from './components/HomePage';
import Secret from './components/LoginPage';
import MyNavbar from './components/MyNavbar';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <main className={'App container-fluid'}>
          <header>
            <MyNavbar />
          </header>
          <section className={'container'}>
            <div className={'row'}>
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
