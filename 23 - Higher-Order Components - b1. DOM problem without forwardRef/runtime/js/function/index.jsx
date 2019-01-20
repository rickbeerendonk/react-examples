/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Higher-Order Component
function withExtras(WrappedComponent) {
  const WithExtras = props => <WrappedComponent {...props} />;
  return WithExtras;
}

function Greeting(props) {
  return <h1 ref={props.ref}>Hello {props.name}!</h1>;
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
    return (
      <GreetingWithExtras
        name="World <- Should be replaced"
        ref={this.myGreeting}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
