/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/no-string-refs: off */

class HelloWorld extends React.Component {
  componentDidMount() {
    this.refs.myH1.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', { ref: 'myH1' }, 'Hello World!');
  }
}

ReactDOM.render(
  React.createElement(React.StrictMode, null, React.createElement(HelloWorld)),
  document.getElementById('app')
);
