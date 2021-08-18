/* global React, ReactDOM */

class HelloReact extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

ReactDOM.render(<HelloReact />, document.getElementById('root'));
