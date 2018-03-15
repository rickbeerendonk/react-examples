/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* eslint react/prop-types:"off" */

import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.myH1 = React.createRef();
  }
  componentDidMount() {
    this.myH1.value.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return (
      <h1 ref={this.myH1}>Hello World!</h1>
    );
  }
}
