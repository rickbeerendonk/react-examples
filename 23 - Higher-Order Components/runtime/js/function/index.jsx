/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

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

  return WithExtras;
}

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

const GreetingWithExtras = withExtras(Greeting);

function App() {
  return <GreetingWithExtras extraColor="red" name="World" />;
}

ReactDOM.render(<App />, document.getElementById('app'));
