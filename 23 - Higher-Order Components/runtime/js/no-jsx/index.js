/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

/* global React, ReactDOM */

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