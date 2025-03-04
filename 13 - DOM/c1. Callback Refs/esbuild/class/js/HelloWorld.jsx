/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

import { Component } from 'react';

class HelloWorld extends Component {
  componentDidMount() {
    this.myH1.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <h1 ref={ref => (this.myH1 = ref)}>Hello World!</h1>;
  }
}

export default HelloWorld;
