/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Higher-Order Component
function withExtras(WrappedComponent) {
  return class WithExtras extends React.Component {
    render() {
      return React.createElement(WrappedComponent, this.props);
    }
  };
}

function Greeting(props) {
  return React.createElement(
    'h1',
    { ref: props.ref },
    'Hello ',
    props.name,
    '!'
  );
}

const GreetingWithExtras = withExtras(Greeting);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hi <i>React</i>!!!';
  }
  render() {
    return React.createElement(GreetingWithExtras, {
      ref: this.myGreeting,
      name: 'World <- Should be replaced'
    });
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
