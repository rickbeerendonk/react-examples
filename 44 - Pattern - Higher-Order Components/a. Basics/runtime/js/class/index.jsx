/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// HOC
function withExtras(WrappedComponent) {
  class WithExtras extends React.Component {
    render() {
      // Filter out extra props that are specific to this HOC and shouldn't be
      // passed through
      const { extraColor, ...passThroughProps } = this.props;

      return (
        <div style={{ color: extraColor }}>
          <WrappedComponent {...passThroughProps} />
        </div>
      );
    }
  }

  return WithExtras;
}

class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

const GreetingWithExtras = withExtras(Greeting);

class App extends React.Component {
  render() {
    return <GreetingWithExtras extraColor="red" name="World" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
