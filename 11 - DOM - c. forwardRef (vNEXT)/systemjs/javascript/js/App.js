/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

import Greeting from './Greeting';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement(Greeting, { ref: this.myGreeting, name: 'World'});
  }
}
