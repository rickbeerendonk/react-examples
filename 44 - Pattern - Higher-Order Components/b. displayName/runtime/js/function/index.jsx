/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

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

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

const GreetingWithExtras = withExtras(Greeting);

function App() {
  return <GreetingWithExtras extraColor="red" name="World" />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
