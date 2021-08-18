/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */
/* eslint react/no-string-refs: off */

class HelloWorld extends React.Component {
  componentDidMount() {
    this.refs.myH1.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <h1 ref="myH1">Hello World!</h1>;
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
