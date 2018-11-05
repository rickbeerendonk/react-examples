/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.myH1 = React.createRef();
  }
  componentDidMount() {
    // this.myH1.current contains a reference to the real DOM node.
    this.myH1.current.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', { ref: this.myH1 }, 'Hello World!');
  }
}
