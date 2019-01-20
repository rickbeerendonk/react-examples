/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

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
    return <Greeting ref={this.myGreeting} name="World" />;
  }
}
