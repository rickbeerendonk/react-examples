/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.myH1 = React.createRef();
  }
  componentDidMount() {
    // this.myH1.current contains a reference to the real DOM node.
    this.myH1.current.innerHTML = 'Hello <u>React</u>!!!';
  }
  render() {
    return <h1 ref={this.myH1}>Hello World!</h1>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />);
