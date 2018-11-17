/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

import React from 'react';

export default class HelloWorld extends React.Component {
  componentDidMount() {
    this.myH1.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return <h1 ref={ref => (this.myH1 = ref)}>Hello World!</h1>;
  }
}
