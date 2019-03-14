import React, { Component } from 'react';
import Greeting from './Greeting';
import ClickMe from './ClickMe';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="World" />
        <hr />
        <ClickMe />
      </div>
    );
  }
}

export default App;
