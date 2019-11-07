/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// Higher-Order Component
function withExtras(WrappedComponent) {
  function WithExtras(props) {
    return <WrappedComponent {...props} />;
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

function Greeting(props) {
  return <h1 ref={props.forwardedRef}>Hello {props.name}!</h1>;
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

ReactDOM.render(<App />, document.getElementById('app'));
