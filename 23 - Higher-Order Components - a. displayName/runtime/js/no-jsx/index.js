/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* global React, ReactDOM */

// Helper function
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

// HOC
function withExtras(WrappedComponent) {
  class WithExtras extends React.Component {
    render() {
      // Filter out extra props that are specific to this HOC and shouldn't be
      // passed through
      const { extraColor, ...passThroughProps } = this.props;

      return React.createElement(
        'div',
        { style: { color: extraColor } },
        React.createElement(WrappedComponent, { ...passThroughProps })
      );
    }
  }
  WithExtras.displayName = `WithExtras(${getDisplayName(WrappedComponent)})`;

  return WithExtras;
}

function Greeting({ name }) {
  return React.createElement('h1', null, 'Hello ', name, '!');
}

const GreetingWithExtras = withExtras(Greeting);

class App extends React.Component {
  render() {
    return React.createElement(GreetingWithExtras, {
      extraColor: 'red',
      name: 'World'
    });
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
