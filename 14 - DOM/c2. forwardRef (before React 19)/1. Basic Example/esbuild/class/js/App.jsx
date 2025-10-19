/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component, createRef } from 'react';

import Greeting from './Greeting.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.myGreeting = createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <Greeting ref={this.myGreeting} name="World" />;
  }
}
