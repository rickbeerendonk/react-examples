/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/no-find-dom-node:"off" */

class HelloWorld extends React.Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this).innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
