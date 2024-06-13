/* global React, ReactDOM */

class HelloReact extends React.Component {
  render() {
    return <h1>Hello React!</h1>;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<HelloReact />);
