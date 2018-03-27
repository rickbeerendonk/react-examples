/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/display-name:"off" */

// Higher-Order Component
function withExtras(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        React.createElement(WrappedComponent,  this.props)
      );
    }
  }
}
const Greeting = React.forwardRef((props, ref) => (
  React.createElement('h1', { ref }, 'Hello ', props.name, '!')
));

const GreetingWithExtras = withExtras(Greeting);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hello <i>React</i>!!!';
  }
  render() {
    return React.createElement(GreetingWithExtras, { ref: this.myGreeting, name: 'World'});
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
);
