/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */
/* eslint react/prop-types:"off", react/display-name:"off" */

// HOC
function withExtras(WrappedComponent) {
  return props => {
      // Filter out extra props that are specific to this HOC and shouldn't be
      // passed through
      const { extraColor, ...passThroughProps } = props;

      return (
        <div style={{ color: extraColor }}>
          <WrappedComponent {...passThroughProps} />
        </div>
      );
    }
  }

const Greeting = ({name}) => <h1>Hello {name}!</h1>;

const GreetingWithExtras = withExtras(Greeting);

const App = () => <GreetingWithExtras extraColor="red" name="World" />;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);