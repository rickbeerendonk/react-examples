/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2016 Rick Beerendonk   !*/

/* global React, ReactDOM */

class HelloWorld extends React.Component {
  componentDidMount() {
    this.myH1.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', { ref: ref => this.myH1 = ref }, 'Hello World!');
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
);
