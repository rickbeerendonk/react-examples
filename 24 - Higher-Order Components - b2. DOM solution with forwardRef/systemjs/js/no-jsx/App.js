/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import React from 'react';

import GreetingWithExtras from './GreetingWithExtras';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hi <u>React</u>!!!';
  }
  render() {
    return React.createElement(GreetingWithExtras, {
      ref: this.myGreeting,
      name: 'World <- Should be replaced'
    });
  }
}

export default App;
