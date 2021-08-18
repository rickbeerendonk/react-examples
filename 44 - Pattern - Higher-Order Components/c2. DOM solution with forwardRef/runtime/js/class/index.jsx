/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Higher-Order Component
function withExtras(WrappedComponent) {
  class WithExtras extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  const WithExtrasForwardRef = React.forwardRef((props, ref) => (
    <WithExtras {...props} forwardedRef={ref} />
  ));
  WithExtrasForwardRef.displayName = `WithExtrasForwardRef(${getDisplayName(
    WrappedComponent
  )})`;

  return WithExtrasForwardRef;
}

class Greeting extends React.Component {
  render() {
    return <h1 ref={this.props.forwardedRef}>Hello {this.props.name}!</h1>;
  }
}

const GreetingWithExtras = withExtras(Greeting);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.myGreeting = React.createRef();
  }
  componentDidMount() {
    this.myGreeting.current.innerHTML = 'Hi <u>React</u>!!!';
  }
  render() {
    return (
      <GreetingWithExtras
        name="World <- Should be replaced"
        ref={this.myGreeting}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
