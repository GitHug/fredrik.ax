import React, { Component } from 'react';
import './App.css';
import OnlinePresence from './components/OnlinePresence';
import Intro from './components/Intro';
import ButtonBar from './components/ButtonBar';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <OnlinePresence />
        </header>
        <section className={'App-container'}>
          <div>
            <Intro />
            <ButtonBar />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
