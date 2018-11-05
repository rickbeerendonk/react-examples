/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// HOC
function withExtras(WrappedComponent) {
  const WithExtras = props => {
    // Filter out extra props that are specific to this HOC and shouldn't be
    // passed through
    const { extraColor, ...passThroughProps } = props;

    return (
      <div style={{ color: extraColor }}>
        <WrappedComponent {...passThroughProps} />
      </div>
    );
  };
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  return WithExtras;
}

const Greeting = ({ name }) => <h1>Hello {name}!</h1>;

const GreetingWithExtras = withExtras(Greeting);

const App = () => <GreetingWithExtras extraColor="red" name="World" />;

ReactDOM.render(<App />, document.getElementById('app'));
