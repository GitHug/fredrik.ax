import React, { Component } from 'react';
import './App.css';
import OnlinePresence from './components/OnlinePresence';
import Intro from './components/Intro';
import Button from './components/MyButton';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <OnlinePresence />
        </header>
        <body className={'App-container'}>
          <section>
            <Intro />
            <Button />
          </section>
        </body>
      </main>
    );
  }
}

export default App;
