/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.myH1 = React.createRef();
  }
  componentDidMount() {
    this.myH1.value.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement('h1', { ref: this.myH1 }, 'Hello World!');
  }
}

ReactDOM.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
);
